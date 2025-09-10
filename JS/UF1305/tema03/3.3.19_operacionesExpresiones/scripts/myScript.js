let x = 10;
let y = 5;
let str1 = "Hola";
let str2 = "Mundo";
let a = 5;
let b = 2;
let num = 16;
let resultado;
let obj = {};

console.log(x += 5);
console.log(y *= 3);
console.log(resultado = a % b);

let saludo = str1 + " " + str2;
if (saludo === "Hola Mundo") {
   console.log("Hola Mundo");
} else {
   console.log ("Adiós Mundo");
}

if (x !== y) {
   console.log("X es igual de Y? " + x !== y + " Es False")
} else {
   console.log ("X es diferente a Y? " + x !== y + " Es True");
}

resultado = a & b;
console.log("a & b es: " + resultado);

resultado = num >> 2;
console.log("num >> 2 es: " + resultado);

resultado = (x > y) && (a < b); 
console.log("(x > y) && (a < b) es: " + resultado);

resultado = !resultado;
console.log("!resultado =", resultado);

console.log("El tipo de saludo es " + typeof saludo);