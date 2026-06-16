/* 
const se usa cuando un dato es el mismo a lo largo de la ejecucion del programa
*/

const PI = 3.14
//Arrow function o funcion en flecha
const sumar = (a, b) => {
    return a + b
}

const USERS_TABLE_NAME = 'users'


/* 
Array de objetos
*/
//es const porque la variable guarda de forma constante a lo largo de la ejucucion del programa la referencia del array
const personas = [
    {
        id: 1,
        nombre: 'pepe',
        edad: 20
    },
    {
        nombre: 'maria',
        edad: 30,
        id: 2
    },
    {
        nombre: 'jose',
        edad: 40,
        id: 3
    },
    {
        nombre: 'javier',
        edad: 50,
        id: 4
    }
]

//Quiero que busquen guarden en una variable llamada culpable a la persona id 3


//Quiero a las personas entre 30 y 45 años

//Filtro:
//por cada elemento de la lista veo si cumple una condicion, si la cumple la sumo a la lista resultante, sino la omito


//Primero necesito una lista donde guardar los resultados
/* const personasFiltradas = [] */

//Necesito recorrer la lista de usuarios, y por cada usuario cheackear si cumple con el filtro
//En caso de cumplir sumar a la lista de personas filtradas
//for of lo pueden leer como: por cada persona de la lista de personas, ejecuta esto
/* for(const persona of personas){
    
    if(persona.edad >= 30 && persona.edad <= 45){
        personasFiltradas.push(persona)
    }
    
}


console.log(personasFiltradas) */

//Esto no se puede
//personas = ''

/* personas.push({
    nombre: 'sofia',
    edad: 45,
    id: 5
}) */



/* let culpable;
for (const persona of personas) {
    if (persona.id === 1){
        continue;
    }
    if (persona.id === 3) {
        culpable = persona;
        break;
    }
}
console.log(culpable) */


/* 
Quiero una funcion llamada obtenerNombres() que reciba una lista de personas y retorne la lista de nombres de esas personas
osea que el resultado deberia ser ['pepe', 'maria', 'jose', 'javier']
*/


/* function obtenerNombres(personas) {
    const listaDeNombres = []
    for (const persona of personas) {
        listaDeNombres.push(persona.nombre)
    }
    return listaDeNombres
}
const lista_nombres = obtenerNombres(
    [
        {
            id: 1,
            nombre: 'juan',
            edad: 20
        },
        {
            nombre: 'julieta',
            edad: 30,
            id: 2
        },
        {
            nombre: 'jose',
            edad: 40,
            id: 3
        },
        {
            nombre: 'javier',
            edad: 50,
            id: 4
        }
    ]
)

console.log(lista_nombres) */

/* 
Crear una funcion llamada crearPersonas que recibira una lista de nombres y devolvera una lista donde cada nombre sera un objeto con la propiedad nombre.

1. Definir una funcion llamada crearPersonas
2. Definir un parametro llamado listaNombres en la funcion crearPersonas (El parametro es un array de strings) 
    EJ: ['pepe', 'juan']
3. Definir una lista resultante vacia.
4.1 Recorremos el array de nombres y por cada nombre ejecutamos
    4.2 un push a la lista resultante con el objeto y la propiedad nombre con el valor del nombre que estamos recorriendo

crearPersonas(['pepe', 'juan']) =>  [{nombre: 'pepe'}, {nombre: 'juan'}]
*/

/* 
Crear una funcion llamada determinarParOImpar que recibe una lista de numeros y devuelve una lista de objetos donde cada objeto tendra la propiedad esPar: boolean y valor: number

determinarParOImpar([1, 2, 3]) => [{esPar: false, valor: 1}, {esPar: true, valor: 2}, {esPar: false, valor: 3}]
*/

/* 
Que tipo de dato es el parametro numeros? es un array de numeros
*/


/* function determinarParOImpar (numeros){
    const listaResultante = []

    //QUE tipo de dato es numero: number
    for(let numero of numeros){
        //Cualquier numero divido 2 que de resto 0 es par 
        //Cualquier numero divido 2 que de resto 1 es impar 
        let esPar = (numero % 2) === 0
        const objeto = {
            esPar: esPar,
            valor: numero
        }
        console.log('El objeto cuando el numero es ' + numero, objeto)
        listaResultante.push(objeto)
    }
    console.log(listaResultante)
    return listaResultante
}

let resultado = determinarParOImpar([9, 60, 50])
console.log('El resultado es: ',  resultado)
 */

/* 
a es un numero
b es un numero
y el retorno es un numero (la suma de a + b)
*/
/* function sumar(a, b){
    return a + b
} */



/* 
Crear una funcion llamada describirStrings que recibe una lista de strings y retorna una lista de objetos donde cada objeto tendra la propiedad cantidad_letras y palabra_original

describirStrings(['pepe', 'sol']) => [{cantidad_letras: 4, palabra_original: 'pepe'}, {cantidad_letras: 3, palabra_original: 'sol'}]
*/

