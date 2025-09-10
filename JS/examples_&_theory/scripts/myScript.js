function myFunction() {
   document.getElementById("externalScript").innerHTML = "Párrafo cambiado.";
}
function myFunction02() {
   document.getElementById("externalScript").innerHTML = "Podemos modificar elementos desde un link externo";
}
function myFunction03() {
   window.alert("CUIDAO!!");
}
function colorBlue() {
   document.getElementById("changeColor").src = 'img/blue.png';
   document.getElementById("colorText").innerHTML = "Al entrar en el recuadro cambia el color a azul";
}
function colorGreen() {
   document.getElementById("changeColor").src = 'img/green.png';
   document.getElementById("colorText").innerHTML = "Al salir del recuadro cambia el color a verde";
}
function colorRed() {
   document.getElementById("changeColor").src = 'img/red.png';
   document.getElementById("colorText").innerHTML = "Al mantener pulsado el recuadro cambia el color a rojo";
}
function colorYellow() {
   document.getElementById("changeColor").src = 'img/yellow.png';
   document.getElementById("colorText").innerHTML = "Al soltar la pulsación en el recuadro cambia el color a amarillo";
}
function function04() {
   let _frutas;
   _frutas = ['limón', 'pera', 'manzana'];

   alert("las frutas son: " + (_frutas) + " || " + _frutas[1]);
}