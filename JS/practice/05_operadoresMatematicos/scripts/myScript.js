let _firstNumber;
let _secondNumber;
let _result;

function $getFirstNumber() {
   _firstNumber = parseFloat(prompt("Introduce el primer valor"));

   // if (!isNaN(_firstNumber) && Number.isInteger(_firstNumber) && _firstNumber > 0) {
   //    document.getElementById("firstNumber").innerHTML = "El primer número es " + (_firstNumber);
   // } else {
   //    alert("Por favor, introduce un número válido");
   // }
   if (!isNaN(_firstNumber) && Number.isInteger(_firstNumber) && _firstNumber >= 0) {
      document.getElementById("firstNumber").innerHTML = "El primer número es " + (_firstNumber);
   } else {
      alert("Por favor, introduce un número válido");
   }
}
function $getSecondNumber() {
   _secondNumber = parseInt(prompt("Introduce el primer valor"));

   if (!isNaN(_secondNumber) && Number.isInteger(_secondNumber) && _secondNumber >= 0) {
      document.getElementById("secondNumber").innerHTML = "El segundo número es " + (_secondNumber);
   } else {
      alert("Por favor, introduce un número válido");
   }
}
function $addition() {
   document.getElementById("result").innerHTML = "El resultado de la operación es " + (_firstNumber + _secondNumber);
}
function $substraction() {
   document.getElementById("result").innerHTML = "El resultado de la operación es " + (_firstNumber - _secondNumber);
}
function $multiplication() {
   document.getElementById("result").innerHTML = "El resultado de la operación es " + (_firstNumber * _secondNumber);
}
function $division() {
   document.getElementById("result").innerHTML = "El resultado de la operación es " + (_firstNumber / _secondNumber);
}
function $exponentiation() {
   document.getElementById("result").innerHTML = "El resultado de la operación es " + (_firstNumber ** _secondNumber);
}