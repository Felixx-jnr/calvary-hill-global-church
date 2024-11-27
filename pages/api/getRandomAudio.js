import AWS from "aws-sdk";
import { PrismaClient } from "@prisma/client"; // Adjust according to your database library

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Fetch a random audio file from the database
    const totalCount = await prisma.audioFile.count();
    if (totalCount === 0) {
      return res
        .status(404)
        .json({ error: "No audio files found in the database" });
    }

    const randomIndex = Math.floor(Math.random() * totalCount);

    const randomAudio = await prisma.audioFile.findFirst({
      skip: randomIndex, // Skip a random number of records
    });

    if (!randomAudio) {
      return res
        .status(404)
        .json({ error: "Failed to retrieve a random audio file" });
    }

    const { key, metadata } = randomAudio;

    // Decode key for S3 lookup
    const decodedKey = decodeURIComponent(key);

    // Generate presigned URL with 1-hour expiration
    const url = s3.getSignedUrl("getObject", {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: decodedKey,
      Expires: 60 * 60,
    });

    res.status(200).json({
      url, // Pass presigned URL for direct download
      metadata: {
        title: metadata?.title || "Unknown Title",
        date: metadata?.date || "Unknown Date",
        art: metadata?.art || "/default.jpg",
        desc: metadata?.desc || "No description available",
      },
    });
  } catch (error) {
    console.error("Error fetching random audio file:", error);
    res.status(500).json({ error: "Failed to fetch random audio file" });
  } finally {
    await prisma.$disconnect();
  }
}
