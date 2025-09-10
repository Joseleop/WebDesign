// Ejercicio 1 — función simple
   // Crea una función llamada saludar que reciba un nombre y devuelva la cadena:
   // "Hola, <nombre>!"
   // Llama a la función con tu nombre y muestra el resultado por consola.

function greet(name){
   console.log("Hola, " + name);
   return "";
}
greet("José");
// let _name = prompt("Introduce tu nombre");
// greet (_name);


// Ejercicio 2 — función con retorno y tipos
   // Crea una función esPar que reciba un número y devuelva true si es par o false si es impar.
   // Prueba con varios números y muestra por consola los resultados.

function isPair(num){
   if(num % 2 === 0) {
      return true;
   } else {
      return false;
   }
}
console.log(isPair(1));
console.log(isPair(2));
console.log(isPair(3));
console.log(isPair(4));
console.log(isPair(5));
// let _number = prompt("Introduce un número");
// console.log(isPair(_number));


// Ejercicio 3 — suma con rest
   // Crea una función sumarTodos que reciba cualquier número de argumentos y devuelva la suma de todos ellos (usa rest parameters).
   // Prueba: sumarTodos(1,2,3,4) → resultado esperado 10.

function sumAll(...nums) {
   let sum = 0;
   for (let num of nums) {
      sum += num;
   }
   return sum;
}
console.log(sumAll(1,2,3,4,5));


// Ejercicio 4 — función que trabaja arrays (uso de callbacks)
   // Crea una función procesarYMostrar que reciba:
   // un array de strings,
   // una función transform (callback) que transforme cada string,
   // y que muestre por consola cada resultado transformado.
   // Ejemplo de transform: convertir a mayúsculas o recortar espacios.

function processAndShow() {

}


// Ejercicio 5 — closure (contador)
   // Crea una fábrica crearContador que devuelva una función incrementar.
   // Cada llamada a incrementar() aumentará un contador interno y devolverá su valor.
   // Prueba creando dos contadores independientes y demuestra que mantienen cuentas separadas.

// Ejercicio 6 — validación y manejo de errores
   // Crea una función dividir que reciba dos números y devuelva la división.
   // Si el divisor es 0, devuelve null (o lanza un error manejado).
   // Asegúrate de validar que los parámetros son números y, si no, devuelve null.

// Ejercicio 7 — función pura vs lado-efecto
   // Crea:
   // añadirAlArray(arr, valor) que devuelva un nuevo array con el valor añadido (sin modificar el original).
   // añadirAlArrayInPlace(arr, valor) que modifique el array original y lo retorne.
   // Prueba ambos y documenta (por consola) la diferencia en el contenido del array original.