// src/modules/summarizer/dto/brd-output.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class BrdOutputDto {
  @ApiProperty()
  summary: string;

  @ApiProperty()
  goals: string[];

  @ApiProperty()
  requirements: string[];
}
