

/* 
Tipos de datos:

string: Cadena de caracteres, sirven para escribir valores alfanumericos
number: Valores numericos, NaN (Js lo usa para representar resultados numericos imposibles, como transformar Number('hola') )
boolean: Para representar el true o false (generalmente usado en condiciones, ej: mayorEdad = edad >= 18)
null
undefined

Constructores: 
Pueden transformar a otro tipo de dato
String()
Number()
Boolean()

Operadores Aritmeticos:
+ : Concatenacion
    Se usa para unir strings
    Ocurre cuando almenos hay un string en la operacion
    Siempre devuelve un string


    Sirven para hacer operaciones matematicas
    Siempre devuelve un number
    Si se intenta operar a NaN siempre dara NaN como resultado, NaN es inoperable
+ : Suma  
    No debe haber un string en la operacion
- : Resta
/ : Division
* : Multiplicacion
*/

//'hola' + 1
//'hola' + String(1)
//'hola' + '1' = 'hola1'


//var persona = {}
//'hola' + persona
//'hola' + String(persona)
//'hola' + '[object Object]

//console.log('hola' + console)

//true + null
// Number(true) + Number(null)
// 1 + 0 = 1


//60 - '40 años'
//60 - Number('40 años')
// 60 - NaN = NaN


//13 - '1'
//13 - Number('1')
//13 - 1 = 12

/* 
prompt es una funcion que solicita un dato al usuario
El dato retornado sera un string
*/

/* 
var edad = prompt('Decime tu edad')//'40'
//Transformamos edad a number
edad = Number(edad)
alert('Tu edad el año que viene sera ' + (edad + 1)) 
*/

//13 + '1'

/* 
Temas de hoy:
Variables
Condiciones
Comparadores
Operadores Logicos

*/


/* 
Variables
*/

/* 
Sirven para guardar datos en memoria
Todas las variables tienen un identificador
Tipos:
    VAR: No se usa hoy en dia
        Se puede reasignar
        Se puede redeclarar (No sirve para nada)
        Tiene Hoisting (se puede llamar antes de ser declarada)
        El valor inicial (en caso de no declarar) es undefined
    LET: ES6+ (Ecmascript) SE USA HOY EN DIA
        Se puede reasignar
        NO Se puede redeclarar
        NO Tiene hoisting
        El valor inicial (en caso de no declarar) es undefined
    CONST: ES6+ (Ecmascript) SE USA HOY EN DIA
        Deben tener el mismo valor de incio al fin del programa    

        NO Se puede reasignar
        NO Se puede redeclarar
        NO Tiene hoisting
        DEBE tener declarado el valor inicial
*/

//Sintaxis

/* 
const PORCENTAJE_IVA = 21
const PI = 3.14
const ADMIN_ROLE = 'administrator' 
*/

/* 
Scope
*/
//Bloque de codigo = fragmentos del programa

/* let nombre = 'pepe'
{
    let nombre = 'juan'
    console.log('hola ' + nombre)
}
console.log('Chau ' + nombre)
 */

/* 
let nombre = 'maria'
{
    let nombre = 'pedro'
    console.log(nombre) //pedro
    {
        nombre = 'messi'
        console.log(nombre) //messi
    }
    console.log(nombre) //messi

    {
        let nombre = 'juan'
        console.log(nombre) //juan
        {
            let nombre = 'julieta'
            console.log(nombre) //julieta
        }
        console.log(nombre) //juan
    }
    console.log(nombre) //messi
    {
        console.log(nombre) //messi
    }
    console.log(nombre) //messi
}
console.log(nombre) //maria
 */

/* let edad = 12
if(edad >= 18){
    console.log("Soy mayor de edad")
}
else{
    console.log("Soy menor de edad")
} */

/* let a = 1
let b = 2
let operacion = '*'

if(operacion != '+'){
    console.log("El usuario no selecciono la suma")
}

//== es el comparador de igualdad
if(operacion == '+'){
    console.log(a + b)
}
else if(operacion == '-'){
    console.log(a - b)
}
else if(operacion == '*'){
    console.log(a * b)
}
else{
    console.log('Operacion no valida')
}  */
   

/* 
Comparadores
Siempre devuelven boolean
== : Igual
=== : Estricta igualdad (Siempre recomiendo usar esto)
!= : Distinto
==! : Estricta diferencia (Siempre recomiendo usar esto)
> : Mayor 
< : Menor
>= : Mayor o igual
<= : Menor o igual
*/