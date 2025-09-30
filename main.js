/**
 * Simple script to calculate compound interest.
 * Usage: node main.js
 */

function compound(principal, rate, periods) {
  return principal * Math.pow(1 + rate, periods);
}

const principal = 1000;
const rate = 0.05;
const periods = 5;

const futureValue = compound(principal, rate, periods);
console.log(`Future value: ${futureValue.toFixed(2)}`);
