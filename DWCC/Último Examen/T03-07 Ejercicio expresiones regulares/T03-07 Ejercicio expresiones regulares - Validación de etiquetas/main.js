class Etiqueta {
    nombre= ""
    referencia= ""

    constructor(nombre, referencia) {
        if (arguments.length!=2) {
            throw new Error("No se han pasado los parámetros");
        }
        if (this.validar(referencia)) {
            this.nombre = nombre
            this.referencia = referencia
            console.log("Etiqueta creada correctamente")
        } else {
            console.log("Error al crear la etiqueta. Referencia no válida")
        }
    }

    mostrarArticulo() {
        document.write(`Nombre: ${this.nombre} \n Referencia: ${this.referencia}<br>`)
        console.log(`Nombre: ${this.nombre} \n Referencia: ${this.referencia}`)
    }

    validar(ref) {
        // 2022-xrFdS/25_9
        let patron = /^\d{4}-[A-Za-zÑñÁÉÍÓÚáéíóú]{5}\/\d{2}_\d$/;
        if (patron.test(ref)) {
            return true
        } else {
            return false
        }
    }
}

let etiqueta1 = new Etiqueta("camiseta", "2022-xrFdS/25_9") // válida
etiqueta1.mostrarArticulo()
let etiqueta2 = new Etiqueta("pantalón", "2266-aceDS/47_8") // válida
etiqueta2.mostrarArticulo()
let etiqueta3 = new Etiqueta("mochila", "6785-KJHca_25_9") // no válida
let etiqueta4 = new Etiqueta("calcetines", "0000-tyeoj/47_08") // no válida
let etiqueta5 = new Etiqueta("jersey", "1031-GdAñN/2_3") // no válida
let etiqueta6 = new Etiqueta("abrigo", "347-aceDS/47_8") // no válida
let etiqueta7 = new Etiqueta("botas", "0342-ñYÑDx/40_1") // válida
etiqueta7.mostrarArticulo()
let etiqueta8 = new Etiqueta() // lanza error
let etiqueta9 = new Etiqueta("2266-aceDS/47_8") // lanza error
let etiqueta10 = new Etiqueta("guantes") // lanza error
