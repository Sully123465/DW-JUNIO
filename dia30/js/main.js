//Ejercicio 1

let win;

document.getElementById("abrir").onclick = () => {
  win = window.open("", "", "width=400,height=300");
}

document.getElementById("cerrar").onclick = () => {
  win.close();
}

document.getElementById("mover").onclick = () => {
  win.moveTo(200, 200);
}

document.getElementById("redimensionar").onclick = () => {
  win.resizeTo(600, 300);
}

document.getElementById("abrirGoogle").onclick = () => {
  win.location.href = "http://google.es";
}


//Ejercicio 2

function cambiarNumeros() {
  for (let i = 1; i <= 5; i++) {
    let aleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById("caja" + i).innerText = aleatorio;
  }
}

//Ejercicio 3

function insertar(valor) {
  let pantalla = document.getElementById("pantalla");
  if (pantalla.innerText === "0") {
    pantalla.innerText = valor;
  } else {
    pantalla.innerText += valor;
  }
}

function limpiarTodo() {
  document.getElementById("pantalla").innerText = "0";
}

function borrarUltimo() {
  let pantalla = document.getElementById("pantalla");
  pantalla.innerText = pantalla.innerText.slice(0, -1);
  if (pantalla.innerText === "") pantalla.innerText = "0";
}

function calcular() {
  let pantalla = document.getElementById("pantalla");
  try {
    let resultado = eval(pantalla.innerText);
    pantalla.innerText = resultado;
  } catch {
    pantalla.innerText = "Err";
  }
}

//Ejercicio 4


const divsEjercicio = document.querySelectorAll(".ejercicio-div");
divsEjercicio.forEach(div => {
  div.style.backgroundColor = "lightblue";
});

const parrafosEjercicio = document.querySelectorAll("#ejercicios p");
parrafosEjercicio.forEach(p => {
  p.innerText += " (texto añadido)";
});

const botonesEjercicio = document.querySelectorAll(".ejercicio-boton");
botonesEjercicio.forEach(boton => {
  boton.addEventListener("click", () => {
    boton.innerText = "¡Clic recibido!";
  });
});
