// Desarrollar un programa que permita mover un cuadrado por la pantalla utilizando las teclas de flecha

var cuadrado = document.getElementById('cuadrado')
var posicionX = 0
var posicionY = 0
var velocidad = 5

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener("keydown", (evento) => {
        moverCuadrado(evento)
    })
  });

function moverCuadrado(evento) {
    switch (evento.key) {
        case 'ArrowUp':
            posicionY -= velocidad;
            break;
        case 'ArrowDown':
            posicionY += velocidad;
            break;
        case 'ArrowRight':
            posicionX += velocidad;
            break;
        case 'ArrowLeft':
            posicionX-= velocidad;
            break;
    }
    cuadrado.style.top = posicionY + 'px'
    cuadrado.style.left = posicionX + 'px'
}