/*
Algorithm
var temp = Enter temp in degree celcuis;
var fahr = (9/5)(temp)-32;
document.write("fahr")
*/

const input = document.getElementById("input");
const output = document.getElementById("output");
const butTon = document.getElementById("btn");

butTon.addEventListener("click", conVert);

function conVert() {
  console.log(typeof input.value);
  if (isNaN(input.value)) {
    output.textContent = "Invalid input. Please enter a number";
    return;
  } else {
    const x = input.value;
    y = (9 / 5) * x + 32;
    output.textContent = y;
  }
}
