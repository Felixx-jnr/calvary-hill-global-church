import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID, // Updated to match your env variable
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY, // Updated to match your env variable
  region: process.env.NEXT_PUBLIC_AWS_REGION, // Updated to match your env variable
});

export default async function handler(req, res) {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME, // Updated to match your env variable
    Prefix: "", // Set if your audio files are in a subdirectory
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    const audioFiles = data.Contents.map((file) => ({
      fileName: file.Key,
      url: s3.getSignedUrl("getObject", {
        Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME, // Updated to match your env variable
        Key: file.Key,
        Expires: 60 * 60, // URL expiration time in seconds
      }),
    }));
    res.status(200).json(audioFiles);
    console.log(audioFiles);
  } catch (error) {
    console.error("Error fetching audio files:", error); // Log the error to the server console
    res
      .status(500)
      .json({ error: "Failed to fetch audio files", details: error.message }); // Include error details
  }
}
