const _textArea = document.getElementById("textArea");
const _characterLength = document.getElementById("characterLength");

_textArea.addEventListener("keyup", function () {
   const _totalLength = _textArea.value.length;
   _characterLength.innerText = _totalLength;
})