// crea una jerarquía de etiquetas HTML que consiga devolver un nodo para la siguiente intrucción javascript:
// document.querySelectorAll("p.pp > span.ce")[3]

let cuartoElemento = document.querySelectorAll("p.pp > span.ce")[3]

if (cuartoElemento) {
    console.log(cuartoElemento.textContent)
} else {
    console.log("Error")
}