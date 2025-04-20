// src/modules/file/file.controller.ts
import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ExtractorService } from '@modules/extractors/extractor.service';
import { UploadResponseDto } from '@dto/upload-response.dto';
import { ApiConsumes, ApiBody, ApiTags } from '@nestjs/swagger';
import { SummarizerService } from '@modules/summarizers/summarizer.service';

@ApiTags('Files')
@Controller('files')
export class FileController {
  constructor(
    private readonly extractorService: ExtractorService,
    private readonly summarizerService: SummarizerService,
  ) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = `${Date.now()}-${file.originalname}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UploadResponseDto> {
    const ext = extname(file.originalname).toLowerCase();
    const content = await this.extractorService.extractContent(file.path, ext);

    // Summarize the extracted content into BRD
    const brd = await this.summarizerService.summarizeToBRD({ content });

    return {
      filename: file.originalname,
      content: brd.summary,
    };
  }
}
