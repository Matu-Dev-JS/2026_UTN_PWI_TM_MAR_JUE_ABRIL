//Objetos
//Arrays de objetos
//Metodos de Arrays 



//Objetos
//Es un dato que nos ayuda a describir entidades
//Ej: un usuario
/* let usuario_1 = {
    nombre: 'pepe',
    'mail': 'pepe@gmail.com',
    rol: 'user',
    id: 1
} */
//En mi programa un usuario es el objeto que contiene nombre, mail, rol y id
//nombre, mail, rol y id son las propiedades de mi usuario


//Los objetos son extensibles
//Podemos agregar nuevas propiedades
//usuario_1.esAdmin = true

//Los objetos son mutables
//Se pueden reasignar propiedades
//usuario_1.nombre = 'maria'


//la clave (key) siempre es un string, nosotros podemos en ciertos casos abreviar el string quitandole las comillas
/* let pais = {
    Abreviado cantidad_habitantes: '50 millones',
    Version original (con comillas)'Nombre Pais': 'Argentina',
    '+': 'suma',
    'D.N.I': '11222333'
}
 */
//MI Recomendacion es tratar de evitar declarar claves con comillas (ya que son confusas) usarlas cuando sea estrictamente necesario

//Si queremos llamar a una propiedad de un objeto HAY 2 FORMAS

//notacion de puntos

//console.log(usuario_1.nombre)
//console.log('EL mail de mi usuario es ' + usuario_1.mail)

//notacion de corchetes

/* console.log(usuario_1['nombre'])
console.log('EL mail de mi usuario es ' + usuario_1['mail'])
console.log(pais['Nombre Pais'])
 */


//Caso real de uso:
//Viene del servidor este objeto
/* let respuestaServidor = {
    'Nombre Completo': 'Pepe suarez',
    'D.N.I': '11222333',
    'Domicilio real': 'Av siempreviva'
}
 */
/* let respuestaServidorNormalizado = {
    nombreCompleto: respuestaServidor['Nombre Completo'],
    dni: respuestaServidor['D.N.I'],
    domicilio: respuestaServidor['Domicilio real']
}
 */
//No nos queda de otra mas que hacer esto:
//console.log(respuestaServidor['Nombre Completo'])

//los objetos pueden tener cualquier tipo de dato como valor de propiedad
/* let persona ={
    nombre: 'pepesito',
    nombresFavoritos: ['pepe', 'juan'],
    edad: 31,
    tieneTrabajo: false,
    mejorAmigo: {
        nombre: 'Sofia',
        edad: 35
    },
    premios: [
        {
            nombre: 'Mundialito del barrio en el 98',
            anio: 1998
        },
        {
            nombre: 'record municipal de tomar mates',
            anio: 2002
        }
    ],
    puestoTrabajo: null
} */


/* 
Si van a tener objetos en su programa traten de predefinir todas las propiedades existentes del objeto
Esto sirve para dejar asentado en programa las propiedades que puede tener una persona
*/


/* 
Declarar 3 ejemplos de:
    Item:
        nombre
        precio
        id: number
        descripcion
        nivel: number
    
    Personaje:
        nombre
        vida: number
        experiencia: number,
        id: number

    Pais: 
        nombre
        cantidad_habitantes
        superficie
        continente
*/

