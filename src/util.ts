import Busboy from 'busboy';
import { Request } from 'express';

/**
 * Utility function to handle file upload and return it as a buffer.
 * @param req - Express Request object
 * @returns Promise with the file buffer and metadata
 */
export const fileStreamToBuffer = (req: Request): Promise<{ buffer: Buffer; filename: string; mimeType: string }> => {
  return new Promise((resolve, reject) => {
    const busboy = Busboy({ headers: req.headers });
    let fileBuffer: Buffer = Buffer.alloc(0);  // Initialize buffer
    let fileInfo: { filename: string; mimeType: string } | null = null;

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      fileInfo = { filename, mimeType: mimetype };

      // Collect file data into buffer
      file.on('data', (data) => {
        fileBuffer = Buffer.concat([fileBuffer, data]);
      });

      file.on('end', () => {
        console.log(`File [${filename}] finished.`);
      });
    });

    busboy.on('finish', () => {
      if (!fileInfo) {
        return reject(new Error('No file uploaded'));
      }

      // Return the file buffer and metadata
      resolve({
        buffer: fileBuffer,
        filename: fileInfo.filename,
        mimeType: fileInfo.mimeType,
      });
    });

    busboy.on('error', (err) => {
      return reject(err);
    });

    req.pipe(busboy);
  });
};
