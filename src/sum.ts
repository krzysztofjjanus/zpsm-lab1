/*
export function sum(...values: number[]): number {
  let total = 0;
  for (const x of values) {
    total += x;
  }
  return total;
}
*/

export function sum(...values: number[]): number {
  return values.reduce((total, x) => total + x, 0);
}

