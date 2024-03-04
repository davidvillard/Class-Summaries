// Propagación de eventos

let miSection = document.getElementsByTagName("section")[0]
let miP = document.getElementsByTagName("p")[0]
let miSpan = document.getElementById("miSpan")

let contador = 0

miSection.addEventListener("click", (evento) => {
    console.log(`<section>: captura de evento ${contador} veces`)
})

miP.addEventListener("click", (evento) => {
    console.log(`<p>: captura de evento ${contador} veces`)
})

miSpan.addEventListener("click", (evento) => {
    console.log(`<span>: captura de evento ${contador} veces`)
    if (contador>1) {
        evento.stopPropagation
    }
})

// cancelación de eventos
// preventDeault()

miSpan.addEventListener(("click", miLlamada()))

let miEnlace = document.getElementsByTagName("a")[0]

miEnlace.addEventListener("click", (evento) => {
    evento.preventDefault()
})

function miLlamada() {
    console.log("Evento anulado tras su primera ejecución")
    miSpan.removeEventListener("click", miLlamada)
}