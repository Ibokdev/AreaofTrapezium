import './style.css'
const height = document.getElementById("height")
// console.log (height)
const breadth1 = document.querySelector("#breadth1")
// console.log (breadth1)
const breadth2 = document.querySelector("#breadth2")
// console.log (breadth2)
const calculate = document.getElementById("calculate");
// console.log (calculate)
const output =document.getElementById("output")

const Divisor = 2;

function CalculateArea(params) {
  console.log ({height, breadth1, breadth2})
  if( height.value && breadth1.value && breadth2){
    const val = ((breadth1.value + breadth2.value)/Divisor) * height.value
    output.textContent = val
  } else {
    alert ("please input complete values")
  }
 
}
calculate.addEventListener("click", CalculateArea) 