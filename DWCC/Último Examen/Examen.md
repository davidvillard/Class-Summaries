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