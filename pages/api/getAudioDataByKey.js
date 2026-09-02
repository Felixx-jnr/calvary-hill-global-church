// pages/api/getAudioDataByKey.js
import {
  S3Client,
  HeadObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  let { key } = req.query;

  if (!key) {
    return res.status(400).json({ error: "Key parameter is required" });
  }

  // Decode key for S3 lookup
  key = decodeURIComponent(key);
  console.log("Decoded key used for S3 lookup:", key); // Log for debugging

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  };

  try {
    const metadata = await s3.send(new HeadObjectCommand(params));

    // Generate presigned URL with 1-hour expiration
    const url = await getSignedUrl(
      s3,
      new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
      }),
      { expiresIn: 60 * 60 }
    );

    res.status(200).json({
      url, // Pass presigned URL for direct download
      metadata: {
        title: metadata.Metadata.title || "Unknown Title",
        date: metadata.Metadata.date || "Unknown Date",
        art: metadata.Metadata.art || "/default.jpg",
        desc: metadata.Metadata.desc || "No description available",
      },
    });
  } catch (error) {
    console.error("Error fetching sermon details:", error);
    res.status(500).json({ error: "Failed to fetch sermon details" });
  }
}
