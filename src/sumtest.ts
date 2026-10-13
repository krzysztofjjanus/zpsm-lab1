import {sum} from "./sum.ts";

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(2, 4, 6));
// console.log(sum());

console.log("Result:", sum(1, 2, "text", 4, "string"));
console.log("Result:", sum(2, {}, 6));

