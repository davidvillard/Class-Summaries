// Eventos

// Captura de eventos
// addEventListener
let miSpan = document.getElementById("miSpan")
let veces = 0;
miSpan.addEventListener("click", (objetoEvento) => {
    veces++
    console.log(`El usuario ha hecho ${veces} click en span`)
    console.info(objetoEvento)
})

// objeto evento
// propiedades de este objeto
// altKey: devuelve si la tecla alt fue pulsada durante el evento
// button: devuelve el botón del ratón que activo el evento
//          0: botón principal
//          1: botón central
//          2: botón secundario
//          3 y 4: cuarto y quinto botón si los hubiera
// charCode: contiene el valor Unicode de la tecla se pulsó
// clientX y clientY: coordenadas respecto a la ventana
// pageX y pageY: coordenadas respecto al documento
// screenX y screenY: coordenadas respecto a la pantalla
// target: referencia al elemento que lanzó el evento
// timeStamp: devuelve el momento en el que se creó el evento
// type: nombre del evento

// Escribe un programa que permita conocer la posición que ocupa el ratón en la pantalla cada vez que se hace click.
// Además mostrar por consola más información sobre las propiedades del objeto evento.

document.addEventListener("click", (evento) => {
    console.log(`X: ${evento.clientX}, Y: ${evento.clientY}`)
    console.log(`Información del evento: \n Momento del click: ${evento.timeStamp} \n Tipo del evento: ${evento.type}`)
})

