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