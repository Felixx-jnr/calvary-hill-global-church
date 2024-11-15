import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Updated to match your env variable
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Updated to match your env variable
  region: process.env.AWS_REGION, // Updated to match your env variable
});

export default async function handler(req, res) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME, // Updated to match your env variable
    Prefix: "sermons", // Set if your audio files are in a subdirectory
  };

  try {
    // Fetch the list of audio files
    const data = await s3.listObjectsV2(params).promise();

    // Fetch metadata for each file
    const audioFiles = await Promise.all(
      data.Contents.filter((file) => file.Size > 0) // Filter out directories or empty files
        .map(async (file) => {
          const metadata = await s3
            .headObject({
              Bucket: process.env.AWS_BUCKET_NAME,
              Key: file.Key,
            })
            .promise();

          return {
            fileName: file.Key,
            url: s3.getSignedUrl("getObject", {
              Bucket: process.env.AWS_BUCKET_NAME, // Updated to match your env variable
              Key: file.Key,
              Expires: 60 * 60, // URL expiration time in seconds
            }),
            metadata: metadata.Metadata, // Add custom metadata here
            fileSize: metadata.ContentLength, // Example of other useful metadata
            lastModified: metadata.LastModified, // File last modified date
          };
        })
    );

    res.status(200).json(audioFiles);
  } catch (error) {
    console.error("Error fetching audio files and metadata:", error); // Log the error to the server console
    res.status(500).json({
      error: "Failed to fetch audio files and metadata",
      details: error.message,
    }); // Include error details
  }
}
