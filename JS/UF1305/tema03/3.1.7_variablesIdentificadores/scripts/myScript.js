let _globalVar = 50; // variable global

function myFunction() {
   let _localVar = 100; // variable local

   if (1 > 0) {
      let _blockVar = 150; // variable de bloque
   }
}
console.log(_globalVar)
// console.log(_localVar)
   // Uncaught ReferenceError: _localVar is not defined
   //     <anonymous> file:///C:/Users/Mañana/Documents/webproject/JS/ejerciciosLibro/3.1.7_variablesIdentificadores/scripts/myScript.js:18
// console.log(_blockVar)
   // Uncaught ReferenceError: _blockVar is not defined
   //     <anonymous> file:///C:/Users/Mañana/Documents/webproject/JS/ejerciciosLibro/3.1.7_variablesIdentificadores/scripts/myScript.js:21
   // myScript.js:21:13

//Log:
// Fuera de la función: myScript.js:16:9
// 50 myScript.js:17:9
// myScript.js:18:13