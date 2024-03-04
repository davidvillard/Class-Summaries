// Reseteo de formulario
// reset

// cambiar un valor: changeç

// Ganar y perder el foco
// evento focus
// evento blur

// Ejercicio: Crea un formulario con tres controles, dos de ellos obligatorios, 
// de manera que cuando cada control obligatorio gane el foco muestre un mensaje indicando este hecho.
// Y cuando pierda el foco, elimine todos los mensajes mostrados por el usuario.

let controles = document.forms[0].elements
let numeroElementos = document.forms[0].length

for (let i=0; i<numeroElementos; i++) {
    controles[i].addEventListener("focus", () => {
        if (controles[i],hasAttribute("required")) {
            document.getElementById("error").innerHTML = "Campo obligatorio"
        }
    })
    
    controles[i].addEventListener("blur", () => {
        if (controles[i],hasAttribute("required")) {
            document.getElementById("error").innerHTML = ""
        }
    })   
}


