import * as fs from 'fs'; // <-- This was missing
import * as pdfParse from 'pdf-parse';
import { ExtractorStrategy } from '@modules/extractors/interfaces/extractor.interface';

export class PdfExtractorStrategy implements ExtractorStrategy {
  async extract(filePath: string): Promise<string> {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;
  }
}
