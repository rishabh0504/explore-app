import {
  FileExtractionResultDto,
  FileInputDto,
} from '@dto/upload-response.dto';
import { ExtractorService } from '@modules/extractors/extractor.service';
import { IMCPNode } from '@modules/mcp/core/mcp-node.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FileExtractorMCPNode
  implements IMCPNode<FileInputDto, FileExtractionResultDto>
{
  constructor(private readonly extractorService: ExtractorService) {}

  async execute(input: FileInputDto): Promise<FileExtractionResultDto> {
    const content = await this.extractorService.extractContent(
      input.filePath,
      input.extension,
    );

    return {
      filename: input.filePath.split('/').pop() ?? 'unknown',
      content,
    };
  }
}
