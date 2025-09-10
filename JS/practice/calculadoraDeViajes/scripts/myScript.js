let _booking;
let _food;
let _funny;
let _totalPrice;

function $getBookingPrice() {
   _booking = parseInt(prompt("Introduce el coste en alojamiento"));

   if (!isNaN(_booking) && Number.isInteger(_booking) && _booking > 0) {
      document.getElementById("bookingPrice").innerHTML = "El coste de tu alojamiento es " + (_booking);
      $totalPrice()
   } else {
      alert("Por favor, introduce un precio válido");
   }
}
function $getFoodPrice() {
   _food = parseInt(prompt("Introduce el coste en alimentación"));

   if (!isNaN(_food) && Number.isInteger(_food) && _food > 0) {
      document.getElementById("foodPrice").innerHTML = "El coste en alimentación es " + (_food);
      $totalPrice()
   } else {
      alert("Por favor, introduce un precio válido");
   }
}
function $getFunnyPrice() {
   _funny = parseInt(prompt("Introduce el coste en entretenimiento"));

   if (!isNaN(_funny) && Number.isInteger(_funny) && _funny > 0) {
      document.getElementById("funnyPrice").innerHTML = "El coste en entretenimiento es: " + (_funny);$totalPrice()
   } else {
      alert("Por favor, introduce un precio válido");
   }
}
function $totalPrice() {
   if (!isNaN(_booking) && _booking > 0 &&
      !isNaN(_food) && _food > 0 &&
      !isNaN(_funny) && _funny > 0) {
      _totalPrice = _booking + _food + _funny;
      // window.alert("El coste total de tu viaje es " + (_totalPrice) + "€");
      // document.getElementById("totalCost").innerHTML = "El coste total de tu viaje es " + (_totalPrice) + "€";
      if (!isNaN(_totalPrice) && _totalPrice > 0) {
         alert("El coste total de tu viaje es " + _totalPrice + "€");
         console.log("Hey");
      } else{
         console.log("Nofurula");
      }
   }
}
