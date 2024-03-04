// Manipulación del DOM

let indice = document.getElementById("indiceSeccion")
for(let i=0; i<indice.childNodes.length;i++) {
    console.log(indice.childNodes[i].nodeName)
}

// Propiedades útiles del DOM
// parentNode: Selecciona el nodo padre
// childElementCount: Devuelve el número de elementos hijos
// firstChild: selecciona el primer nodo hijo
// firstElementChild: selecciona el primer elemento hijo
// lastChild: selecciona el último nodo hijo
// lastElemetChild: selecciona el último elemento hijo
// previousSibling: selecciona el nodo hermano anterior
// previousElementSibling: selecciona el elemento hermano anterior
// nextSibling: selecciona el nodo hermano siguiente
// nextElementSibling: Selecciona el elemento hermano anterior y siguiente

let mediano = document.getElementsByTagName("li")[1]
console.log(mediano.previousElementSibling)
console.log(mediano.nextElementSibling)

// Manipulación de elementos
// textContent: obtiene el texto sin etiquetas
// innerHTML: obtiene texto y etiquetas

console.log(document.getElementByTagName("seccion")[0].textContent)
console.log(document.getElementByTagName("seccion")[0].innerHTML)

document.getElementByTagName("section")[0].textContent="el <u>nuevo</u> contenido"
// las etiquetas se muestran como texto
// document.getElementByTagName("section")[0].innerHTML="el <u>nuevo</u> contenido"; // las etiquetas se muestran como códig HTML

// Crear elementos
// createElement
// createTextNode

let elementoNuevo = document.createElement("p")
let nodoTextoNuevo = document.createTextNode("Texto del nodo")

// appendChild
// añadimos el nodo de texto al elemento p
elementoNuevo.appendChild(nodoTextoNuevo)
// añadimos el elemento <p> al cuerpo del documento
document.body.appendChild(elementoNuevo)

let nuevoElemento = document.createElement("li")
nuevoElemento.innerHTML = "Tercer elemento"
document.getElementById("lista").appendChild(nuevoElemento)

// insertBefore
nuevoElemento.innerHTML = "Último elemento insertado"
// obtener referencia a la posición
let nodoReferencia = document.querySelectorAll("li:nth.of-type(2)")[0]
// obtener el nodo padre
let nodoPadre = nodoReferencia.parentNode

// Manipulación de atributos
// hasAtribute
console.log(document.getElementsByTagName("ul")) // nos devuelve node list
console.log(document.getElementsByTagName("ul")[0]) // devuelve primer elemento
console.log(document.getElementByTagName("ul")[0].hasAttribute("id")) // tiene atributo id? true
console.log(document.getElementByTagName("ul")[0].hasAttribute("class")) // tiene atributo class? false

// acceso a todos los atributos de img: src, alt y tittle
let atributos = document.getElementByTagName("img")[0].attributes
for (let atributo of atributos) {
    console.log(`[NOmbre, Valor]:[${atributo.name},${atributo.value}]`)
}

document.getElementsByTagName("img")[0].setAttribute("title", "nuevo título")

// style

let ul = document.getElementById("lista")
ul.style.border = "4px solid ligthblue"

// atributos data

let ul = document.getElementById("precios")
console.log(ul.dataset)
console.log(ul.dataset.divisa)
console.log(ul.dataset.iva)
