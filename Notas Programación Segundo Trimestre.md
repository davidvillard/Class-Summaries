


## COSAS A SABER:
_______________

#### -HASHMAP(RECORRER CON ITERADORES)

Los HashMap son básicamente como un ArrayList que tiene otros métodos. La carácteristica principal de estos es que cada uno de los elementos dentro tiene un identificador y cuando defines un HashMap tienes que definir el  tipo de elemento que quieres almcenar y a la vez el tipo de identidficador que va a usar.

#### ITERATOR:
La interfaz `Iterator` en Java proporciona un conjunto de métodos que se utilizan para iterar (recorrer) elementos en una colección. Aquí están algunos de los métodos más importantes de la interfaz `Iterator` en Java:

-   `boolean hasNext()`: Devuelve `true` si hay más elementos en la colección que se pueden iterar.
    
-   `E next()`: Devuelve el siguiente elemento en la colección.
    
-   `void remove()`: Elimina el elemento actual de la colección.

##### Ejemplo:
```java
HashMap<String, Integer> hashMap = new HashMap<String, Integer>();
hashMap.put("Uno", 1);
hashMap.put("Dos", 2);
hashMap.put("Tres", 3);

// Obtener el conjunto de claves del HashMap
Set<String> keys = hashMap.keySet();

// Obtener un iterador para el conjunto de claves
Iterator<String> iterator = keys.iterator();

// Recorrer el conjunto de claves con el iterador y obtener los valores asociados
while(iterator.hasNext()) {
    String key = iterator.next();
    Integer value = hashMap.get(key);
    System.out.println(key + ": " + value);
}

```

____________________________

#### -FECHAS:
Se utiliza la clase LocalDate (usar el Zeal)


##### Ejemplo:

```java
LocalDate fechahoy = LocalDate.now; //Creamos la fecha actual
```
```java
LocalDate dateBefore;
LocalDate dateAfter;
long daysBetween = DAYS.between(dateBefore, dateAfter) //En donde ponemos DAYS podemos poner tanto YEARS como MONTHS para saber el intervalo de tiempo entre dos fechas
```

_________________

#### -ARRAY LIST

Un `ArrayList` en Java es una clase que se utiliza para almacenar y manipular una lista dinámica de objetos. La lista dinámica significa que el tamaño de la lista puede cambiar durante la ejecución del programa.

La principal ventaja de usar un `ArrayList` es que permite el acceso rápido a cualquier elemento de la lista, lo que significa que se pueden agregar, insertar, eliminar y buscar elementos de la lista de manera eficiente. Además, un `ArrayList` puede contener elementos de cualquier tipo de objeto.

Aquí hay algunos conceptos clave que debes conocer acerca de los `ArrayLists` en Java:

-   Para usar un `ArrayList`, primero debes importar la clase `java.util.ArrayList`.
-   Puedes crear un `ArrayList` vacío especificando el tipo de objeto que deseas almacenar en la lista, por ejemplo: `ArrayList<String> miLista = new ArrayList<String>();`.
-   Puedes agregar elementos a un `ArrayList` usando el método `add()`, por ejemplo: `miLista.add("elemento1");`.
-   Puedes acceder a elementos específicos de un `ArrayList` utilizando su índice (posición) en la lista, por ejemplo: `miLista.get(0);`. Ten en cuenta que el índice comienza en 0.
-   Puedes eliminar elementos de un `ArrayList` utilizando el método `remove()`, por ejemplo: `miLista.remove(0);`. Ten en cuenta que el índice comienza en 0.
-   Puedes obtener la longitud de un `ArrayList` utilizando el método `size()`, por ejemplo: `miLista.size();`.

____

#### -ENUM
Recuerda que son basicamente como las clases de las cuales no se puede crear mas objetos porque es como que están ya previamente definidos en esta.

##### Ejemplo:

```java
public enum Direccion {
    NORTE,
    SUR,
    ESTE,
    OESTE
}


Direccion direccion = Direccion.NORTE;
System.out.println(direccion); // imprime "NORTE"


if (direccion == Direccion.NORTE) {
    System.out.println("Estás yendo hacia el norte.");
}



//Para recorrer puedes...
```
```java
for(Direccion direccion : direccion.values()) {
            System.out.println(direccion);
        }
        
```
______________

#### -INTERFACES

En Java, una interfaz es una colección de métodos abstractos y constantes que se pueden implementar en una clase. Las interfaces se utilizan para definir un contrato o un conjunto de requisitos que una clase debe cumplir si implementa esa interfaz.

##### Ejemplo:
```java
public interface MiInterfaz {
   public void metodo1();
   public int metodo2(int parametro);
   public static final int CONSTANTE = 100;
}
```
```java
public class MiClase implements MiInterfaz {
    public void metodo1() {
        System.out.println("Implementación del método 1.");
    }

    public int metodo2(int parametro) {
        System.out.println("Implementación del método 2.");
        return parametro * CONSTANTE;
    }
}
```
_________

