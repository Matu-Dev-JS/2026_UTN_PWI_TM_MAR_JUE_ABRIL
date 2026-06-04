

//Una funcion me permite guardar una accion del programa en la memoria
//Esto nos sirve para repetir mutiples veces la misma accion sin necesidad de repetir codigo
//Tambien es util para separar las responsabilidades de nuestro programa


//Declarando la funcion
//Cuando declaramos la funcion solo estamos describiendo la existencia de la misma, similar al proceso de declarar una variable
//Esto quiere decir que por si sola la declaracion NO hace nada

//Esta funcion tiene parametros, los parametros son la forma de comunicarnos con la funcion. Estos parametros se pasan como argumentos cuando la funcion es invocada

/* 
Esta funcion tiene un retorno, el retorno es algo OPCIONAL
Si no tiene retorno el retorno es undefined

El retorno sirve para que la funcion comunique un dato, es un OUTPUT

Debemos en lo posible evitar que nuestra funcion tenga mas de 1 responsabilidad
*/
/* function calcularIva (precio){
    return precio * 0.21
} */

//Aca 80 es el argumento 'precio', sabemos que es precio por el orden
/* calcularIva(80)

let precio = prompt('Ingresa el precio del producto')
precio = Number(precio) */

//Invocacion, es cuando llamamos a nuestra funcion, invocamos escribiendo el nombre de la funcion + ()
/* let precio_final = precio + calcularIva(precio)
alert('Tu producto costara: $' + precio_final)
 */

//resta
/* function restar(a, b){
    return a - b
} */

//40 es el valor del parametros A y 60 es el valor del parametro B, esto es asi por el orden en el que fueron declarados los parametros
/* console.log(restar(40, 60))

console.log(console.log()) */

/* 
Cual es la responsabilidad de la funcion sumar?
- Suma a y b
- Mostrar el mensaje por consola del resultado
*/
/* function sumar (a, b){
    let resultado = a + b
    //Template string
    //console.log(`El resultado de sumar ${a} y ${b} es: ${resultado}`)   
    return resultado
} */

/* let resultado_1 = sumar(50, 50)
console.log(`El resultado de sumar ${50} y ${50} es: ${resultado_1}`) */


//Abstraccion
/* 
function sumar(a, b){
    return a + b
}

function restar(a, b){
    return a - b
}


function calcular(operation, a, b){
 */
/* switch(operation){
    case '+':
        return sumar(a, b)
    case '-':
        return restar(a, b)
    default:
        return null
} */


/*     if(operation === '+'){
        return sumar(a, b)
    }
    if(operation === '-'){
        return restar(a, b)
    }
    return null

} */
/* 
console.log(calcular('+', 40, 40))
console.log(calcular('-', 10, 5))
console.log(calcular('*', 50, 10))


function definirAccion (accion, params){
    switch(accion){
        case 'LOGOUT': 
            logout()
            break
        case 'LOGIN':
            login()
            break
        
    }
} */

/* 
ESTO LO HACEN TODOOOS
1. promediarTrimestre que recibira 3 numeros y debera cacular el promedio
2. validarNumero que recibira un dato y debera devolver un boolean indicando si el numero es valido 
    Que no sea NaN ni null
3. validarNumeroPositivo que recibira un dato y debera devolver un boolean indicando si el numero es positivo y valido 
*/

/* 
1.
function promediarTrimestre(numero1, numero2, numero3) {
    let promedio = (numero1 + numero2 + numero3) / 3;
    return promedio;
}

console.log(promediarTrimestre(9, 10, 8)) 
*/

//2.
/* 
function validarNumero(dato) {
    let esNumero = dato != '' && dato != null && !isNaN(dato)
    return esNumero
} 
 */

//3.
/* 
function validarNumeroPositivo(dato){
    return validarNumero(dato) && dato > 0;
} 
*/


//Tipos de datos objeto
//ARRAYS:
//Sinonimos: arreglo, lista, coleccion, matriz
/* 
Es un tipo de dato que nos permite LISTAR datos de forma ORDENADA
El array SIEMPRE esta ordenado por el INDICE (index)
El array tiene 1 SOLA PROPIEDAD llamada length

Para llamar a un elemento dentro del array debemos usar su indice
*/

/* let notas = [
    10, //primera nota
    9, //segunda nota
    8 //tercera nota
]

let nombres_que_me_gustan = [
    'pepe', //indice 0
    'sofia', //indice 1
    'cosme fulanito', // indice 2
    false
]
console.log(nombres_que_me_gustan[0])
console.log(nombres_que_me_gustan.length)
 */

/* 
Recibe una lista de numeros y devuelve la sumatoria entre esos numeros
*/
function sumatoria (numeros){
    let acumulador = 0

    //recorrer el array
    //Recorre del primer indice hasta el ultimo del array
    for(
        let indice = 0; 
        indice < numeros.length; 
        indice = indice + 1
    ){
        console.log("Estoy accediendo al indice " + indice )
        console.log(`Cuando el indice es ${indice}, el numero seleccionado es ${numeros[indice]}`)
        acumulador = acumulador + numeros[indice]
        console.log(`Ahora el acumulador es ${acumulador}`)
    }

    return acumulador
}

function promediar(notas) {
    let promedio = sumatoria(notas) / notas.length;
    return promedio;
}


console.log(promediar([10, 9, 8, 10, 9, 8, 2, 3, 10]))