const opciones = ["piedra", "papel", "tijeras"];

function jugar(eleccionJugador) {
   // Elección aleatoria de la máquina
   const eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];

   // Mostrar imágenes de elecciones
   document.getElementById("jugadorImg").src = eleccionJugador + ".png";
   document.getElementById("maquinaImg").src = eleccionMaquina + ".png";

   // Determinar resultado
   let resultado = "";
   if (eleccionJugador === eleccionMaquina) {
      resultado = "🤝 Empate";
   } else if (
      (eleccionJugador === "piedra" && eleccionMaquina === "tijeras") ||
      (eleccionJugador === "papel" && eleccionMaquina === "piedra") ||
      (eleccionJugador === "tijeras" && eleccionMaquina === "papel")
   ) {
      resultado = "🎉 ¡Ganaste!";
   } else {
      resultado = "💔 Perdiste";
   }

   document.getElementById("result").textContent = resultado;
}