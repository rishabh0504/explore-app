export interface IMCPNode<TInput, TOutput> {
  execute(input: TInput): Promise<TOutput>;
}
