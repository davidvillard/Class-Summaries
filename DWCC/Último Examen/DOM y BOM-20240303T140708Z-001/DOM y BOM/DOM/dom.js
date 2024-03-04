// DOM
console.log(document.nodeType)
// 1 - elemento
// 2 - atributo
// 3 - texto
// 4 - CDATA
// 5 - Ref a entidad
// 6 - entidad
// 7 - Instrucción de procesado
// 8 - Comentario
// 9 - Docuento
// 10 - Tipo de documento
// 11 - Fragmento de código
// 12 - Anotación

// Asociados a nodeType están:
// nodeName: nombre del nodo
// nodeValue: valor del nodo

// selección de elementos

// IDENTIFICADORES
// getElementById

let ceo = document.getElementById("CEO")
console.log(ceo)
console.log(ceo.nodeType)
console.log(ceo.nodeName)
console.log(ceo.nodeValue)

// ETIQUETAS
// getElementByTagName
let equipo = document.getElementsByTagName("span")
console.info(equipo)
document.write(`El equipo consta de ${equipo.length} miembros`)
console.log(equipo[1]) // span CTO
console.log(equipo[1].innerText) // Carlos Méndez
console.log(equipo[1].id) //CTO

// CLASES
// getElementByClassName
let directores = document.getElementsByClassName("direccion")
// devuelve el 2 y el 3
console.log(directores)
console.log("")
for (d in directores)
    console.log(d)

// SELECTORES CSS
// querySelectorAll
let enlaces = document.querySelectorAll("span > a")
console.log(enlaces)
let primerDirector = document.querySelectorAll("")