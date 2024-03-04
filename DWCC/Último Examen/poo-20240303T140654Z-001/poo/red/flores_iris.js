// Flores iris
// Datos de entrenamiento
const datos = [
    {
        input: { longSepalo: 5.1, anchoSepalo: 3.5, longitudPetalo: 1.4, anchoPetalo: 0.2 },
        output: { setosa: 1 }
    },
    {
        input: { longSepalo: 4.9, anchoSepalo: 3.0, longitudPetalo: 1.4, anchoPetalo: 0.2 },
        output: { setosa: 1 }
    },

    {
        input: { longSepalo: 6.4, anchoSepalo: 3.2, longitudPetalo: 4.5, anchoPetalo: 1.5 },
        output: { versicolor: 1 }
    },
    {
        input: { longSepalo: 5.9, anchoSepalo: 3.0, longitudPetalo: 4.2, anchoPetalo: 1.5 },
        output: { versicolor: 1 }
    },

    {
        input: { longSepalo: 6.9, anchoSepalo: 3.1, longitudPetalo: 5.4, anchoPetalo: 2.1 },
        output: { virginica: 1 }
    },
    {
        input: { longSepalo: 6.7, anchoSepalo: 3.1, longitudPetalo: 5.6, anchoPetalo: 2.4 },
        output: { virginica: 1 }
    },
]

// creamos red neuronal
const net = new brain.NeuralNetwork()

// entrenar la red neuronal

net.train(datos)

// probar red con algún ejemplo
const result = net.run({longSepalo: 5.5, anchoSepalo: 3.5, longitudPetalo: 1.3, anchoPetalo: 0.2})
console.log(result)


// seleccionamos resultado más probable
let resultado = brain.likely({longSepalo: 5.5, anchoSepalo: 3.5, longitudPetalo: 1.3, anchoPetalo: 0.2},net)
document.write("Es una " + resultado + "<br/>")

// porentajes
document.write("setosa: " + Math.trunc(result.setosa*100)+"%<br/>")
document.write("versicolor: " + Math.trunc(result.versicolor*100)+"%<br/>")
document.write("virginica: " + Math.trunc(result.virginica*100)+"%<br/>")
