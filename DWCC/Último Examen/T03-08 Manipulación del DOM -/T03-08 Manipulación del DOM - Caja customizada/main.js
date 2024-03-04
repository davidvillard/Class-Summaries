let micaja = document.getElementsByTagName("div")[0]
micaja.dataset.ancho = prompt("Indica el ancho con su unidad (ej: 200px)")
micaja.dataset.alto = prompt("Indica el alto con su unidad (ej: 200px)")
micaja.dataset.color_borde = prompt("Indica el color del borde (en inglés)")
micaja.dataset.color_texto = prompt("Indica el color del texto (en inglés)")
micaja.dataset.color_fondo = prompt("Indica el color del fondo (en inglés)")

micaja.style.width = micaja.dataset.ancho
micaja.style.height = micaja.dataset.alto
micaja.style.border = "2px solid"
micaja.style.borderColor = micaja.dataset.color_borde
micaja.style.color = micaja.dataset.color_texto
micaja.style.backgroundColor = micaja.dataset.color_fondo

console.log(micaja.dataset)
console.log("Ancho: " + micaja.dataset.ancho)
console.log("Alto: " + micaja.dataset.alto)
console.log("Color borde: " + micaja.dataset.color_borde)
console.log("Color texto: " + micaja.dataset.color_texto)
console.log("Color fondo: " + micaja.dataset.color_fondo)