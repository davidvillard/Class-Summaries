# Teoria

## BOM

```javascript
// Modelo de objetos
// DOM -> acceso al sitio web
// BOM -> acceso al navegador

// BOM 
// objeto window
let ancho = window.innerWidth
let alto = window.innerHeight
console.log(`Ancho x Alto (en píxeles): ${ancho} x ${alto}`)

// Carga completa
window.onload = function() {
    console.log(' La página se ha cargado completamente')
}

// Abrir ventana
window.open('https://www.ejemplo.com')

// Imprimir página actual
window.print()

// Mostrar alerta
window.alert('¡Cuidado!')

// Mostrar ventana de confirmación
const confirmacion = window.confirm("¿Estás seguro?")
if (confirmacion) {
    console.log("El usuario confirmó.")
} else {
    console.log("El usuario no confirmó.")
}

// Obtener la altura y el ancho de la pantalla
const alturaPantalla = window.screen.height
const anchuraPantalla = window.screen.width
console.log(`Altura de la pantallña: ${alturaPantalla}`)
console.log(`Anchura de la pantallña: ${anchuraPantalla}`)


// Objeto navigator
let infoNavegador = "clipboard" + navigator.clipboard + "\n"
infoNavegador += "cookieEnabled" + navigator.cookieEnabled + "\n"
infoNavegador += "geolocation" + navigator.geolocation + "\n"
infoNavegador += "language" + navigator.language + "\n"
infoNavegador += "onLine" + navigator.onLine + "\n"
infoNavegador += "plugins" + navigator.plugins + "\n"
infoNavegador += "storage" + navigator.storage + "\n"
infoNavegador += "userAgent" + navigator.userAgent + "\n"
console.log(infoNavegador)


// objeto screen
let infoPantalla = "availHeigth" + screen.availHeight + "\n"
infoPantalla = "availWidth" + screen.availWidth + "\n"
infoPantalla = "colorDepth" + screen.colorDepth + "\n"
infoPantalla = "height" + screen.height + "\n"
infoPantalla = "orientation" + screen.orientation + "\n"
infoPantalla = "pixelDepth" + screen.pixelDepth + "\n"
infoPantalla = "width" + screen.width + "\n"


// Objeto location
function recargarPagina() {
    location.reload()
}

// objeto history
// go()
// go(-1) : back()
// go(1) : forward ()

// temporizadores
// setTimeout()
let t1 = new Date()
console.log(t1.getHours()+":"+t1.getMinutes+":"+t1.getSeconds)

// se saca por pantalla la hora a la que se inicia el script

// creamos temporizador que se ejecutará a los 5 seg
identificador = window.setTimeout(()=>{
    let t2 = new Date()
    console.log(t2.getHours()+":"+t2.getMinutes+":"+t2.getSeconds)
}, 5000)
clearTimeout(identificador)
// setInterval()

```

## DOM


```javascript

// DOM
console.log(document.nodeType)
// 1 - elemento
// 2 - atributo
// 3 - texto
// 4 - CDATA
// 5 - Ref a entidad
// 6 - entidad
// 7 - Instrucción de procesado
// 8 - Comentario
// 9 - Docuento
// 10 - Tipo de documento
// 11 - Fragmento de código
// 12 - Anotación

// Asociados a nodeType están:
// nodeName: nombre del nodo
// nodeValue: valor del nodo

// selección de elementos

// IDENTIFICADORES
// getElementById

let ceo = document.getElementById("CEO")
console.log(ceo)
console.log(ceo.nodeType)
console.log(ceo.nodeName)
console.log(ceo.nodeValue)

// ETIQUETAS
// getElementByTagName
let equipo = document.getElementsByTagName("span")
console.info(equipo)
document.write(`El equipo consta de ${equipo.length} miembros`)
console.log(equipo[1]) // span CTO
console.log(equipo[1].innerText) // Carlos Méndez
console.log(equipo[1].id) //CTO

// CLASES
// getElementByClassName
let directores = document.getElementsByClassName("direccion")
// devuelve el 2 y el 3
console.log(directores)
console.log("")
for (d in directores)
    console.log(d)

// SELECTORES CSS
// querySelectorAll
let enlaces = document.querySelectorAll("span > a")
console.log(enlaces)
let primerDirector = document.querySelectorAll("")

//Evita que se pege algo en el input de email on id repemail
let elemento = document.getElementById("repemail")
elemento.addEventListener("paste", (ev)=>{ev.preventDefault()})

```

## Eventos


