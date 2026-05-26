/*
Comentarios multilinea
*/
//Comentario UNILINEA

/* var mensaje = 'hola mundo'
console.log(mensaje)  *///Registro por consola

//Tipos de datos primitivos

/* 
String = texto alfanumerico = se escribe entre comillas (Simples o Dobles)
Number = numeros (positivos, negativos, con decimales y NaN) = el numero en si, sin comillas
Boolean = verdadero o falso (true, false)
Null = nulidad o ausencia de dato (null) (Es la forma en la que representamos que no tenemos x dato)
Undefined = cierto dato no definido (undefined) (Normalmente no lo usan ustedes, lo usa el programa)
*/

/* 
Constructores de datos 
Transformar un dato en otro tipo de dato

String
Boolean
    Todos los valores son transformables a boolean
    Si el valor se transforma en true entonces diremos que es truthy 
        Todo lo distinto a falsy es truthy
    Si el valor se transforma en false entonces diremos que es falsy
        null, false, 0, NaN, undefined, ''
Number  
    Cuando un valor no tiene una version numerica se devuelve NaN
    NaN = Not a Number y es de tipo de dato numerico
*/

//var nombre = 'pepe'

/* 
IF:
Si la condicion es truthy entonces ejecuto el bloque de codigo (lo que esta entre llaves ({}))
*/
/* if(nombre){
    console.log("Tu nombre es " + nombre)
} */
//En caso de que el if no se cumpla
/* else{
    console.log("no se tu nombre")
} */

//Operadores Aritmeticos

/* 

Concatenacion = +
    La union entre 2 string
    Ocurre cuando hay almenos 1 string en la operacion 
    El resultado siempre es de tipo String


Suma = +
    Ocurre cuando no hay NINGUN string en la operacion
    
Resta = -
multiplicacion = *
division = /
    Js transforma los datos a operar a numero
    Siempre devuelven un numero
    Cualquier operacion que algun dato sea NaN siempre va a dar como resultado un NaN (Excepto la concatenacion). NaN es INOPERABLE
    Mi recomendacion: 
        Si hacen alguna de estas operaciones asegurensen de que ambos datos sean numericos y no NaN
*/

//console.log( ('tengo ' + 22) + ' años')
//'tengo ' + String(22) 
//'tengo ' + '22' = 'tengo 22'

//console.log('Es: ' + true)

//'Es: ' + String(true)
//'Es: ' + 'true' = 'Es: true'

//console.log(null + true)
//Number(null) + Number(true)
//0 + 1 = 1

//console.log(Boolean(null) + 2.1)

//console.log(Number(undefined) + Number(true)) //NaN

/* 
'4 casas'
Number('4 casas')
NaN
 */

alert("hola mundo")

document.write('<h1>hola mundo</h1>')