import { Module } from '@nestjs/common';
import { FileController } from '@modules/file/file.controller';
import { ExtractorService } from '@modules/extractors/extractor.service';
import { SummarizerModule } from '@modules/summarizers/summarizer.module';

@Module({
  imports: [SummarizerModule],
  controllers: [FileController],
  providers: [ExtractorService],
})
export class AppModule {}
