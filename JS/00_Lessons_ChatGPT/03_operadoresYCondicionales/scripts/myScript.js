// Declara una variable con tu edad.
// Usa un if para comprobar si eres mayor de edad (>= 18).
// Si lo eres, muestra en consola "Eres mayor de edad".
// Si no, "Eres menor de edad".
// Declara una variable con un número cualquiera y comprueba:
// Si es par o impar (usa %).
// Usa un switch con una variable color que pueda ser "rojo", "azul" o cualquier otro.
// Si es "rojo", muestra "Has elegido el rojo".
// Si es "azul", muestra "Has elegido el azul".
// Si no es ninguno de esos, muestra "Color no reconocido".

let _age = prompt("introduce tu edad");

if (_age >= 18) {
   console.log("Has introducido el "+ _age + ". Por tanto, eres mayor de edad")
} else {
   console.log("Has introducido el "+ _age + ". Por tanto, eres menor de edad")
}

let _number = prompt("introduce un número cualquiera");

if (_number % 2 === 0) {
   console.log("Has introducido el "+ _number + ". Por tanto, es un número par")
} else {
   console.log("Has introducido el "+ _number + ". Por tanto, es un número impar")
}

let _color = prompt("Introduce tu color favorito")

switch (_color) {
   case "rojo":
      console.log("has elegido el rojo");
      break;
   case "amarillo":
      console.log("has elegido el amarillo");
      break;
   case "azul":
      console.log("has elegido el azul");
      break;
   case "verde":
      console.log("has elegido el verde");
      break;
   default:
      console.log("Has introducido el " + _color + ".Color no reconocido");
}