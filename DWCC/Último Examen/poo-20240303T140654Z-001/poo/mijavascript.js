// POO

let vector = [4,2,7,9]
console.log(vector.length)  // length es una propiedad
                            // log() es un método
console["log"](typeof(vector)) // object
console.log(typeof(console)) // object

console.log(vector instanceof Array) // true
let conjunto = new Set()
console.log(conjunto instanceof Map) // false: No es un objeto mapa

let notas = new Object() // crea un objeto vacío
notas.valores = [7,4,3,5,6,8,9] // definiendo una propiedad
notas.cantidad = notas.valores.length // definiendo una propiedad
notas.media = notas.valores.reduce((a,b)=>a+b,0)/notas.cantidad // suma/cantidad
notas.verMedia = function() {
    console.log(notas.media)
}
notas.verMedia()
// reduce() ejecuta una función reductora sobre cada elemento del array
// array.reduce((acc, currentValue)=>acc+currentValue, initialValue)

// notación JSON
let viaje = {
    origen: "Vigo",
    destino: "El Cairo",
    dias: 8,
    precio: 700,
    mostrar: function() {
        console.log(`${viaje.origen} | ${viaje.destino}`)
        console.log(`durante ${viaje.dias} dias: EUR${viaje.precio}`)
    }
}

viaje.mostrar()
let oferta = viaje
viaje = null
oferta.mostrar()