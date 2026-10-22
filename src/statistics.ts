
export function min(values: number[]): number | undefined {
  if (values.length === 0) return undefined;
  return Math.min(...values);
}

export function max(values: number[]): number | undefined {
  if (values.length === 0) return undefined;
  return Math.max(...values);
}

export function mean(values: number[]): number | undefined {
  if (values.length === 0) return undefined;
  return values.reduce((acc, v) => acc + v, 0) / values.length;
}