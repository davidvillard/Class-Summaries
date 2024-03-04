// tipos de eventos
// eventos de formulario
// forms[0]
// submit => action

let formularioEdad = document.forms[0]
let error = document.getElementById("error")

formularioEdad.addEventListener("submit", (evento) => {
    let edad = parseInt(document.forms[0].elements["edad"].value)
    if (edad<=18 || edad>=65) {
        evento.preventDefault()
        error.innerHTML="La edad debe ser mayor que 18 y menor que 65"
    }
})

// Eventos del ratón
// click: hacer click con el botón principal
// dblclick: hacer doble click con el botón principal
// mousedown / mouseup: cuando se pulsa el botón (antes de soltarlo) y cuando se suelta el botón
// mousenter / mouseleave: cuando el puntero se situa sobre el elemento o lo deja
// mousemove: cuando se mueve sobre el elemento
// contextmenu: cuando se solicita el menú contextual

// Crea un programa que no permita que se habra el menú contextual sobre ningún elemento de la web

document.addEventListener("contextmenu", (evento) => {
    evento.preventDefault()
    console.log("Menú contextual desactivado")
})

// Eventos del teclado
// propiedad key
// Altkey
// CtrlKey
// ShiftKey
// Metakey (apple)

// location: teclas con la misma función en zonas distintas del teclado
// 0: teclado estándar
// 1: parte izquierda
// 2: parte derecha
// 3: teclado numérico

// Eventos
// keypress: tras pulsar y soltar una tecla
// keydown: tras pulsar y antes de soltar una tecla
// keyup: tras soltar una tecla

let todoBody = document.getElementsByTagName("body") [0]

todoBody.addEventListener("keypress", (evento) => {
    console.log(`Lanzado KEYPRESS con la tecla ${evento.key}`)
})