/* 
listaPalabras que tipo de dato es? array de strings
*/
/* function describirStrings(listaPalabras) {
    const resultado = []
    for (let i = 0; i < listaPalabras.length; i++) {
        let palabra = listaPalabras[i]
        let objeto = {
            cantidad_letras: palabra.length,
            palabra_original: palabra
        }
        resultado.push(objeto)
    }
    return resultado
}
console.log(describirStrings(['pepe', 'sol'])) */


const productos = [
    {
        id: 1,
        titulo: 'Tv Samsung 52"',
        precio: 3000,
        descripcion: 'Tv muy buena para ver el mundial',
        categoria: ['Tecnologia', 'Hogar'],
        stock: 40
    },
    {
        id: 2,
        titulo: 'Notebook Lenovo ThinkPad',
        precio: 5200,
        descripcion: 'Ideal para trabajo y programación',
        categoria: ['Tecnologia', 'Oficina'],
        stock: 15
    },
    {
        id: 3,
        titulo: 'Mouse Logitech G502',
        precio: 450,
        descripcion: 'Mouse gamer de alta precisión',
        categoria: ['Tecnologia', 'Gaming'],
        stock: 75
    },
    {
        id: 4,
        titulo: 'Silla Ergonómica',
        precio: 1800,
        descripcion: 'Silla cómoda para largas jornadas',
        categoria: ['Oficina', 'Hogar'],
        stock: 20
    },
    {
        id: 5,
        titulo: 'Teclado Mecánico Redragon',
        precio: 900,
        descripcion: 'Teclado RGB con switches mecánicos',
        categoria: ['Tecnologia', 'Gaming'],
        stock: 35
    },
    {
        id: 6,
        titulo: 'Monitor LG 27"',
        precio: 2500,
        descripcion: 'Monitor Full HD para trabajo y juegos',
        categoria: ['Tecnologia', 'Gaming'],
        stock: 18
    },
    {
        id: 7,
        titulo: 'Escritorio de Madera',
        precio: 2200,
        descripcion: 'Escritorio amplio para oficina o estudio',
        categoria: ['Oficina', 'Hogar'],
        stock: 12
    }
];
/* 
    - crear una funcion llamada obtenerPorId que reciba el numero de id, la lista productos y retorne el producto que tenga el id buscado
    - crear una funcion llamada existeCategoria que recibe una categoria, la lista de productos y te retorna un boolean marcando si la categoria ya existe en algun producto de la lista
        existeCategoria('Tecnologia', productos) => true
        existeCategoria('Limpieza', productos) => false
    - crear una funcion llamada obtenerProductoEntreRangoPrecios(max, min, productos) y te devuelva los productos que esten en ese rango de precios
    - crear la funcion obtenerProductoCercaSinStock(limite, productos) te devuelve todos los productos que esten con un stock igual o menor al limite
    - crear la funcion obtenerEstimadoVentaBruta(productos) que debera retornar el total de la sumatoria de todos los precios por stock

*/



//1.

//Ejemplo con arrow function
/* const obtenerPorId = (id, productos) => {

    for (let producto of productos) {
        if(producto.id === id){
            return producto
        }
    }
} */

//No es necesario
//Arrow function simplificada
/* const mostrarProducto = ( producto ) => `${producto.titulo} con un de precio: ${producto.precio}\n hay un de stock: ${producto.stock} unidades`;
let productoBuscado = obtenerPorId(2, productos);
console.log(`El producto id ${2} es: ${mostrarProducto(productoBuscado)}`);
 */


//2.
/* function existeCategoria(categoria, productos) {
    for (let elemento of productos) {
        if (elemento.categoria.includes(categoria)) {
            return true
        }
    }
    return false
}
console.log(existeCategoria('Limpieza', productos))
console.log(existeCategoria('Tecnologia', productos))
 */



//3.
/* function obtenerProductoEntreRangoPrecios(min, max, productos){
    let resultado = []
    for(let i = 0; i < productos.length; i++){
        if(productos[i].precio >= min && productos[i].precio <= max){
            resultado.push(productos[i])
        }
    }
    return resultado
}


console.log(obtenerProductoEntreRangoPrecios(1000, 3500, productos)) */

//4. 
/* function obtenerProductoCercaSinStock(limite, lista) {
    const resultado = [];
    for (const producto of lista) {
        if (producto.stock <= limite) {
            resultado.push(producto); 
        }
    }
    return resultado; 
}
console.log(obtenerProductoCercaSinStock(20, productos)) */

//5.
/* function obtenerEstimadoVentaBruta(productos) {
    let total = 0
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio * productos[i].stock
    }
    return total
}

console.log(obtenerEstimadoVentaBruta(productos)) */