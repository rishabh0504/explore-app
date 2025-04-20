export interface ExtractorStrategy {
  extract(filePath: string): Promise<string>;
}
