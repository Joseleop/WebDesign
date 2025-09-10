let _peso;
let _altura;
let _imc;
let _value;

function $inputPeso(){
   // console.log("hola")
   _peso = parseInt(prompt("Por favor, inserta tu peso:"));
   document.getElementById("peso").style.display='none';
   document.getElementById("pesoTexto").innerHTML = "Tu peso es " + (_peso);
}
function $inputAltura(){
   // console.log("hola")
   _altura = parseInt(prompt("Por favor, inserta tu altura en centímetros:"));
   document.getElementById("altura").style.display='none';
   document.getElementById("alturaTexto").innerHTML = "Tu altura es " + (_altura) + " centímetros";
}
function $imcCalc(){
   // console.log("hola")
   _imc = _peso / ((_altura/100) * (_altura/100));
   document.getElementById("resultado").style.display='none';

   if (_imc < 18.5) {
    _value = "Clasificación: Bajo peso";
} else if (_imc >= 18.5 && _imc < 25) {
    _value = "Clasificación: Peso normal";
} else if (_imc >= 25 && _imc < 30) {
    _value = "Clasificación: Sobrepeso";
} else {
    _value = "Clasificación: Obesidad";
}

   document.getElementById("textoResultado").innerHTML = "Tu IMC es " + (_imc.toFixed(2)) + " | " + (_value);
}
