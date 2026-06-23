
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


/* const contenedor = document.getElementById('contenedor') */

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

/* const productos = [
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
} */

//RECOMENDACION:
/* 
La GRAN mayoria de paginas lentas son asi porque abusan de la re-escritura de innerHTML
Re-escribir innerHTML es una operacion PESADA, porque se re-escribe todo en document en memoria
*/

const tweets = [
    {
        id: 1,
        content: 'Cuidado con Cabo Verde!',
        author_name: 'Argento2.0',
        likes: 4500,
        retweets: 500,
        comments: [
            {
                author_name: 'Pepesito123',
                content: 'Uno que la vio es la cobra'
            },
            {
                author_name: 'Juan',
                content: 'Increible'
            }
        ],
        attachments: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/250px-Flag_of_Cape_Verde.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/250px-Flag_of_Cape_Verde.svg.png'
        ]
    },
    {
        id: 2,
        content: 'CUANDO SALE EL GTA 6 ??',
        author_name: 'Santamonica Studios',
        likes: 60500,
        retweets: 1800,
        comments: [
            {
                author_name: 'Pepesito123',
                content: 'Uno que la vio es la cobra'
            },
            {
                author_name: 'Juan',
                content: 'Increible'
            }
        ],
        attachments: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/250px-Flag_of_Cape_Verde.svg.png'
        ]
    },
    {
        id: 3,
        content: 'Tim Payne la rompe',
        author_name: 'La hinchada de la cerveza',
        likes: 2500,
        retweets: 200,
        comments: [],
        attachments: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/250px-Flag_of_Cape_Verde.svg.png'
        ]
    },
]

/* function renderFeed (tweets) {
    const feed = document.getElementById('contenedor-tweets')
    
    if (feed) {
        let resultado = ''
        for (const tweet of tweets) {
            
            let imagenes = ''
            for (const url of tweet.attachments) {
                imagenes = imagenes + `<img src="${url}" alt="attachment"/>`
            }
            resultado = resultado + `
            <h3>${tweet.author_name}</h3>
            <p>
                ${tweet.content}
            </p>
            ${imagenes}
            <div>
                <button>Likes ${tweet.likes}</button>
                <button>Retweets ${tweet.retweets}</button>
            </div>
            <hr/>
            `
        }
        feed.innerHTML = resultado
    }
}
renderFeed(tweets) */

function renderTweets(tweets){
    const contenedor = document.getElementById('contenedor')
    if (contenedor){
        let resultado = '' 
        for (const tweet of tweets){

            
            resultado = resultado +`
            <div> 
                <h3>${tweet.author_name}</h3>
                ${renderImag (tweet.attachments)}
                ${renderComments(tweet.comments)}
                <div>
                    <button>
                    Likes ${tweet.likes}
                    </button>
                    <button>
                    Retweets ${tweet.retweets}
                    </button>
                </div>
                <hr/>
            </div>`;
        }
        contenedor.innerHTML = resultado
    }
}

/* Que tipo de dato es url? es un array que contiene strings */
function renderImag(url_list) {
    if(!url_list || url_list.length === 0){
        return ''
    }
    let resultado = ''
    for(let url of url_list){
        resultado += `<img src="${url}">`
    }
    return `<div class="imag"> ${resultado} </div>`
}

function renderComments(arrayComments) {
    if(!arrayComments || arrayComments.length === 0){
        return '<p>No hay comentarios, se el primero</p>'
    }
    let comments = ''
    for (let comment of arrayComments) {
        comments +=
            `<div> 
                <h3> ${comment.author_name} </h3>
                <p>
                ${comment.content}
                </p>
            </div> `
    }
    return `<div class="comentarios">${comments}</div>`
}

renderTweets(tweets)
/*
Dado el array de tweets crear una funcion llamada renderFeed(tweets) y renderizara por cada tweet un:
    <div>
        <h3>{autor_name}</h3>
        <p>
            {content}
        </p>
        <div>
            <button>
                Likes {likes}
            </button>
            <button>
                Retweets {retweets}
            </button>
        </div>
        <hr/>
    </div>


*/
/*
Que tipo de dato es tweets?
    es un array de objetos donde cada objeto tiene las propiedades:
        {
            id: number,
            content: string,
            author_name: string,
            likes: number,
            retweets: number,
            comments: array,
            attachments: array
        }
*/
/* function renderFeed(tweets) {

} */

//paso 1: llamar al div donde vas a renderizar la lista
//paso 2: crear el html string donde se representaran cada uno de los tweets
//paso 3: renderizar ese string en la propiedad innerHTML de el div contenedor



/* function renderFeed(tweets) {
    const feed = document.getElementById('feed');
    if(feed){
        let string_html = ''
        for (const tweet of tweets) {
            string_html = string_html + `
                <div>
                    <h3>${tweet.author_name}</h3>
                    <p>${tweet.content}</p>
                    <div>
                        <button>Likes ${tweet.likes}</button>
                        <button>Retweets ${tweet.retweets}</button>
                    </div>
                    <hr>
                </div>
            `
        }
        feed.innerHTML = string_html
    }
}
renderFeed(tweets); */


/* function renderFeed(tweets) {
    const contenedor = document.getElementById('feed');
    if(contenedor){
        let resultado = ''
        for (let tweet of tweets) {
            resultado += `
                <div>
                    <h3>${tweet.author_name}</h3>
                    <p>
                        ${tweet.content}
                    </p>
                    <div>
                        <button>
                            Likes ${tweet.likes}
                        </button>
                        <button>
                            Retweets ${tweet.retweets}
                        </button>
                    </div>
                    <hr/>
                </div>
            `;
        }
        contenedor.innerHTML = resultado
    }
} */

/* const contenedor = document.getElementById('contenedor')

function renderFeed(tweets) {
    if (contenedor){
        let resultado = ''
        for (const tweet of tweets) {
            resultado = resultado + `
                <div>
                    <h3>${tweet.author_name}</h3>
                    <p>
                        ${tweet.content}
                    </p>
                    <div>
                        <button>
                            Likes ${tweet.likes}
                        </button>
                        <button>
                            Retweets ${tweet.retweets}
                    </button>
                    </div>
                    <hr/>
                </div>
            `
        }   
        contenedor.innerHTML = resultado
    }
    
}
renderFeed(tweets) */


/* 
Cada tweet ahora podra tener imagenes adjuntas y comentarios
Ej:
    {
        id: 1,
        content: 'Cuidado con Cabo Verde!',
        author_name: 'Argento2.0',
        likes: 4500,
        retweets: 500,
        comments: [
            {
                author_name: 'Pepesito123'
                content: 'Uno que la vio es la cobra'
            },
            {
                author_name: 'Juan'
                content: 'Increible'
            }
        ],
        attachments: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/250px-Flag_of_Cape_Verde.svg.png'
        ]
    },

Recomendacion:
    usen subfunciones por ejemplo renderAttachments que retornen un string asi pueden llamar en la funcion principal
    ejemplo

    function renderImages (images){
        let resultado = ''
        for(let image_url of images){
            resultado = `<img src='${image_url}'/>`
        }
        return resultado
    }
    function renderFeed(tweets){
        let resultado = ''
        for(const tweet of tweets){
            resultado += `
                <div>
                    <div class='img-container'>${renderImages(tweets.attachments)}</div>
                </div>
            ` 
        }
    }


    */