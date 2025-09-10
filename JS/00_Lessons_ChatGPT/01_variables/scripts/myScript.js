// Declara una variable con let que represente tu edad.
// Declara una constante con const que guarde el valor de π (3.1416).
// Intenta reasignar un nuevo valor a la constante (pi = 3) y observa qué ocurre.
// Declara una variable con var que guarde el nombre de una ciudad.
// Dentro de un bloque { ... }, declara otra variable let con el mismo nombre que la ciudad, pero con distinto valor. Comprueba cuál es visible dentro y fuera del bloque.

let _age = 34;
const _pi = 3.1416;

var _city = "Carmona";
// Uncaught ReferenceError: Carmona is not defined

// _pi = 4;
// Uncaught TypeError: invalid assignment to const '_pi'

console.log(_city);

{
   let _city = "Sevilla";

   console.log("Dentro del bloque: " + _age, _pi, _city);
}

console.log("Fuera del bloque: " + _age, _pi, _city);