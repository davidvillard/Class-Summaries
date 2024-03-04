// JSON

// definimos obj
const receta = {
    nombre: "Empanada de pulpo",
    tiempoElaboracion: 30,
    formato: {
        tapa: "1 persona",
        media: '2 personas',
        racion: "4 personas"
    },
    ingredientes: ["pulpo", "huevo", "pimiento", "cebolla"]
}

console.log(receta)

console.log(JSON.stringify(receta)) // convertimos objeto a JSON
console.log(typeof(JSON.stringify(receta)))

// partimos de una cadena JSON
let cadena = new String('{"cancion": "Fuego", "grupo": "Vetusta Morla"}')
console.log(JSON.parse(cadena)) // devuelve el objeto equivalente
console.log(typeof(JSON.parse(cadena)))
let objeto = JSON.parse(cadena) // creamos el objeto a partir de la cadena JSON
for(elemento in objeto)
    console.log(elemento)

