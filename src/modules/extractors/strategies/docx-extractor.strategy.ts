import * as mammoth from 'mammoth';
import { ExtractorStrategy } from '@modules/extractors/interfaces/extractor.interface';

export class DocxExtractorStrategy implements ExtractorStrategy {
  async extract(filePath: string): Promise<string> {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  }
}
