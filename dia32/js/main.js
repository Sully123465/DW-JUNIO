/* ejercicio-1-1 */
const btn11 = document.getElementById("btn-1-1");
let oscuro11 = false;
btn11.addEventListener("click", () => {
  if (oscuro11) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  oscuro11 = !oscuro11;
});

/* ejercicio-1-2 */
const caja12 = document.getElementById("caja-1-2");
const btn12 = document.getElementById("btn-1-2");
let grande12 = false;
btn12.addEventListener("click", () => {
  caja12.style.width = grande12 ? "20vw" : "80vw";
  grande12 = !grande12;
});

/* ejercicio-2-1 */
const cuadro21 = document.getElementById("cuadro-2-1");
const btn21 = document.getElementById("btn-2-1");
let animado21 = false;
btn21.addEventListener("click", () => {
  cuadro21.style.transform = animado21 ? "none" : "rotate(45deg) scale(1.5)";
  animado21 = !animado21;
});

/* ejercicio-2-2 */
const caja22 = document.getElementById("caja-2-2");
const btn22 = document.getElementById("btn-2-2");
let visible22 = true;
btn22.addEventListener("click", () => {
  caja22.style.display = visible22 ? "none" : "block";
  visible22 = !visible22;
});

/* ejercicio-2-3 */
const texto23 = document.getElementById("texto-2-3");
const btn23 = document.getElementById("btn-2-3");
let visible23 = true;
btn23.addEventListener("click", () => {
  texto23.style.opacity = visible23 ? "0" : "1";
  visible23 = !visible23;
});

/* ejercicio-3-1 */
const tabla31 = document.getElementById("tabla-3-1");
const btn31 = document.getElementById("btn-3-1");
btn31.addEventListener("click", () => {
  const celdas = tabla31.getElementsByTagName("td");
  const random = Math.floor(Math.random() * celdas.length);
  celdas[random].style.backgroundColor = "yellow";
});

/* ejercicio-3-2 */
const btn32 = document.getElementById("btn-3-2");
let celdaActiva = null;
btn32.addEventListener("click", () => {
  const celdas = tabla31.getElementsByTagName("td");
  if (celdaActiva) {
    celdaActiva.style.backgroundColor = ""; // volver a original
  }
  const random = Math.floor(Math.random() * celdas.length);
  celdaActiva = celdas[random];
  celdaActiva.style.backgroundColor = "lightblue";
});

/* ejercicio-3-3 */
const caja33 = document.getElementById("caja-3-3");
const btn33 = document.getElementById("btn-3-3");
btn33.addEventListener("click", () => {
  const maxX = window.innerWidth - caja33.offsetWidth;
  const maxY = window.innerHeight - caja33.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  caja33.style.left = x + "px";
  caja33.style.top = y + "px";
});
