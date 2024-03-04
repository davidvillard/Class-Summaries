// expresiones regulares
// expresión regular literal:
let erLiteral = /[0-9]/
// función constructora del objeto RexExp
let erObjeto = new RegExp('[0-9]')

// comprobar validez con la expresión test
let valida = new RegExp('[0-9]')
console.log(valida.test("e")) // false
console.log(valida.test("elmo")) //false
console.log(valida.test("elmo77barrio")) //true
console.log(valida.test("986")) //true

// Modificadores

// Modificador i: no se desea distinguir entre mayúsculas y minúsculas

let vocal = /a/; // letra a minúscula
console.log(vocal.test("pizza")) // true
console.log(vocal.test("TACO")) // true

let vocal2 = /A/i; //letra a minúscula o mayúscula
console.log(vocal2.test("pizza")) // true
console.log(vocal2.test("TACO")) // true

// Modificador ^: fuerza que la cadena empiece por el caracter o caracteres
// inmediatamente posteriores

let comienza = /^a/;
console.log(comienza.test("plaza")) // false
console.log(comienza.test("SACO")) // false
console.log(comienza.test("araña")) // true
console.log(comienza.test("Alberto")) // false

// $ para acabar

// . cualquier caracter

// [] caracteres opcionales

// () permiten agrupar

var regExp = /^\w+([\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var email = prompt("Indique su email")
if (regExp.test(email)) {
    console.log("Formato de email correcto")
} else {
    console.log("Formato de email incorrecto")
}

