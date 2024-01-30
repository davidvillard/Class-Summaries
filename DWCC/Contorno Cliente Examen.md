
## Arrays:

- Un array es una estructura que permite almacenar objetos bajo un mismo nombre.

```javascript
// Declaración de un array 
let frutas = ["manzana", "plátano", "uva", "naranja"];  

// Acceso a elementos mediante índices 
console.log(frutas[0]); // Imprime "manzana" 

console.log(frutas[2]); // Imprime "uva"  
// Modificación de un elemento 

frutas[1] = "pera"; console.log(frutas);  // Imprime ["manzana", "pera", "uva", "naranja"]  

// Longitud del array 
console.log(frutas.length); // Imprime 4`
```


#### Métodos:


##### Push:

- Añade elementos al final de la array

```javascript
let numeros = [1, 2, 3];
numeros.push(4, 5);
console.log(numeros); // Imprime [1, 2, 3, 4, 5]

```

##### Pop:

- Elimina elementos al final de la array

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.pop();
console.log(numeros); // Imprime [1, 2, 3, 4]

```


##### Shift:

- Elimina el primer elemento de la array

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.shift();
console.log(numeros); // Imprime [2, 3, 4, 5]

```


##### Unshift:

- Añade elementos al principio de la array

```javascript
let numeros = [2, 3, 4, 5];
numeros.unshift(1);
console.log(numeros); // Imprime [1, 2, 3, 4, 5]

```


##### Splice:

- Permite modificar el contenido de un array eliminando o reemplazando elementos existentes o agregando nuevos elementos.

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 1, 6, 7);
console.log(numeros); // Imprime [1, 2, 6, 7, 4, 5]

```


##### Slice:

- Devuelve una porción del array, sin modificar el array original

```javascript
let numeros = [1, 2, 3, 4, 5];
let subArray = numeros.slice(1, 4);
console.log(subArray); // Imprime [2, 3, 4]

```


##### IndexOf:

- Devuelve el indice de la ocurrencia de un elemento de la array

```javascript
let numeros = [1, 2, 3, 4, 5];
console.log(numeros.indexOf(3)); // Imprime 2

```


##### Foreach:

- Recorrer la array

```javascript
let frutas = ["manzana", "pera", "uva"];
frutas.forEach(function(fruta) {
    console.log(fruta);
});
// Imprime:
// manzana
// pera
// uva

```


---


## Mapas

- Es una colección de pares clave-valor donde cada clave debe ser única. Es una forma eficiente de almacenar y recuperar datos


```javascript
// Declaración de un mapa
let persona = new Map();

// Asignación de pares clave-valor
persona.set("nombre", "Juan");
persona.set("edad", 25);
persona.set("ciudad", "Madrid");

// Acceso a valores mediante claves
console.log(persona.get("nombre")); // Imprime "Juan"
console.log(persona.get("edad"));   // Imprime 25

// Tamaño del mapa
console.log(persona.size); // Imprime 3

```



#### Metodos:


##### Get

- Devuelve el valor de la key asociada

```javascript
console.log(persona.get("nombre")); // Imprime "Juan"
```


##### Has

- Verifica si el mapa contiene una clave especifica

```javascript
console.log(persona.has("edad")); // Imprime false
```



##### Delete

- Elimina el par clave-valor asociado a la clave especificada

```javascript
persona.delete("nombre");
```



##### Clear

- Elimina todos los pares clave-valor

```javascript
persona.clear();
```



##### Size

- Devuelve el numero de pares clave-valor en el mapa

```javascript
console.log(persona.size); // Imprime 0
```



##### Keys

- Devuelve un iterador de las claves en el mapa

```javascript
let keysIterator = persona.keys();
for (let key of keysIterator) {
    console.log(key);
}
```



##### Values

- Devuelve un iterador de los valores en el mapa

```javascript
let valuesIterator = persona.values();
for (let value of valuesIterator) {
    console.log(value);
}
```



##### Entries

- Devuelve un iterador de pares `[clave, valor]` en el mapa.

```javascript
let entriesIterator = persona.entries();
for (let entry of entriesIterator) {
    console.log(entry[0], entry[1]);
}
```



##### Array.from():

- Pasar de `Mapa` a `Array`

```javascript
// Convertir claves a un array
let keysArray = Array.from(persona.keys());
console.log(keysArray); // Imprime ["nombre", "edad"]

// Convertir valores a un array
let valuesArray = Array.from(persona.values());
console.log(valuesArray); // Imprime ["Juan", 25]

```


- De `Array` a `Mapa`

```javascript
let entriesArray = [["nombre", "Juan"], ["edad", 25]];

// Convertir un array de arrays a un mapa
let persona = new Map(entriesArray);
console.log(persona); // Imprime Map { 'nombre' => 'Juan', 'edad' => 25 }

```


---


## Conjuntos

- Un conjunto es un coleccion de elementos unicos, sin orden específico.


```javascript
// Declaración de un conjunto
let colores = new Set();

// Agregar elementos al conjunto
colores.add("rojo");
colores.add("azul");
colores.add("verde");

// Verificar la existencia de un elemento
console.log(colores.has("rojo")); // Imprime true

// Tamaño del conjunto
console.log(colores.size); // Imprime 3

// Eliminar un elemento
colores.delete("azul");
console.log(colores); // Imprime Set { 'rojo', 'verde' }

```




#### Metodos


##### Add

- Agrega un elemento al conjunto

```javascript
let colores = new Set();
colores.add("rojo");
colores.add("azul");
colores.add("verde");

```


##### Delete

- Elimina un elemento del conjunto

```javascript
colores.delete("azul");
```


##### Has

- Verifica si un elemento esta presente en el conjunto

```javascript
console.log(colores.has("rojo")); // Imprime true
```


##### Size

- Devuelve la cantidad de elementos del conjunto

```javascript
console.log(colores.size); // Imprime 2
```


##### Clear()

- Elimina todos los elementos del conjunto

```javascript
colores.clear();
```


##### Foreach(callback)

- Recorre elemento a elemento del conjunto

```javascript
colores.forEach(color => {
    console.log(color);
});
```


##### Values()

- Devuelve un iterador que contiene los valores del conjunto

```javascript
let iterador = colores.values();
console.log(iterador.next().value); // Imprime el primer valor
```


##### Entries()


- Devuelve un iterador que contiene los pares para cada elemento del conjunto

```javascript
let iterador = colores.entries();
console.log(iterador.next().value); // Imprime el primer par [valor, valor]
```



## Funciones flecha


- Las funciones flecha en JavaScript son una forma más concisa de escribir funciones anónimas


```javascript
// Función flecha para sumar dos números
let suma = (a, b) => a + b;

// Función flecha para restar dos números
let resta = (a, b) => a - b;

// Función flecha para multiplicar dos números
let multiplicacion = (a, b) => a * b;

// Función flecha para dividir dos números
let division = (a, b) => a / b;

// Ejemplos de uso
console.log(suma(5, 3));           // Imprime 8
console.log(resta(10, 4));          // Imprime 6
console.log(multiplicacion(2, 6));  // Imprime 12
console.log(division(8, 2));         // Imprime 4
```


