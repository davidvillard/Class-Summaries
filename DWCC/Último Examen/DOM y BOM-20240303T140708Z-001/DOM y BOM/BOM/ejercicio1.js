// Escribe un programa que le pida al usuario qué porcentaje quiere aplicar para redimensionar la ventana.
// El programa debe pedir confirmación y sólo en caso de que se acepte, se redimensionará la ventana al porcentaje indicado.
//  Es necesario, igualmente, ir mostrando por la consola qué va ocurriendo en cada momento.

// crear una ventana
myWindow = window.open("","", "width=100, heigth=100")


let prmpt = window.prompt("indica la cantidad de :píxeles:")
if (prmpt !== null) {
    console.log("Ek usuario pulsó Aceptar")
    let confirm = window.confirm(`¿Estás seguro de aplicar ${prmpt} px?`)
    if (confirm===false) {
        console.log("El usuario no estaba seguro")
    } else {
        console.log("El usuario estaba seguro")
        myWindow.resizeBy(prmpt, prmpt)
        console.log(`Ventana redimensionada ${prmpt}x${prmpt}px`)
    }
} else {
    console.log("El usuario canceló la introducción de datos")
}