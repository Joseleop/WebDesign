// Declara una variable con tu nombre (string), otra con tu edad (number) y otra que indique si estás aprendiendo JS (boolean).
// Declara una constante con el valor de null y otra sin inicializar (undefined).
// Crea un objeto llamado coche con al menos 3 propiedades (ejemplo: marca, modelo, año).
// Crea un array llamado colores con al menos 4 strings dentro.
// Declara una variable con let y asígnale distintos tipos de datos, uno tras otro (number, string, boolean) y comprueba qué pasa.

let _name = "Jose";
let _age = 34;
let _learning = true;

const _x = null;
let _y;

let _car = {brand: "toyota", model: "auris", year: 2015};

let _colors = ["red","blue","green","yellow"];

let _dataTypes;

_dataTypes = 3.1416;
_dataTypes = "string";
_dataTypes = false;

console.log(_x, _y, _car, _colors, _dataTypes)
console.log(_car.model, _colors[2])