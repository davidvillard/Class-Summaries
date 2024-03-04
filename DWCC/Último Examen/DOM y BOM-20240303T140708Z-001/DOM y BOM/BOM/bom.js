// Modelo de objetos
// DOM -> acceso al sitio web
// BOM -> acceso al navegador

// BOM 
// objeto window
let ancho = window.innerWidth
let alto = window.innerHeight
console.log(`Ancho x Alto (en píxeles): ${ancho} x ${alto}`)

// Carga completa
window.onload = function() {
    console.log(' La página se ha cargado completamente')
}

// Abrir ventana
window.open('https://www.ejemplo.com')

// Imprimir página actual
window.print()

// Mostrar alerta
window.alert('¡Cuidado!')

// Mostrar ventana de confirmación
const confirmacion = window.confirm("¿Estás seguro?")
if (confirmacion) {
    console.log("El usuario confirmó.")
} else {
    console.log("El usuario no confirmó.")
}

// Obtener la altura y el ancho de la pantalla
const alturaPantalla = window.screen.height
const anchuraPantalla = window.screen.width
console.log(`Altura de la pantallña: ${alturaPantalla}`)
console.log(`Anchura de la pantallña: ${anchuraPantalla}`)


// Objeto navigator
let infoNavegador = "clipboard" + navigator.clipboard + "\n"
infoNavegador += "cookieEnabled" + navigator.cookieEnabled + "\n"
infoNavegador += "geolocation" + navigator.geolocation + "\n"
infoNavegador += "language" + navigator.language + "\n"
infoNavegador += "onLine" + navigator.onLine + "\n"
infoNavegador += "plugins" + navigator.plugins + "\n"
infoNavegador += "storage" + navigator.storage + "\n"
infoNavegador += "userAgent" + navigator.userAgent + "\n"
console.log(infoNavegador)


// objeto screen
let infoPantalla = "availHeigth" + screen.availHeight + "\n"
infoPantalla = "availWidth" + screen.availWidth + "\n"
infoPantalla = "colorDepth" + screen.colorDepth + "\n"
infoPantalla = "height" + screen.height + "\n"
infoPantalla = "orientation" + screen.orientation + "\n"
infoPantalla = "pixelDepth" + screen.pixelDepth + "\n"
infoPantalla = "width" + screen.width + "\n"


// Objeto location
function recargarPagina() {
    location.reload()
}

// objeto history
// go()
// go(-1) : back()
// go(1) : forward ()

// temporizadores
// setTimeout()
let t1 = new Date()
console.log(t1.getHours()+":"+t1.getMinutes+":"+t1.getSeconds)

// se saca por pantalla la hora a la que se inicia el script

// creamos temporizador que se ejecutará a los 5 seg
identificador = window.setTimeout(()=>{
    let t2 = new Date()
    console.log(t2.getHours()+":"+t2.getMinutes+":"+t2.getSeconds)
}, 5000)
clearTimeout(identificador)
// setInterval()