import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default async function handler(req, res) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Prefix: "sermons", // Adjust if your files are in a subdirectory
  };

  try {
    // Step 1: List all files in the bucket
    const data = await s3.listObjectsV2(params).promise();

    // Filter files to exclude directories or empty files
    const validFiles = data.Contents.filter((file) => file.Size > 0);

    if (validFiles.length === 0) {
      return res.status(404).json({ error: "No files found in the bucket" });
    }

    // Step 2: Select a random file
    const randomFile =
      validFiles[Math.floor(Math.random() * validFiles.length)];

    // Step 3: Fetch metadata for the random file
    const metadata = await s3
      .headObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: randomFile.Key,
      })
      .promise();

    // Step 4: Generate a presigned URL for the random file
    const url = s3.getSignedUrl("getObject", {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: randomFile.Key,
      Expires: 60 * 60, // URL expiration time in seconds
    });

    // Step 5: Return file details, metadata, and the URL
    res.status(200).json({
      fileName: randomFile.Key,
      url,
      metadata: metadata.Metadata || {},
      fileSize: metadata.ContentLength, // Optional metadata
      lastModified: metadata.LastModified, // Optional metadata
    });
  } catch (error) {
    console.error("Error fetching random audio file:", error);
    res.status(500).json({
      error: "Failed to fetch random audio file",
      details: error.message,
    });
  }
}
