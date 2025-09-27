//Ejericio 1
// script.js — añade listeners para las 20 demostraciones y registra en panel lateral.
const logEl = document.getElementById('log');
const clearBtn = document.getElementById('clear-log');

function log(evtName, info = '') {
  const time = new Date().toLocaleTimeString();
  const line = document.createElement('div');
  line.textContent = `[${time}] ${evtName} ${info}`;
  logEl.prepend(line);
}

// Limpiar registro
clearBtn.addEventListener('click', () => logEl.innerHTML = '');

// 1 click
document.getElementById('btn-click')
  .addEventListener('click', () => log('click', 'Botón pulsado'));

// 2 dblclick
document.getElementById('btn-dblclick')
  .addEventListener('dblclick', () => log('dblclick', 'Doble clic detectado'));

// 3 mouseover
const boxMouseOver = document.getElementById('box-mouseover');
boxMouseOver.addEventListener('mouseover', () => log('mouseover', 'Entró el cursor'));

// 4 mouseout
const boxMouseOut = document.getElementById('box-mouseout');
boxMouseOut.addEventListener('mouseout', () => log('mouseout', 'Salió el cursor'));

// 5 mousedown
document.getElementById('btn-mousedown')
  .addEventListener('mousedown', e => log('mousedown', `button=${e.button}`));

// 6 mouseup
document.getElementById('btn-mouseup')
  .addEventListener('mouseup', e => log('mouseup', `button=${e.button}`));

// 7 mousemove (debounce simple para no spamear demasiado)
const boxMouseMove = document.getElementById('box-mousemove');
let lastMove = 0;
boxMouseMove.addEventListener('mousemove', e => {
  const now = Date.now();
  if (now - lastMove > 150) {
    log('mousemove', `x=${e.offsetX} y=${e.offsetY}`);
    lastMove = now;
  }
});

// 8 keydown
document.getElementById('input-keydown').addEventListener('keydown', e => {
  log('keydown', `tecla=${e.key}`);
});

// 9 keyup
document.getElementById('input-keyup').addEventListener('keyup', e => {
  log('keyup', `tecla=${e.key}`);
});

// 10 keypress (nota: puede estar obsoleto en algunos navegadores)
document.getElementById('input-keypress').addEventListener('keypress', e => {
  log('keypress', `caracter=${e.key}`);
});

// 11 input
document.getElementById('input-text').addEventListener('input', e => {
  log('input', `valor="${e.target.value.slice(0,20)}"`);
});

// 12 change
document.getElementById('select-change').addEventListener('change', e => {
  log('change', `valor=${e.target.value}`);
});

// 13 submit (prevenimos envío por defecto para demo)
document.getElementById('form-submit').addEventListener('submit', e => {
  e.preventDefault();
  log('submit', 'Formulario interceptado (demo)');
});

// 14 focus
document.getElementById('input-focus').addEventListener('focus', e => {
  log('focus', 'Input recibió foco');
});

// 15 blur
document.getElementById('input-blur').addEventListener('blur', e => {
  log('blur', 'Input perdió foco');
});

// 16 resize (ventana)
window.addEventListener('resize', () => {
  log('resize', `w=${window.innerWidth} h=${window.innerHeight}`);
});

// 17 scroll (registro desde un contenedor)
const scrollBox = document.getElementById('scroll-box');
scrollBox.addEventListener('scroll', () => {
  log('scroll', `scrollTop=${Math.round(scrollBox.scrollTop)}`);
});

// 18 contextmenu (clic derecho)
const boxContext = document.getElementById('box-context');
boxContext.addEventListener('contextmenu', e => {
  e.preventDefault(); // mostramos cómo prevenir el menú por defecto
  log('contextmenu', 'Clic derecho (prevencion del menú por defecto)');
});

// 19 touchstart (móvil)
const boxTouch = document.getElementById('box-touch');
boxTouch.addEventListener('touchstart', e => {
  log('touchstart', `touches=${e.touches.length}`);
}, {passive: true});

// 20 touchend (móvil)
const boxTouchEnd = document.getElementById('box-touchend');
boxTouchEnd.addEventListener('touchend', e => {
  log('touchend', `changed=${e.changedTouches.length}`);
}, {passive: true});

// Mensaje inicial
log('init', 'Demo lista. Interactúa con los controles para ver eventos aquí.');


//Ejercicio 2-1

 function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(event) {
  event.target.style.backgroundColor = randomColor();
}

const buttons = document.querySelectorAll('.e2-1');

buttons.forEach(button => {
  button.addEventListener('click', changeColor);
});

//Ejercicio 2-2
const button2_2 = document.getElementById('buton2-2');
const div2_2 = document.querySelectorAll('.e2-2');

button2_2.addEventListener('click', () => {
  div2_2.forEach(div => {
    div.style.backgroundColor = randomColor();
  });
});

//Ejerciocio 2-3
const div2_3 = document.getElementById('e2_3');
document.addEventListener('mousemove', (e) => {
  div2_3.innerText = `X: ${e.clientX}, Y: ${e.clientY}`;
});

//Ejercicio 2-4
const div2_4 = document.getElementById('e2-4');
div2_4.addEventListener('mouseenter', changeColor);
div2_4.addEventListener('mouseleave', changeColor);

//Ejercicio 3-2
const form3_2 = document.getElementById('form-3-2');
form3_2.addEventListener('submit', (e) => {
  e.preventDefault();
});