/*
export function sum(...values: number[]): number {
  let total = 0;
  for (const x of values) {
    total += x;
  }
  return total;
}
*/

export function sum(...values: unknown[]): number {
  const errors: string[] = [];
  let total = 0;

  for (const [i, value] of values.entries()) {
    if (typeof value === "number" && Number.isFinite(value)) {
      total += value;
    } else {
      const shown =
        typeof value === "number" ? String(value) : (JSON.stringify(value) ?? String(value));
      errors.push(`Argument ${i + 1} is not a number: ${shown}`);
    }
  }

  errors.forEach((e) => console.log(e));
  return total;
}
