// Type Coercion Examples in JavaScript

console.log("1" + 0);         // "10" → string + number = string concatenation
console.log("5" - 2);         // 3 → string - number = numeric conversion
console.log(5 + true);        // 6 → true becomes 1
console.log(5 + false);       // 5 → false becomes 0
console.log(1 + null);        // 1 → null becomes 0
console.log(1 + undefined);   // NaN → undefined can't be converted to number

console.log("5" * 2);         // 10 → string coerced to number
console.log("five" * 2);      // NaN → "five" can't be parsed as number

console.log("true" + false);  // "truefalse" → string + boolean = string
console.log("hello" + null);  // "hellonull" → null becomes "null"
console.log("test" + undefined); // "testundefined" → undefined becomes "undefined"

console.log([] + []);         // "" → empty arrays become empty strings
console.log([] + {});         // "[object Object]" → object becomes string
console.log({} + []);         // 0 → special case ({} is parsed as block)

console.log([1,2] + [3,4]);   // "1,23,4" → arrays become strings, then concatenated
console.log([1,2] - [3,4]);   // NaN → arrays can't be subtracted
console.log([1,2] * 2);       // NaN → arrays can't be multiplied
console.log([1,2] == "1,2"); // true → array becomes string

// Bonus: equality comparisons
console.log(false == 0);      // true → false is coerced to 0
console.log("" == 0);         // true → empty string becomes 0
console.log(null == undefined); // true → special rule
console.log(null === undefined); // false → strict equality checks type too

// Safer alternative: use === for strict comparisons
console.log("5" === 5);       // false → no type coercion
console.log(null === undefined); // false → different types
console.log(true === 1);      // false → different types
console.log(false === 0);     // false → different types
console.log(0 === false);     // false → different types
console.log(1 === true);      // false → different types
console.log("5" === "5");    // true → same string
console.log(5 === 5);        // true → same number
console.log(null === null);  // true → same value