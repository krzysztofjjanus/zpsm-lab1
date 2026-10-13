// src/clalculator.ts

function isUsableNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export class Calculator {
  private readonly values: number[];
  private readonly rejected: unknown[];

  constructor(input: unknown[]) {
    this.values = input.filter(isUsableNumber);
    this.rejected = input.filter((v) => !isUsableNumber(v));

    if (this.rejected.length > 0) {
      console.log(
        `Ignored ${this.rejected.length} non-number element(s):`,
        this.rejected.map((v) => (typeof v === "number" ? String(v) : JSON.stringify(v) ?? String(v)))
      );
    }
  }

  add(): number {
    return this.values.reduce((acc, v) => acc + v, 0);
  }

  subtract(): number {
    const first = this.values[0];
    if (first === undefined) return 0;
    return this.values.slice(1).reduce((acc, v) => acc - v, first);
    }

  multiply(): number {
    return this.values.reduce((acc, v) => acc * v, 1);
  }

  divide(): number {
    const first = this.values[0];
    if (first === undefined) return 0;
    const rest = this.values.slice(1);
    if (rest.includes(0)) {
        throw new Error("Cannot divide by zero");
    }
    return rest.reduce((acc, v) => acc / v, first);
    }
}