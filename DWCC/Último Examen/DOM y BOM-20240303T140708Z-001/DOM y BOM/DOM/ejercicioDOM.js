// crea un fragmento de HTML que contenga cinco párrafos y cuyas etiquetas no tengan ningún atributo
// A continuación muestra en consola el contenido del penúltimo párrafo

let parrafo = document.getElementsByTagName("p")
console.log(parrafo[3])
console.log(parrafo[parrafo.length-2].textContent)
console.log(parrafo[parrafo.length-2].innerText)
console.log(parrafo[parrafo.length-2].outerText)