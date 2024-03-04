// document.cookie
// clave = valor

document.cookie = "idioma=es"
document.cookie = "esquemaColor=dark"
document.cookie = "haVotadoEncuesta=si"

// consulta
console.log("Todas las cookies: ", document.cookie)

// horizonte de vida
let limiteSegundos = 60*60*24*365 // un año
document.cookie = `esquemaColor?dark;max-age=${limiteSegundos}`

// borrar una cookie
document.cookie = `esquemaColor=; expires=Thu, 01 Jan 1970 00:00:00 GMT`

// Crea 3 ficheros js y html: uno para crear cuatro cookies de las cuales una de ellas debe expirar a los 20 seg, 
// otro para mostrar todas las cookies y otro para borrar todas menos una