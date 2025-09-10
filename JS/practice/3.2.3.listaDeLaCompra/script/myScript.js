function $addItem() {

   // console.log("Añadido elemento");

   const _newValue = document.getElementById("newItemInput").value;

   const _newItemList = document.createElement("li");
   _newItemList.textContent = _newValue;

   document.getElementById("itemsList").appendChild(_newItemList + "<button>Completar</button>");

   $addButtons();

   // document.getElementById("newItemInput").value = "";
}

function $addButtons(){
   
      document.getElementById
}
