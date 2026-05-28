/* 
Operadores logicos
Bucles
Funciones
*/

/* 
Operadores logicos 

    ! (NOT) No logico: Devuelve el valor booleano opuesto al valor negado
        !true = false
        !false = true
        !1 = false
        !' ' = false
    Para que sirve?
        Hay condiciones que se expresan como el opuesto a otras EJ:
        let energia = 20  //un valor del 0 al 100
        let tengoSueño = energia <= 30
        let estoyDescansado = !tengoSueño 

    Son selectores, necesitan de 2 datos y sirven para seleccionar uno entre esos 2 datos
    || (OR) O logico:
        Si el primer valor es verdadero selecciona el primero
        Si no selecciona el segundo

        5 || null = 5
        0 || '' = ''
    Para que sirve?
        Para hacer condiciones compuestas, tipo let puedoPasar = estaLogueado || esAdmin
        Para hacer selecciones entre valores posiblemente nulos
            const PORT = process.env.PORT || secondaryProcess.env.PORT || 3000

            let username = prompt('dame tu nombre')
            username = username || 'anonymus'
            console.log(username)

    Tablas de la verdad:
        true || true = true
        true || false = true
        false || true = true
        false || false = false

    && (AND) Y logico:
        Si el primer valor es verdadero selecciona el segundo
        Sino selecciona el primero

        6 && 10 = 10
        0 && true = 0
        !0 && !true = !true = false
    Para que sirve?
        Para hacer condiciones compuestas, tipo let puedoPasar = estaLogueado && esAdmin
        Para hacer condiciones abreviadas
            esAdmin && alert(Bienvenido administrador!)
*/

/* let edad = 40 */

//entre 32 y 60
//let edad_valida = edad >= 32 && edad <= 60

//Si tiene menos de 32 o mas de 60
//let edad_valida = edad < 32 || edad > 60
/* let edad_no_valida = edad >= 32 && edad <= 60
let edad_valida = !edad_no_valida */


//El and tiene precedencia sobre el or, es decir que esta condicion debe leerse como si es de dia y es jueves O es admin
//let valido = esAdmin || esDeDia && esJueves

//Si queres romper la precedencia debes usar ()
//let valido = (esAdmin || esDeDia) && esJueves

/* 

1. Solicitar 2 titulos, si ambos valores fueron ingresados decir por alert 'Titulos ingresados'

2. Dado una variable booleana llamada usuarioBloqueado decir por consola 'usuario sin ninguna restriccion' si el usuario NO esta bloqueado

3. Dadas las variables:
    emailCorrecto
    passwordCorrecto
    cuentaBloqueada
    Hacer la logica de inicio de sesion:
        Si el email y la password son correctas y la cuenta no esta bloqueada decir consola 'inicio de sesion exitoso' y sino se cumple decir 'No se pudo inciar sesion'

Aclaracion:
    prompt() puede devolver:
        - Si el usuario da al boton aceptar se retorna un string
        - Si el usuario da al boton cancelar se retorna un null


*/


//1

/* let titulo1 = prompt("Hola mundo");
let titulo2 = prompt("Adios mundo cruel");

//ambas formas son validas
if ((titulo1 !== '' && titulo1 !== null ) && titulo2) {
    alert("Títulos ingresados");
} */

//2
/* 
let usuarioBloqueado = true; 

if (!usuarioBloqueado) {
    console.log('usuario sin ninguna restriccion');
}
 */

//3

/* 
let emailCorrecto = true
let contraseniaCorrecta = true
let cuentaBloqueada = true

if( (emailCorrecto && contraseniaCorrecta) && !cuentaBloqueada ){
    console.log("inicio de sesion exsitoso")
}
else{
    console.log("no se pudo iniciar sesion")
} */


//BUCLES:
//SIRVEN para repetir codigo, para ejecutar el mismo codigo multiples veces
//Hay 2 tipos de bucles:
//Por condicion: Repeti algo mientras una condicion se cumpla
//WHILE
//Ojo con no dar la posibilidad al while de false
/* 
let nombre = prompt("Dame tu nombre (No podes usar el nombre prohebido)")

while(nombre === 'voldermort'){
    alert('Error: Usaste el nombre prohebido')
    nombre = prompt("Dame tu nombre (No podes usar el nombre prohebido)")
}
 */

//Por repeticion/limite: Sirven para cuando sabemos o tenemos la forma de saber cuantas veces quiero repetir algo 
//FOR

//Solicito al usuario 3 numeros y los sumo entre si

let sumatoria = 0
for(
    let iterator = 1; //Iniciamos en la primera vuelta de 3
    iterator <= 3; //Limite: Es la condicion que determina si tu bucle sigue o se termina
    iterator = iterator + 1
){
    let numero = prompt('Ingresa un numero')
    numero = Number(numero)
    sumatoria = sumatoria + numero
}
console.log("La sumatoria es de: " + sumatoria)