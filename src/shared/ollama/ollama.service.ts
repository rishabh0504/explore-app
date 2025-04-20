// src/shared/ollama/ollama.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OllamaService {
  private readonly ollamaBaseUrl = 'http://127.0.0.1:11434/api/generate';

  async generate(prompt: string, model = 'gemma3:4b'): Promise<string> {
    const response = await axios.post(this.ollamaBaseUrl, {
      model,
      prompt,
      stream: false,
    });

    return response.data.response?.trim();
  }
}
