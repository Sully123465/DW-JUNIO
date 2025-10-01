const contentDiv = document.getElementById('content');

// --- Nivel 1: Fetch local ---
document.getElementById('btn1')?.addEventListener('click', () => loadContent('archivo1.html'));
document.getElementById('btn2')?.addEventListener('click', () => loadContent('archivo2.html'));

function loadContent(file) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            contentDiv.classList.remove('show');
            setTimeout(() => {
                contentDiv.innerHTML = html;
                contentDiv.classList.add('show');
            }, 100);
        });
}

// --- Nivel 2: Clima ---
const searchBtn = document.getElementById('searchBtn');
if(searchBtn){
    searchBtn.addEventListener('click', () => {
        const city = document.getElementById('city').value.trim();
        if(!city) return alert('Escribe el nombre de una ciudad');

        const apiKey = '6f430d772da0f88d15c913f7e5faadd7'; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                contentDiv.classList.remove('show');
                setTimeout(() => {
                    if(data.cod === 200){
                        contentDiv.innerHTML = `
                            <h2>${data.name}</h2>
                            <p>${Math.round(data.main.temp)}°C - ${data.weather[0].description}</p>
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icono">
                        `;
                    } else {
                        contentDiv.innerHTML = `<p>Ciudad no encontrada</p>`;
                    }
                    contentDiv.classList.add('show');
                }, 100);
            })
            .catch(() => {
                contentDiv.classList.remove('show');
                setTimeout(() => {
                    contentDiv.innerHTML = `<p>Error al conectar con el servicio</p>`;
                    contentDiv.classList.add('show');
                }, 100);
            });
    });
}

// --- Nivel 3: Buscador de películas con OMDb ---
const movieBtn = document.getElementById('movieBtn');

if (movieBtn) {
    movieBtn.addEventListener('click', () => {
        const query = document.getElementById('query').value.trim();
        if (!query) return alert('Escribe el nombre de una película');

        const apiKey = '6476ce87'; // Tu clave OMDb
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}&type=movie`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                contentDiv.classList.remove('show');
                setTimeout(() => {
                    if (data.Response === "False") {
                        contentDiv.innerHTML = '<p>No se encontraron resultados</p>';
                    } else {
                        contentDiv.innerHTML = data.Search.map(movie => `
                            <div class="movie">
                                <h3>${movie.Title}</h3>
                                <p>${movie.Year}</p>
                                ${movie.Poster && movie.Poster !== "N/A" ? `<img src="${movie.Poster}" alt="${movie.Title}">` : ''}
                            </div>
                        `).join('');
                    }
                    contentDiv.classList.add('show');
                }, 100);
            })
            .catch(() => {
                contentDiv.classList.remove('show');
                setTimeout(() => {
                    contentDiv.innerHTML = '<p>Error al buscar películas</p>';
                    contentDiv.classList.add('show');
                }, 100);
            });
    });
}


