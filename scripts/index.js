// Importacion de archivos

//script para el carrusel de peliculas

let carrusel = document.querySelector('#carrusel');

let maxScrollIzq = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo;
let pasos = 1;

const movimiento = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + pasos;
        if (carrusel.scrollLeft === maxScrollIzq) {
            pasos = pasos * -1;
        } else if (carrusel.scrollLeft === 0) {
            pasos = pasos * -1;
        }
    }, 15);
    };

const detenerMovimiento = () => {
    clearInterval(intervalo);
};

carrusel.addEventListener('mouseover', detenerMovimiento);
carrusel.addEventListener('mouseout', movimiento);

movimiento();