import {Calculator} from "./calculator.ts";


const course: string = "ZPSM";
const year: number = 2026;

console.log(`${course} ${year} - environment is up`);

//-------------------------------------------------------

const calc = new Calculator([2, "seven", 4, null, 8]);

console.log(calc.add());
console.log(calc.multiply());

//-------------------------------------------------------

import { min, max, mean } from "./statistics.ts";

console.log(min([2, 4, 8]));
console.log(max([2, 4, 8]));
console.log(mean([2, 4, 8]));