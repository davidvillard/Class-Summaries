// Ejercicio: Machine learniing de aprendizaje de la operación lógica OR
// crear una red neuronal


// Función OR

// creamos una red neuronal
const redNeuronal = new brain.NeuralNetwork()

// defino un objeto con los datos de entrenamiento
const datos = [
    {"input" : [0,0], "output" : [0]},
    {"input" : [0,1], "output" : [1]},
    {"input" : [1,0], "output" : [1]},
    {"input" : [1,1], "output" : [1]}
]

// entrenamiento con los datos aportados
redNeuronal.train(datos)

// Probamos la red neuronal

/*let resultado = brain.likely([0,0], redNeuronal) // selecciona el resultado más probable
console.log(resultado)
console.log(redNeuronal.run([0,0])) // 0.109....: obtenemos casi 0
resultado = brain.likely([1,1], redNeuronal)
console.log(resultado)*/
console.log(redNeuronal.run([0,0])) // 0.109....: obtenemos casi 0
console.log(redNeuronal.run([0,1])) // 0.109....: obtenemos casi 0
console.log(redNeuronal.run([1,0])) // 0.109....: obtenemos casi 1
console.log(redNeuronal.run([1,1])) // 0.907....: obtenemos casi 1

