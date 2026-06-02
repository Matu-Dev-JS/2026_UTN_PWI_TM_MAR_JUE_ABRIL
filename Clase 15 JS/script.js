/* 
JS es un lenguaje de programacion con TIPADO DINAMICO
JS es un lenguaje de programacion debilmente tipado
*/


//Que tipo de dato es la variable dato?
//string | null


/* 
let dato = prompt('ingrese un dato')
if(dato !== null){
    //Una vez pasado el if ESTOY SEGURO de que dato es de tipo string
    console.log(dato.length)
}
 */
//Tecnica con operadores logicos
//console.log(dato && dato.length)

//Abreviacion
//console.log(dato?.length)


/* let password = prompt('Ingrese su contraseña') //string | null */

//Si la password tiene menos de 6 caracteres volver a solicitar
/* while(password === null || password.length < 6){
    password = prompt('Ingrese su contraseña')
} */

//con .length podemos saber la longitud (cantidad de caracteres) de un string
//ej: 'hola'.length = 4
//while(password.length <= 6)
/* 
Bucle: 
Usamos bucles para repetir bloques de codigo.

Bucle WHILE: Bucle condicional, funciona por condicion y se usa cuando no sabemos cuantas veces se tiene que repetir algo.
Ejemplo: Solicito al usuario una contraseña valida mientras la contraseña que escriba no lo sea

let password = prompt('Ingrese su contraseña')

while(password.lenght <= 6)

Bucle FOR: Bucle por conteo, funciona por conteo y se usa cuando SABEMOS cuantas veces queremos repetir algo (Limite)
Ejemplos: 
    - Quiero mandar un mail a cada usuario de mi plataforma
    - Quiero calcular el promedio de 3 notas

*/

/* 
    Quiero mandar un mail a cada usuario de mi plataforma
    Cuantas veces/Por cuanto? cantidad usuarios de mi plataforma
    Que es lo que repetimos? enviar mail
*/

let cantidad_usuarios = 500

function enviarMail(){
    console.log("Mail enviado con exito")
}

//Logica de repeticion. Repito algo 500
for(
    let i = 1; 
    i <= cantidad_usuarios; //Limite
    i = i + 1 //Actualizacion
){
    console.log('Inicia el envio de mail para el usuario ' + i)
    enviarMail()
}


/*
Calcular el promedio de 3 notas.

1. Solicitar al usuario una nota y repetir este proceso 3 veces.
2. Asumir que los valores ingresados son correctos, por lo que no es necesario validarlos.
3. Acumular cada una de las notas ingresadas en una variable.
4. Una vez obtenidas las 3 notas, calcular el promedio dividiendo la suma total por la cantidad de notas (3).
5. Mostrar el resultado del promedio al usuario.

NO es necesario usar funciones

*/

/* let suma = 0
const cantidad_notas_promedio = 3
for(
    let i = 1;
    i <= cantidad_notas_promedio;
    i = i + 1 //Quiero que incremente de 1 en 1
){
    let nota = prompt('ingresar nota' ) //string
    while(nota === null || isNaN(nota) || Number(nota) < 0){
        nota = prompt('Error al ingresar, seleccione un numero postivo')
    }
    suma = suma + Number(nota)
}

let resultado_promedio = suma / cantidad_notas_promedio
console.log( 'promedio del usuario ' + resultado_promedio.toFixed(1) ) */

/* 
EXCEPCION DE COMPARAR NAN:
NaN == NaN = false
NaN === NaN = false

Para saber si un dato es NaN debemos usar isNaN, esta funcion nos indica si un dato es o no un NaN NO USAR === NaN o == NaN porque NAN ES INCOMPARABLE
*/



//FUNCIONES: 
/* 
Poder guardar acciones en memoria
*/

/* 
La funcion calcularIva recibe un precio, saca su 21% a lo que llamamos iva y lo muestra por consola
*/
function calcularIva (precio){
    const valor_iva = precio * 0.21 //21%
    console.log("El valor del iva es $" + valor_iva)
}

calcularIva(100)
calcularIva(200)
calcularIva(1000)


//Crear una funcion llamada sumar que recibira 2 parametros (a y b o numero_1 y numero_2) y mostrara por consola 'el resultado de la suma entre {a} y {b} es {resultado}'
//Si yo invoco sumar(30, 60) me dira por consola 'el resultado de la suma entre 30 y 60 es 90'

function sumar(a, b){
    a = Number(a)
    b = Number(b)
    let resultado = a + b 
    console.log('el resultado de la suma entre ' + a + ' y ' +  b + ' es ' + resultado)
}

sumar(30, 20)