```javascript

// Eventos de arrastrar y soltar
// atributo draggable

// Eventos para arrastrar un elemento
// drag: cada vez que se arrastra (iniciado el arrastre)
// dragstart: al comenzar el arrastre
// dragstop: al finalizar el arrastre

// Eventos de soltar un elemento
// dragenter: el elemento que se arrastra entra en el elemento destino
// dragleave: el elemento que se arrastra sale del elemento destino
// dragover: cuando continua el arrastre sobre el elemento desino
// drop: cuando se suelta sobre el elemento destino

let elementosOrigen = document.querySelectorAll("#origen > li")
let destino = document.getElementById("destino")

elementosOrigen.forEach(function(elemento) {
    elemento.addEventListener("dragstart", 
    (evento) => iniciadoArrastre(evento))
})

destino.addEventListener("dragover", (evento) => permitirSoltar(evento))
destino.addEventListener("drop", (evento) => soltar(evento))

function iniciadoArrastre(evento) {
    evento.dataTransfer.setData("IdElementoOrigen", evento.target.id)
}

function permitirSoltar(evento) {
    evento.preventDefault()
}

function soltar(evento) {
    evento.preventDefault()
    let elementoArrastrandose = evento.dataTransfer.getData("idElementoOrigen")
    destino.appendChild(document.getElementById(elementoArrastrandose))
}


// tipos de eventos
// eventos de formulario
// forms[0]
// submit => action

let formularioEdad = document.forms[0]
let error = document.getElementById("error")

formularioEdad.addEventListener("submit", (evento) => {
    let edad = parseInt(document.forms[0].elements["edad"].value)
    if (edad<=18 || edad>=65) {
        evento.preventDefault()
        error.innerHTML="La edad debe ser mayor que 18 y menor que 65"
    }
})


// Eventos del ratón
// click: hacer click con el botón principal
// dblclick: hacer doble click con el botón principal
// mousedown / mouseup: cuando se pulsa el botón (antes de soltarlo) y cuando se suelta el botón
// mousenter / mouseleave: cuando el puntero se situa sobre el elemento o lo deja
// mousemove: cuando se mueve sobre el elemento
// contextmenu: cuando se solicita el menú contextual

// Crea un programa que no permita que se habra el menú contextual sobre ningún elemento de la web

document.addEventListener("contextmenu", (evento) => {
    evento.preventDefault()
    console.log("Menú contextual desactivado")
})

// Eventos del teclado
// propiedad key
// Altkey
// CtrlKey
// ShiftKey
// Metakey (apple)

// location: teclas con la misma función en zonas distintas del teclado
// 0: teclado estándar
// 1: parte izquierda
// 2: parte derecha
// 3: teclado numérico

// Eventos
// keypress: tras pulsar y soltar una tecla
// keydown: tras pulsar y antes de soltar una tecla
// keyup: tras soltar una tecla

let todoBody = document.getElementsByTagName("body") [0]

todoBody.addEventListener("keypress", (evento) => {
    console.log(`Lanzado KEYPRESS con la tecla ${evento.key}`)
})

```


## Expresiones Regulares

```javascript

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

//Ejercicio grande con clases y expresiones regulares

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


```


## Herencia


```javascript 

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

```

## POO


```javascript

// POO

// ejercicio: Crea un objeto denominado usuario que permita autenticar a la persona que quiere iniciar sesión en el sistema.

const usuario ={
    nombre: "nombre apellidos",
    nombreUsuario: "userName",
    contraseña: "pwdUser",
    login:function(nombreUsuario,contraseña) {
        if(nombreUsuario === this.nombreUsuario && contraseña === this.contraseña) {
            console.log("Sesión iniciada con éxito")
        } else {
            console.log("Credenciales no válidas")
        }
    }
}
usuario.login('userName','pwdUser') // credenciales correctas
usuario.login('userName','pwUser') // credenciales incorrectas

```


## Objetos Predefinidos del lenguaje

```javascript 

// objetos predefinidos del lenguaje
// string
let cadena = "Mortadela"
console.log("1."+cadena.charCodeAt(1))
console.log("1."+cadena.toUpperCase())
console.log("1."+cadena.toLowerCase())
console.log("1."+cadena.indexOf("l"))
console.log("1."+cadena.lastIndexOf())
console.log("1."+cadena.replace("M","P"))
console.log("1."+cadena.trim())
console.log("1."+cadena.slice())
console.log("1."+cadena.substring(1,3))
console.log("1."+cadena.split("o"))


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


// objetos predefinidos del lenguaje
// date

let fechaSinParametros = new Date()
let fechaTodosParametros = new Date(2024,8,17,13,59,49,0)
let fechaTresParametros = new Date(2022,9,21)
let fechaUnParametro = new Date(1000)
console.log(fechaSinParametros)
console.log(fechaTodosParametros)
console.log(fechaTresParametros)
console.log(fechaUnParametro)

```

