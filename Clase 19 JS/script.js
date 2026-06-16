
// DOM = Document Object Model
//Todo lo que pueden ver en una pagina web se representa dentro de un objeto llamado document

//Usamos dir para que la consola del navegador no aplique formatos por defecto
//console.dir(document)

/* 
let username = 'Pepe'
let membership = 'premium'
 */
//Buscamos un elemento por ID
/* const titulo_HTML = document.getElementById('titulo')

if(titulo_HTML){
    titulo_HTML.textContent = 'Bienvenido ' + username
    if(membership === 'premium'){
        titulo_HTML.style.color = 'gold'
        titulo_HTML.style.textDecoration = '1px solid underline'

        //titulo_HTML.classList.remove('free')
        //titulo_HTML.classList.add('premium')
    }

    
    //titulo_HTML.classList.toggle('light')


} */


const contenedor = document.getElementById('contenedor')

/* const producto = {
    titulo: 'Tv samsung 72"',
    descripcion: 'Ideal para ver el mundial',
    precio: 500000,
    id: 1
}

if(contenedor){
    contenedor.innerHTML = `
        <h2>${producto.titulo}</h2>
        <p>${producto.descripcion}</p>
        <span>Precio: $${producto.precio}</span>
        <br/>
        <button>Comprar</button>
    `
} */

const productos = [
    {
        titulo: 'Tv samsung 72"',
        descripcion: 'Ideal para ver el mundial',
        precio: 500000,
        id: 1
    },
    {
        titulo: 'Tv samsung 72"',
        descripcion: 'Ideal para ver el mundial',
        precio: 500000,
        id: 2
    },
    {
        titulo: 'Tv samsung 72"',
        descripcion: 'Ideal para ver el mundial',
        precio: 500000,
        id: 3
    },
    {
        titulo: 'Tv samsung 72"',
        descripcion: 'Ideal para ver el mundial',
        precio: 500000,
        id: 4
    },
    {
        titulo: 'Tv samsung 72"',
        descripcion: 'Ideal para ver el mundial',
        precio: 500000,
        id: 5
    },
    {
        titulo: 'Tv samsung 72"',
        descripcion: 'Ideal para ver el mundial',
        precio: 500000,
        id: 6
    },
]

if (contenedor) {
    let resultado = ''
    for (const producto of productos) {
        resultado = resultado + `
            <h2>${producto.titulo}</h2>
            <p>${producto.descripcion}</p>
            <span>Precio: $${producto.precio}</span>
            <br/>
            <button>Comprar</button>
        `
    }
    contenedor.innerHTML = resultado
}

//RECOMENDACION:
/* 
La GRAN mayoria de paginas lentas son asi porque abusan de la re-escritura de innerHTML
Re-escribir innerHTML es una operacion PESADA, porque se re-escribe todo en document en memoria
*/