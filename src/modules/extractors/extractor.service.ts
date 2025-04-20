import { ExtractorStrategy } from '@modules/extractors/interfaces/extractor.interface';
import { DocxExtractorStrategy } from '@modules/extractors/strategies/docx-extractor.strategy';
import { PdfExtractorStrategy } from '@modules/extractors/strategies/pdf-extractor.strategy';
import { TxtExtractorStrategy } from '@modules/extractors/strategies/txt-extractor.strategy';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExtractorService {
  private getStrategy(extension: string): ExtractorStrategy {
    switch (extension) {
      case '.pdf':
        return new PdfExtractorStrategy();
      case '.txt':
        return new TxtExtractorStrategy();
      case '.docx':
        return new DocxExtractorStrategy();
      default:
        throw new Error('Unsupported file type');
    }
  }

  async extractContent(filePath: string, ext: string): Promise<string> {
    const strategy = this.getStrategy(ext);
    return strategy.extract(filePath);
  }
}
