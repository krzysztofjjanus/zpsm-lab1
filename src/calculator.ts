// src/calculator.ts
import filter from "lodash/filter.js";
import reduce from "lodash/reduce.js";

function isUsableNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export class Calculator {
  private readonly values: number[];
  private readonly rejected: unknown[];

  constructor(input: unknown[]) {
    this.values = filter(input, isUsableNumber);
    this.rejected = filter(input, (v) => !isUsableNumber(v));

    if (this.rejected.length > 0) {
      console.log(
        `Ignored ${this.rejected.length} non-number element(s):`,
        this.rejected.map((v) => (typeof v === "number" ? String(v) : JSON.stringify(v) ?? String(v)))
      );
    }
  }

  add(): number {
    return reduce(this.values, (acc, v) => acc + v, 0);
  }

  subtract(): number {
    const first = this.values[0];
    if (first === undefined) return 0;
    return reduce(this.values.slice(1), (acc, v) => acc - v, first);
  }

  multiply(): number {
    return reduce(this.values, (acc, v) => acc * v, 1);
  }

  divide(): number {
    const first = this.values[0];
    if (first === undefined) return 0;
    const rest = this.values.slice(1);
    if (rest.includes(0)) {
      throw new Error("Cannot divide by zero");
    }
    return reduce(rest, (acc, v) => acc / v, first);
  }
}