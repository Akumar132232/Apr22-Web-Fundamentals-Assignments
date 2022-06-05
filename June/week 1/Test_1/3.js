let i = 0;
let s = "";
let sum = 0;
let num = prompt("Please enter any number");
for (i = 0; i <= 2 * parseInt(num); i++) {
  if (i % 2 != 0) {
    sum = sum + i;
    s += i + "+";
  }
}
s = s.split("").slice(0, -1).join("");
console.log(`Sum of first ${num} odd natural numbers ${s} = ${sum}`);
