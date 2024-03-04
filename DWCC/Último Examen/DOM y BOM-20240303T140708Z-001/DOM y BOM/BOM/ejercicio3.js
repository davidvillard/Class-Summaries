// Crea un fragmento de HTML con las etiquetas que desees, pero que contenga dos enlaces.
// A continuación , crea un temporizador que elimine el primer enlace tras haber transcurrido 5 segundos.
// Tras la eliminación del primer enlace denes crear otro temporizador que se activará a los 10 sefundos
// y eliminará el segundo enlace.

// temporizador 5seg
setTimeout(() => {
    var enlace1 = document.getElementById("enlace1")
    if (enlace1) {
        enlace1.remove()
        console.log("Primer enlace eliminado")
        setTimeout(() => {
            var enlace2 = document.getElementById("enlace2")
            if(enlace2) {
                enlace2.remove()
                console.log("Segundo enlace eliminado")
            }
        }, 10000)
    }
}, 5000)