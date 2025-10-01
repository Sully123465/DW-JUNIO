// Ejercicio 1-1: cambiar color de fondo de cada li
document.querySelectorAll("#lista-colores li").forEach(li => {
    let texto = li.textContent.toLowerCase();

    // Diccionario de colores español → CSS
    let colores = {
        "rojo": "red",
        "verde": "green",
        "azul": "blue",
        "amarillo": "yellow",
        "morado": "purple"
    };

    if (colores[texto]) {
        li.style.backgroundColor = colores[texto];
        li.style.color = (texto === "amarillo") ? "black" : "white"; 
    }
});

// Ejercicio 1-2: añadir emoji a los párrafos
document.querySelectorAll("p").forEach(p => {
    p.textContent += " 😊";
});

// Ejercicio 1-3: cambiar texto de botones
document.querySelectorAll("button").forEach((btn, index) => {
    btn.textContent = "Nuevo botón " + (index + 1);
});

// Ejercicio 2-1: lista de tareas, tachar al hacer clic
document.querySelectorAll("#lista-tareas li").forEach(li => {
    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });
});

// Ejercicio 2-2: tarjetas con precios, aplicar estilos
document.querySelectorAll(".tarjeta").forEach(tarjeta => {
    let precio = parseInt(tarjeta.querySelector("p:nth-child(2)").textContent.replace("Precio: ", ""));
    if (precio > 30) {
        tarjeta.style.backgroundColor = "lightgreen";
    }
});

// Ejercicio 2-3: añadir botón eliminar a bloques
document.querySelectorAll(".bloque").forEach(bloque => {
    let boton = document.createElement("button");
    boton.textContent = "Eliminar";
    bloque.appendChild(boton);
    boton.addEventListener("click", () => {
        bloque.remove();
    });
});

// Ejercicio 3-1: listado desde array de objetos
let personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Marta", edad: 30 }
];
let ulPersonas = document.querySelector("#personas");
personas.forEach(persona => {
    let li = document.createElement("li");
    li.textContent = persona.nombre + " - " + persona.edad + " años";
    ulPersonas.appendChild(li);
});

// Ejercicio 3-2: galería de imágenes
let imagenes = [
    "img/zoro1.webp",
    "img/shanks.webp",
    "img/ace.webp"
];
let galeria = document.querySelector("#galeria");
imagenes.forEach(url => {
    let img = document.createElement("img");
    img.src = url;
    galeria.appendChild(img);
});

// Ejercicio 3-3: tabla desde array de objetos
let usuarios = [
    { nombre: "Carlos", email: "carlos@mail.com", rol: "Admin" },
    { nombre: "Lucía", email: "lucia@mail.com", rol: "Usuario" },
    { nombre: "Pedro", email: "pedro@mail.com", rol: "Editor" }
];
let tbody = document.querySelector("#tabla-usuarios tbody");
usuarios.forEach(usuario => {
    let fila = document.createElement("tr");
    Object.values(usuario).forEach(valor => {
        let celda = document.createElement("td");
        celda.textContent = valor;
        fila.appendChild(celda);
    });
    tbody.appendChild(fila);
});
