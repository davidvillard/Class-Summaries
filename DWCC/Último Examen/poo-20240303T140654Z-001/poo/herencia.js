// Herencia
class Forma {
    type = "geométrica"
    color = "naranja"

    constructor() {
        console.log("Soy una forma geométrica")
    }

    show() {
        console.log(`Soy una forma ${this.type} de color ${this.color}`)
    }

    setColor(color) {
        this.color = color;
    }
}

// clase hija
class Cuadrado extends Forma {
    type = "cuadrada";
    constructor() {
        super(); // llama al constructor de la clase padre
        console.log("Soy un cuadrado")
    }
}

const c1 = new Cuadrado()

c1.show()

const c2 = new Cuadrado()
c2.setColor("amarillo")
c2.show()

const f1 = new Forma()
f1.setColor("verde")
f1.show()

class Padre {
    soloPadre() { console.log("Tarea en el padre...") }
    padreHijo() { console.log("Tarea en el padre...") }
    sobreHijo() { console.log("Tarea en el padre...") }
}

class Hijo extends Padre {
    padreHijo() {
        super.padreHijo() // ejecuta método concreto de su superclase
        console.log("Tarea en el hijo...")
    }
    soloHijo() { console.log("Tarea en el hijo...") }
    sobreHijo() { console.log("Tarea en el hijo...") }
}

let son = new Hijo()
son.padreHijo() // se ejecutan ambos métodos
son.sobreHijo() // se ejecuta solo el hijo, porque sobreescribe el heredado
son.soloHijo()

// recorrido

class Viaje {
    constructor(origen, destino, dias, precio) {
        this.origen = origen
        this.destino = destino
        this.dias = dias
        this.precio = precio
    }

}

class NuevoViaje extends Viaje {
    constructor(origen, destino, dias, precio, comida = "arroz", bebida="agua") {
        super(origen, destino, dias, precio)
        this.comida = comida
        this.bebida = bebida
    }
}


let miViaje = new Viaje("Barcelona", "Ibiza", 2, 112)
//for (elemento in miViaje)
//    console.log(elemento)

let miNuevoViaje = new NuevoViaje()
//for (elemento in miViaje)
//    console.log(elemento)

// borrado
delete miViaje.precio //eliminamos propiedades precio y dias
delete miViaje.dias
for (elemento in miViaje)
    delete elemento