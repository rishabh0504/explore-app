import { Module } from '@nestjs/common';
import { SummarizerService } from './summarizer.service';
import { SummarizerController } from './summarizer.controller';
import { OllamaService } from '@shared/ollama/ollama.service';

@Module({
  imports: [],
  providers: [SummarizerService, OllamaService],
  controllers: [SummarizerController],
  exports: [SummarizerService],
})
export class SummarizerModule {}
