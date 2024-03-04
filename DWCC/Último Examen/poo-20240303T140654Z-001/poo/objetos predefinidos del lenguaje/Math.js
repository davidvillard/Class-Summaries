// objetos predefinidos del lenguaje
// Math

// todo es falso menos los dos últimos
let b1 = new Boolean(NaN)
let b2 = new Boolean(undefined)
let b3 = new Boolean("")
let b6 = new Boolean(0)
let b7 = new Boolean(-0)
let b8 = new Boolean(null)
let b9 = new Boolean(false)
let b4 = new Boolean([]) //true
let b5 = new Boolean("false") // true
console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)
console.log(b5)
console.log(b6)
console.log(b7)
console.log(b8)
console.log(b9)


let logico1 = false
let logico2 = new Boolean(false)
console.log(logico1)
console.log(logico2)
if(logico1) console.log("logico1 accede")
if(logico2) console.log("logico2 accede")