import { ExtractorStrategy } from '@modules/extractors/interfaces/extractor.interface';
import * as fs from 'fs/promises';

export class TxtExtractorStrategy implements ExtractorStrategy {
  async extract(filePath: string): Promise<string> {
    return await fs.readFile(filePath, 'utf-8');
  }
}
