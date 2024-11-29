import fs from "fs";
import { IncomingForm } from "formidable";
import aws from "aws-sdk";

// AWS S3 configuration
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// Disable bodyParser for Next.js API routes to handle file uploads with formidable
export const config = {
  api: {
    bodyParser: false, // Disable Next.js built-in body parser
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error while parsing form:", err);
        return res
          .status(500)
          .json({ error: "Form parsing failed", details: err.message });
      }

      // Log parsed fields and files to ensure they are correct
      console.log("Parsed fields:", fields);
      console.log("Parsed files:", files);

      // Destructure and ensure all metadata fields are strings
      const { title, preacher, date, series, desc } = fields;

      // Ensure metadata is a string (formidable returns arrays, so use the first value)
      const metadata = {
        title: title ? String(title[0]) : "",
        preacher: preacher ? String(preacher[0]) : "",
        date: date ? String(date[0]) : "",
        series: series ? String(series[0]) : "",
        desc: desc ? String(desc[0]) : "",
      };

      // Check if all required fields are present
      if (
        !files.audioFile ||
        !metadata.title ||
        !metadata.preacher ||
        !metadata.date ||
        !metadata.series ||
        !metadata.desc
      ) {
        console.error("Missing required fields:", metadata);
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Read file from temporary path
      const filePath = files.audioFile[0].filepath; // Correct file field name here
      const fileStream = fs.createReadStream(filePath);

      // Set S3 upload parameters
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `sermons/${Date.now()}-${files.audioFile[0].originalFilename}`,
        Body: fileStream,
        ContentType: files.audioFile[0].mimetype,
        Metadata: metadata, // Use the string metadata
      };

      // Upload file to S3
      try {
        const s3Response = await s3.upload(params).promise();
        // Remove temporary file after upload
        fs.unlinkSync(filePath);

        console.log("S3 Upload successful:", s3Response);
        return res.status(200).json({
          message: "File uploaded successfully",
          s3Response,
        });
      } catch (uploadError) {
        console.error("Error during S3 upload:", uploadError);
        return res
          .status(500)
          .json({ error: "File upload failed", details: uploadError.message });
      }
    });
  } else {
    // Handling for other HTTP methods
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}