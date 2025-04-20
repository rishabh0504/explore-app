import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UploadResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  filename: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  content: string;
}

export class FileInputDto {
  @IsString()
  filePath: string;

  @IsString()
  extension: string;
}

export class FileExtractionResultDto {
  @IsString()
  filename: string;

  @IsString()
  content: string;
}
