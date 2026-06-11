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