## Manipulacion datos


```javascript

let micaja = document.getElementsByTagName("div")[0]
micaja.dataset.ancho = prompt("Indica el ancho con su unidad (ej: 200px)")
micaja.dataset.alto = prompt("Indica el alto con su unidad (ej: 200px)")
micaja.dataset.color_borde = prompt("Indica el color del borde (en inglés)")
micaja.dataset.color_texto = prompt("Indica el color del texto (en inglés)")
micaja.dataset.color_fondo = prompt("Indica el color del fondo (en inglés)")

micaja.style.width = micaja.dataset.ancho
micaja.style.height = micaja.dataset.alto
micaja.style.border = "2px solid"
micaja.style.borderColor = micaja.dataset.color_borde
micaja.style.color = micaja.dataset.color_texto
micaja.style.backgroundColor = micaja.dataset.color_fondo

console.log(micaja.dataset)
console.log("Ancho: " + micaja.dataset.ancho)
console.log("Alto: " + micaja.dataset.alto)
console.log("Color borde: " + micaja.dataset.color_borde)
console.log("Color texto: " + micaja.dataset.color_texto)
console.log("Color fondo: " + micaja.dataset.color_fondo)

```





















# EJERCICIO 1

1. **Eventos de Teclado:**
   - Ejemplo de capturar la tecla "Enter" específicamente:
     ```javascript
     document.addEventListener('keydown', function(event) {
         if (event.key === 'Enter') {
             console.log('¡Se presionó la tecla Enter!');
         }
     });
     ```

   - Ejemplo de capturar combinación de teclas (por ejemplo, Ctrl + S):
     ```javascript
     document.addEventListener('keydown', function(event) {
         if (event.ctrlKey && event.key === 's') {
             console.log('¡Se presionó Ctrl + S!');
         }
     });
     ```

2. **Temporizadores:**
   - Ejemplo de intervalo que ejecuta una función cada segundo:
     ```javascript
     setInterval(function() {
         console.log('¡Este mensaje se mostrará cada segundo!');
     }, 1000);
     ```

   - Ejemplo de temporizador que se ejecuta solo una vez después de 3 segundos:
     ```javascript
     setTimeout(function() {
         console.log('¡Este mensaje se mostrará después de 3 segundos!');
     }, 3000);
     ```

3. **Captura de Eventos:**
   - Ejemplo de captura de clic derecho en un elemento:
     ```javascript
     document.getElementById('miElemento').addEventListener('contextmenu', function(event) {
         console.log('Clic derecho detectado');
         event.preventDefault(); // Evita que aparezca el menú contextual por defecto
     });
     ```

   - Ejemplo de captura de cambio en un campo de entrada:
     ```javascript
     document.getElementById('miInput').addEventListener('change', function() {
         console.log('El valor del campo de entrada ha cambiado');
     });
     ```

4. **Objeto Evento:**
   - Ejemplo de obtener la posición del mouse en un evento de clic:
     ```javascript
     document.addEventListener('click', function(event) {
         console.log('Posición del mouse - X:', event.clientX, 'Y:', event.clientY);
     });
     ```

   - Ejemplo de prevenir el comportamiento predeterminado de un enlace:
     ```javascript
     document.getElementById('miEnlace').addEventListener('click', function(event) {
         event.preventDefault();
         console.log('Clic enlace, pero no se redireccionará');
     });
     ```

5. **Manipulación de Elementos:**
   - Ejemplo de cambiar el texto de un párrafo:
     ```javascript
     document.getElementById('miParrafo').innerText = 'Nuevo texto del párrafo';
     ```

   - Ejemplo de agregar un nuevo elemento a una lista:
     ```javascript
     var nuevaLista = document.createElement('li');
     nuevaLista.textContent = 'Nuevo elemento de la lista';
     document.getElementById('miLista').appendChild(nuevaLista);
     ```

6. **Atributos:**
   - Ejemplo de cambiar el atributo "href" de un enlace:
     ```javascript
     document.getElementById('miEnlace').setAttribute('href', 'nueva_ruta.html');
     ```

   - Ejemplo de obtener el valor del atributo "src" de una imagen:
     ```javascript
     var rutaImagen = document.getElementById('miImagen').getAttribute('src');
     console.log('Ruta de la imagen:', rutaImagen);
     ```

