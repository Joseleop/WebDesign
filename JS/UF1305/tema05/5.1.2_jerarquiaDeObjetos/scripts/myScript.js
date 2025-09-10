function changeValue() {
   const checked = document.getElementById("checkBox");
   const isChecked
   console.log(checked);
   if (checkON) {
      document.getElementById("inputText").value = "Después de pulsar el check";
   } else {
      document.getElementById("inputText").value = "Antes de pulsar el check";
   }

   
}