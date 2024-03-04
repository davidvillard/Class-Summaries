const nave = document.getElementById("nave")
const naveEnemiga = document.getElementById("naveEnemiga")
const bala = document.getElementById("bala")
var sonidoDisparo = document.getElementById("sonidoDisparo")
var sonidoVictoria = document.getElementById("sonidoVictoria")

let posicionNave = 200
let posicionNaveEnemiga = 200 
let posicionDisparoY = 400
let posicionDisparoX = 223
let disparo = false
let sentido = "+" // flag sentido de la nave enemiga

window.addEventListener("keydown", (event) => {
    if (event.key === 'ArrowLeft' && posicionNave > 0) {
        posicionNave -= 10
    } else if (event.key === 'ArrowRight' && posicionNave < 400) {
        posicionNave += 10
    } else if (event.key === ' ' && !disparo) {
        disparar()
    }

    actualizaJuego()
})

function actualizaJuego() {
    nave.style.left = posicionNave + "px"
    bala.style.left = posicionNave + 23 + "px"
    if (disparo) {
        posicionDisparoY -= 10
        bala.style.top = posicionDisparoY + "px"
        // borde superior
        if (posicionDisparoY < 10) {
            disparo = false
            bala.style.display = 'none'
        }
    }

    // Movimiento de la nave enemiga
    // Sentido
    if (posicionNaveEnemiga > 400) sentido = "-"
    else if (posicionNaveEnemiga < 0) sentido = "+"
    // avance
    if (sentido === "+") posicionNaveEnemiga += 5
    else posicionNaveEnemiga -= 5

    naveEnemiga.style.left = posicionNaveEnemiga + "px"

    // colision
    if (posicionDisparoY>=100 && posicionDisparoY <=125 && posicionDisparoX>= posicionNaveEnemiga && posicionDisparoX <= posicionNaveEnemiga+35) {
        console.log("colision")
        clearTimeout(refresco)
        sonidoVictoria.play()
    }
}

function disparar() {
    console.log("disparo")
    disparo = true
    bala.style.display = 'block'
    posicionDisparoY = 400 // posicion inicial bala
    sonidoDisparo.play()
}

let refresco = setInterval(actualizaJuego, 20)