// src/modules/summarizer/dto/summarizer-input.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SummarizerInputDto {
  @ApiProperty()
  @IsString()
  content: string;
}
