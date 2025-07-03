const { processData } = require("./processor.js");
// Input
const input = [
  "abc1234",
  "XYZ0001",
  "123ABCD",
  "A1B2C3D",
  "lmn9876",
  "DEF5678",
];

// Output
const validSortedDigitCodes = processData(input);
console.log(validSortedDigitCodes);
