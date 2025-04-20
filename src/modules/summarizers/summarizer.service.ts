// src/modules/summarizer/summarizer.service.ts
import { Injectable } from '@nestjs/common';
import { SummarizerInputDto } from '@dto/summarizer-input.dto';
import { BrdOutputDto } from '@dto/brd-output.dto';
import { OllamaService } from '@shared/ollama/ollama.service';

@Injectable()
export class SummarizerService {
  constructor(private readonly ollamaService: OllamaService) {}

  async summarizeToBRD(input: SummarizerInputDto): Promise<BrdOutputDto> {
    const prompt = `
You are a professional business analyst.
Given the following document content, extract and summarize it into a business requirement document with:
- Summary
- Key Business Goals (as a list)
- Major Requirements (as a list)

Content:
${input.content}
`;

    const response = await this.ollamaService.generate(prompt);

    // Parse the response from Ollama and structure it
    // Example structure for parsed data (you may enhance parsing based on your LLM output):
    return {
      summary: response,
      goals: ['Goal 1', 'Goal 2'], // These should be extracted from LLM output
      requirements: ['Requirement 1', 'Requirement 2'], // Extract from LLM
    };
  }
}
