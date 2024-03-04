// lanzar eventos
// Event y dispatchEvent

let miSpan = document.getElementById("miSpan")
let miEnlace = document.getElementById("miEnlace")

// cancelar comportamiento  por defecto del enlace
miEnlace.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("Gestor del evento del enlace")
})

miSpan.addEventListener("click", () => {
    // creamos un nuevo evento
    let miEvento = new Event ("click")
    console.log("Evento lanzado")
    // lanzamos el evento
    miEnlace.dispatchEvent(miEvento)
})