7. **Estilos:**
   - Ejemplo de cambiar dinámicamente el color de fondo con transición:
     ```javascript
     var miElemento = document.getElementById('miElemento');
     miElemento.style.transition = 'background-color 1s';
     miElemento.style.backgroundColor = 'blue';
     ```

   - Ejemplo de cambiar el tamaño de fuente de un elemento:
     ```javascript
     document.getElementById('miTexto').style.fontSize = '20px';
     ```



# EJERCICIO 2

### Validación con Expresiones Regulares:

1. **Validación de Correo Electrónico:**
   - Utilizando una expresión regular para verificar un formato de correo electrónico básico:
     ```javascript
     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     var correo = "usuario@dominio.com";
     
     if (emailPattern.test(correo)) {
         console.log('Correo electrónico válido');
     } else {
         console.log('Correo electrónico inválido');
     }
     ```

2. **Validación de Números de Teléfono:**
   - Expresión regular para validar números de teléfono en formato (XXX) XXX-XXXX:
     ```javascript
     var phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
     var telefono = "(123) 456-7890";
     
     if (phonePattern.test(telefono)) {
         console.log('Número de teléfono válido');
     } else {
         console.log('Número de teléfono inválido');
     }
     ```

### Validación con Programación Orientada a Objetos (POO):

1. **Clase Validadora de Correo Electrónico:**
   ```javascript
   class ValidadorCorreo {
       constructor(correo) {
           this.correo = correo;
       }

       validar() {
           // Lógica de validación aquí
           // Devuelve true si el correo es válido, false si no lo es
       }
   }

   var correoValidator = new ValidadorCorreo("usuario@dominio.com");
   if (correoValidator.validar()) {
       console.log('Correo electrónico válido');
   } else {
       console.log('Correo electrónico inválido');
   }
   ```

2. **Clase Validadora de Números de Teléfono:**
   ```javascript
   class ValidadorTelefono {
       constructor(telefono) {
           this.telefono = telefono;
       }

       validar() {
           // Lógica de validación aquí
           // Devuelve true si el número de teléfono es válido, false si no lo es
       }
   }

   var telefonoValidator = new ValidadorTelefono("(123) 456-7890");
   if (telefonoValidator.validar()) {
       console.log('Número de teléfono válido');
   } else {
       console.log('Número de teléfono inválido');
   }
   ```


# Posible Examen (Ejemplo):

## Ejercicio 1 (4 puntos): Juego. Eventos del teclado, temporizadores, captura de eventos, objeto evento, manipulación de elementos, atributos y estilos.

### Desarrolla un juego de laberinto simple utilizando HTML, CSS y JavaScript. El juego debe cumplir con los siguientes requisitos:

1. Movimiento del Jugador:

- Crea un elemento en el DOM para representar al jugador (puedes usar un div con un color distintivo).
- Implementa eventos del teclado para permitir que el jugador se mueva en las cuatro direcciones (arriba, abajo, izquierda, derecha) dentro del laberinto.

2. Temporizadores y Objetivos:

- Utiliza temporizadores para introducir elementos enemigos en el laberinto después de ciertos intervalos de tiempo.
- El objetivo del juego es llegar a una posición específica del laberinto.

3. Captura de Eventos y Colisiones:

- Captura eventos relevantes (por ejemplo, colisiones con enemigos) utilizando el objeto evento.
- Implementa acciones específicas cuando el jugador colisiona con enemigos.

4. Manipulación de Elementos y Estilos:

- Manipula dinámicamente elementos del DOM para reflejar cambios en el juego.
- Utiliza estilos dinámicos para mejorar la presentación del juego en respuesta a eventos (por ejemplo, cambiar el color del jugador al recoger un objeto).

## Ejercicio 2 (2 puntos): Validación de Códigos. Expresiones Regulares y POO.
### Implementa una aplicación de validación de códigos utilizando HTML, CSS y JavaScript. La aplicación debe incluir:

1. Interfaz de Usuario:

- Crea una interfaz de usuario que permita a los usuarios ingresar códigos en un formulario.

2. Validación de Códigos:

- Define una clase llamada CodigoValidator con un método estático validarCodigo.
- Utiliza expresiones regulares en el método validarCodigo para verificar que los códigos tengan una longitud mínima de 8 caracteres y contengan al menos un carácter alfabético y un carácter numérico.

3. Presentación de Resultados:

- Muestra mensajes claros en la interfaz de usuario indicando si los códigos ingresados son válidos o no.