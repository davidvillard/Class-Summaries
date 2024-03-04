// Eventos de arrastrar y soltar
// atributo draggable

// Eventos para arrastrar un elemento
// drag: cada vez que se arrastra (iniciado el arrastre)
// dragstart: al comenzar el arrastre
// dragstop: al finalizar el arrastre

// Eventos de soltar un elemento
// dragenter: el elemento que se arrastra entra en el elemento destino
// dragleave: el elemento que se arrastra sale del elemento destino
// dragover: cuando continua el arrastre sobre el elemento desino
// drop: cuando se suelta sobre el elemento destino

let elementosOrigen = document.querySelectorAll("#origen > li")
let destino = document.getElementById("destino")

elementosOrigen.forEach(function(elemento) {
    elemento.addEventListener("dragstart", 
    (evento) => iniciadoArrastre(evento))
})

destino.addEventListener("dragover", (evento) => permitirSoltar(evento))
destino.addEventListener("drop", (evento) => soltar(evento))

function iniciadoArrastre(evento) {
    evento.dataTransfer.setData("IdElementoOrigen", evento.target.id)
}

function permitirSoltar(evento) {
    evento.preventDefault()
}

function soltar(evento) {
    evento.preventDefault()
    let elementoArrastrandose = evento.dataTransfer.getData("idElementoOrigen")
    destino.appendChild(document.getElementById(elementoArrastrandose))
}

