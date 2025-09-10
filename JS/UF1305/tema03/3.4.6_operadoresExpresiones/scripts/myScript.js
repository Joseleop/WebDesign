function ageCalc() {
   let _age = Number(document.getElementById("inputAge").value);
   let _clasific;

   if (_age < 2) {
      _clasific = "Infante";
   } else if (_age >= 2 && _age <= 12) {
      _clasific = "Niño";
   } else if (_age >= 13 && _age <= 18) {
      _clasific = "Adolescente";
   } else if (_age >= 19 && _age <= 29) {
      _clasific = "Joven";
   } else if (_age >= 30 && _age <= 60) {
      _clasific = "Adulto";
   } else if (_age > 60) {
      _clasific = "Senior";
   } else {
      _clasific = "Introduzca una edad correcta";
   }

   document.getElementById("ageText").innerHTML = _age + " años";
   document.getElementById("clasificText").innerHTML = _clasific;
   
   document.getElementById("inputAge").value = "";
   // console.log(`Tienes ${_age} años. Tu clasificación corresponde a ${_clasific}`);
}