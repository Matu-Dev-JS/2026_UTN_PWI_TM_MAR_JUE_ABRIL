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