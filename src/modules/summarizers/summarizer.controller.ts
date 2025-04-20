// src/modules/summarizer/summarizer.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { SummarizerService } from './summarizer.service';
import { SummarizerInputDto } from '@dto/summarizer-input.dto';
import { BrdOutputDto } from '@dto/brd-output.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Summarizer')
@Controller('summarizer')
export class SummarizerController {
  constructor(private readonly summarizerService: SummarizerService) {}

  @Post()
  @ApiBody({ type: SummarizerInputDto })
  @ApiResponse({ type: BrdOutputDto })
  async summarize(@Body() input: SummarizerInputDto): Promise<BrdOutputDto> {
    return this.summarizerService.summarizeToBRD(input);
  }
}
