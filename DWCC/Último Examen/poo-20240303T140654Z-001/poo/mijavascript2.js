// PDO

// constructor
class Viaje{
    constructor(origen="Pontevedra", destino="parís",dias=5,precio=800) {
        this.origen = origen
        this.destino = destino
        this.dias = dias
        this.precio = precio
    }
    mostrar() {
        console.log(`${this.origen} | ${this.destino}`)
        console.log(`durante ${this.dias} dias: EUR${this.precio}`)
    }
}
// creo una instancia del objeto viaje
let miViaje = new Viaje("Madrid","Vigo",2,134)
miViaje.mostrar()

let miViaje2 = new Viaje()
miViaje2.mostrar()