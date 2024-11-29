import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Function to parse dates like "23th March, 2023"
const parseCustomDate = (dateString) => {
  const ordinalSuffixRegex = /\d+(st|nd|rd|th)/;
  const cleanedDateString = dateString.replace(ordinalSuffixRegex, (match) =>
    match.slice(0, -2)
  ); // Remove suffix
  return new Date(cleanedDateString);
};

export default async function handler(req, res) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
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
              Bucket: process.env.AWS_BUCKET_NAME,
              Key: file.Key,
              Expires: 60 * 60, // URL expiration time in seconds
            }),
            metadata: metadata.Metadata,
            fileSize: metadata.ContentLength,
            lastModified: metadata.LastModified,
          };
        })
    );

    // Sort audioFiles by the 'date' field in metadata (descending order)
    const sortedAudioFiles = audioFiles.sort((a, b) => {
      const dateA = parseCustomDate(a.metadata.date);
      const dateB = parseCustomDate(b.metadata.date);
      return dateB - dateA; // Descending order
    });

    res.status(200).json(sortedAudioFiles);
  } catch (error) {
    console.error("Error fetching audio files and metadata:", error);
    res.status(500).json({
      error: "Failed to fetch audio files and metadata",
      details: error.message,
    });
  }
}
