// borrar una cookie
document.cookie = `idioma=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
document.cookie = `esquemaColor=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
document.cookie = `haVotadoEncuesta=; expires=Thu, 01 Jan 1970 00:00:00 GMT`

// imprimimos las cookies
console.log("Cookies borradas!!!")
console.log("Cookies vigentes: ", document.cookie)