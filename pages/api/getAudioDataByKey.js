// pages/api/getAudioDataByKey.js
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
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
    const metadata = await s3.headObject(params).promise();

    // Generate presigned URL with 1-hour expiration
    const url = s3.getSignedUrl("getObject", {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
      Expires: 60 * 60,
    });

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
