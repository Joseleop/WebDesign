// Declara variables para guardar la siguiente información de una persona:
// nombre (string),
// edad (number),
// ciudad (string),
// si tiene carnet de conducir (boolean).
// Crea un objeto persona que agrupe toda esa información.
// Crea un array llamado aficiones con al menos 3 strings (ej: “leer”, “fútbol”, “cine”) y añádelo como propiedad extra del objeto persona.
// Muestra por consola:
// Una frase con el nombre y la edad (ejemplo: "Me llamo Jose y tengo 34 años.").
// El primer hobby del array.
// El carnet de conducir como frase lógica (ejemplo: "Tiene carnet de conducir: true").

let _name = "Jose";
let _age = 34;
let _city = "Carmona";
let _license = true;

let _person = {_name, _age, _city, _license};

let _hobbies = ["videojuegos", "futbol", "leer"];

_person.hobbies = _hobbies

console.log("Mi nombre es " + _person._name + " y tengo " + _person._age + " años.");

// console.log("Mi mayor afición: " + _person._hobbies[0]);
// Uncaught TypeError: can't access property 0, _person._hobbies is undefined

console.log("Mi mayor afición: " + _person.hobbies[0]);

console.log("¿Y tengo carnet de conducir? " + _person._license);

// console.log(_person)