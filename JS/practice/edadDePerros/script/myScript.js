let _dogAge;

function $dogAgeCal(){
   _dogAge = parseInt(prompt("Introduce la edad de tu perro"));
   if(!isNaN(_dogAge) && Number.isInteger && _dogAge > 0){
      let _realAge = _dogAge * 7;
      // document.getElementById("dogAge").innerHTML = "La edad de tu perro es: " + (_realAge) + "años";
      alert("La edad de tu perro es: " + (_realAge) + "años")
   }else{
      alert("Por favor, introduce un número válido")
   }
}