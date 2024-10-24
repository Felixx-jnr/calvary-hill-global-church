import * as musicMetadata from "music-metadata";

/**
 * Extracts metadata from an audio file buffer.
 * @param {Buffer} fileBuffer - The audio file buffer.
 * @param {string} mimeType - The mime type of the file (e.g., 'audio/mp3').
 * @returns {Promise<Object>} - The extracted metadata.
 */
export async function extractMetadata(
  fileBuffer: Buffer | Uint8Array,
  mimeType = "audio/mp3"
) {
  try {
    // Extract metadata using music-metadata
    const metadata = await musicMetadata.parseBuffer(fileBuffer, mimeType);
    return metadata;
  } catch (error) {
    console.error("Error extracting metadata:", error);
    return null;
  }
}
