// EJERCICIO 1: Div animado
let div = document.querySelector('.div')
let btnDiv = document.querySelector('.btn-div')

btnDiv.addEventListener('click', () => {
  div.classList.toggle('box--animada')
})

// EJERCICIO 2: Párrafo
let parrafo = document.querySelector('.resaltado')
let btnParrafo = document.querySelector('.btn-parrafo')

btnParrafo.addEventListener('click', () => {
  parrafo.classList.add('cambiado')

  parrafo.addEventListener('animationend', () => {
    parrafo.classList.remove('cambiado')
  }, { once: true })
})

// EJERCICIO 3: Div de tamaño
let boxTamano = document.querySelector('.box-tamano')
let btnTamano = document.querySelector('.btn-tamano')

btnTamano.addEventListener('click', () => {
  boxTamano.classList.toggle('box-tamano--grande')
})


// EJERCICIO 4: Crear divs aleatorios
let contenedor = document.getElementById('contenedor')
let btnCrear = document.getElementById('crearDiv')
let contador = 1

btnCrear.addEventListener('click', () => {
  let divNuevo = document.createElement('div')
  divNuevo.classList.add('nuevo-div')

  // Color aleatorio
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  divNuevo.style.backgroundColor = `rgb(${r},${g},${b})`

  // Número incremental
  divNuevo.textContent = contador
  contador++

  // Eliminar con animación
  divNuevo.addEventListener('click', () => {
    divNuevo.classList.add('eliminar-div')
    divNuevo.addEventListener('animationend', () => {
      divNuevo.remove()
    }, )
  })

  contenedor.appendChild(divNuevo)
})