#### -CLASES HEREDADAS y CLASES ABSTRACTAS

Las clases heredadas son aquellas que vienen de otras, aplican los mismos métodos y tienen atributos en común.



##### Ejemplo:

```typescript
public class Animal {
    String nombre;
    int edad;
    String tipoDeComida;
}

public class Perro extends Animal {
    String raza;
    String ladrido;

    public void ladrar() {
        System.out.println("Guau guau!");
    }
}
```

Las clases abstractas en Java son clases que no se pueden instanciar directamente, sino que se utilizan como plantillas para crear otras clases. Las clases abstractas contienen métodos abstractos, que son métodos que no tienen una implementación definida en la clase abstracta, sino que se definen en las clases que heredan de ella.

En otras palabras, una clase abstracta es una clase que tiene una o más operaciones que se deben definir en sus subclases para que las subclases sean utilizables. Esto significa que las clases abstractas son útiles para definir una clase base que proporciona cierto comportamiento y que se espera que las subclases definan algunos detalles específicos.

Para definir una clase abstracta en Java, se utiliza la palabra clave "abstract". Por ejemplo, si queremos crear una clase abstracta "Forma" que defina métodos abstractos para calcular el área y el perímetro, se vería así:

###### Ejemplo:

```java
public abstract class Forma {
    public abstract double calcularArea();
    public abstract double calcularPerimetro();
}
```
```java
public class Rectangulo extends Forma {
    private double ancho;
    private double largo;

    public Rectangulo(double ancho, double largo) {
        this.ancho = ancho;
        this.largo = largo;
    }

    public double calcularArea() {
        return ancho * largo;
    }

    public double calcularPerimetro() {
        return 2 * (ancho + largo);
    }
}
```

##### Notas:
- Recuerda que cuando estás repitiendo el un método en una clase inferior es bueno poner @Override y cuando añades un constructor en la clase hija es mejor poner  `super.atributo = atributo;` en vez de poner `this.atributo = atributo;` para hacer referencia al atributo de la clase superior.

- Las clases abstractas no nos permiten crear objetos directamente a partir de estas, solo otras clases.


_____

#### -STRINGS(CADEAS) Y SABER USAR SUSMETODOS
La clase `String` en Java es una clase predefinida que representa una cadena de caracteres. Las cadenas de caracteres son utilizadas con frecuencia en programación para representar texto.

La clase `String` es inmutable, lo que significa que una vez que se crea un objeto `String`, no se puede modificar. En lugar de ello, los métodos de la clase `String` devuelven una nueva cadena de caracteres que se basa en la cadena original.

Aquí te presento algunos de los métodos más relevantes de la clase `String`:

-   `length()`: Este método devuelve la longitud de la cadena de caracteres.
    
-   `charAt(int index)`: Devuelve el carácter que se encuentra en la posición especificada de la cadena.
    
-   `substring(int beginIndex)`: Devuelve una nueva cadena que es un subconjunto de la cadena original, que comienza desde el índice especificado hasta el final de la cadena.
    
-   `substring(int beginIndex, int endIndex)`: Devuelve una nueva cadena que es un subconjunto de la cadena original, que comienza desde el índice especificado y termina en el índice especificado (no incluido).
    
-   `toUpperCase()`: Devuelve una nueva cadena que es la versión en mayúsculas de la cadena original.
    
-   `toLowerCase()`: Devuelve una nueva cadena que es la versión en minúsculas de la cadena original.
    
-   `equals(Object obj)`: Compara la cadena con el objeto especificado y devuelve `true` si son iguales.
    
-   `equalsIgnoreCase(String anotherString)`: Compara la cadena con otra cadena y devuelve `true` si son iguales, ignorando las diferencias entre mayúsculas y minúsculas.
    
-   `indexOf(int ch)`: Devuelve el índice de la primera ocurrencia del carácter especificado en la cadena.
    
-   `indexOf(String str)`: Devuelve el índice de la primera ocurrencia de la subcadena especificada en la cadena.
    
-   `replace(char oldChar, char newChar)`: Devuelve una nueva cadena en la que se han reemplazado todas las ocurrencias del carácter especificado por el nuevo carácter especificado.
    

______


#### -ARRAYS BIDIMESIONAL RELLENARLO RECORRERLO Y HACER OPERACIONES
Los arrays bidimensionales son una estructura de datos en la que los elementos se organizan en filas y columnas. En Java, los arrays bidimensionales se crean utilizando la siguiente sintaxis:

```java
int[][] matriz = new int[3][4];
```

Se llenan asi:

```java
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        matriz[i][j] = i * j;
    }
}
```

Se recorren asi:

```java
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        System.out.print(matriz[i][j] + " ");
    }
    System.out.println();
}
```