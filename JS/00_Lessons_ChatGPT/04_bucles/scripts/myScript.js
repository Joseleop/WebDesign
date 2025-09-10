// Contar y saltar
  // Recorre del 1 al 20 con un for.
  // Muestra solo los números pares (usa continue para saltar los impares).
// Suma acumulada
  // Con un while, suma todos los múltiplos de 3 desde 0 hasta 100 (inclusive) y muestra el total.
// Recorrer array
  // Dado un array con 5 aficiones, recórrelo con for...of y muestra: Índice: X, Valor: Y.
  // Pista: puedes llevar tú mismo un contador de índice (let idx = 0;) e incrementarlo en cada vuelta.
// Recorrer objeto
  // Crea un objeto libro con titulo, autor, anio, paginas.
  // Recorre sus claves con for...in y muestra clave: valor en cada línea.
// Reto (opcional):
  // Recorre los números del 1 al 100.
  // Si el número es múltiplo de 3, muestra "Fizz"; si es múltiplo de 5, "Buzz"; si es de ambos, "FizzBuzz"; si no, el número.


for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i + "números pares")
  } else {
    continue;
  }
}


// let _multiple = 0;
// let _adition = 0;
// while (_multiple <= 100 && (_multiple % 3 === 0)) {
//     console.log(_multiple + "multiplo de 3")
//     _adition+=_multiple
//   _multiple++;
// }
// Resultado en consola: 0multiplo de 3

let _multiple = 0;
let _adition = 0;
while (_multiple <= 100) {
  if (_multiple % 3 === 0) {
    // console.log(_multiple + " multiplo de 3")
    _adition+=_multiple;
    // console.log(_adition + " sumando");
  }
  _multiple++;
}
console.log(_adition + " total de la suma");


const _hobbies = ["videojuegos", "libros", "motos", "coches", "ordenadores"]
let _index = 0;
for (const hobbies of _hobbies) {
  console.log("X: " + _index,"| Y: " + hobbies);
  _index++;
}


let _book = {título: "El Señor de los anillos", autor: "JRR Tolkien", año: 1954, páginas: 1500}
for (const key in _book) {
  console.log(key + ": " + _book[key]);
}


for (let i = 1; i < 100; i++) {
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  } else if(i % 5 === 0) {
    console.log ("Buzz");
  } else if (i % 3 === 0) {
    console.log ("Fizz");
  } else {
    console.log(i);
  }
}
