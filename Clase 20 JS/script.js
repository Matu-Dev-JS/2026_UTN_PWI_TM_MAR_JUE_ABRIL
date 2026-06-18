/* 
    - Estados
    - Asincronia
    - Eventos
*/

/* 
    ESTADOS:
*/

const estado_tweets = [
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

function setEstadoTweets(nuevo_valor){
    estado_tweets = nuevo_valor
    renderTweets()
}

const tweets_HTML = document.getElementById('tweets')

function renderImages(url_list) {
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

function renderTweets(){
    
    if (tweets_HTML){
        let resultado = '' 
        for (const tweet of estado_tweets){

            
            resultado = resultado +`
            <div> 
                <h3>${tweet.author_name}</h3>
                ${renderImages(tweet.attachments)}
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
        tweets_HTML.innerHTML = resultado
    }
}

/* Que tipo de dato es url? es un array que contiene strings */




renderTweets()


















/* 
const habitacion_HTML = document.getElementById('habitacion')
const cocina_HTML = document.getElementById('cocina')

let estadoEstaLuzPrendida = true
function setEstadoEstaLuzPrendida (nuevo_valor){
    estadoEstaLuzPrendida = nuevo_valor
    renderLuzHabitacion()
    renderLuzCocina()
}


function renderLuzHabitacion(){
    if(estadoEstaLuzPrendida){
        habitacion_HTML.innerText = 'HABITACION: Luz prendida'
    }
    else{
        habitacion_HTML.innerText = 'HABITACION: Luz apagada'
    }
}

function renderLuzCocina(){
    if(estadoEstaLuzPrendida){
        cocina_HTML.innerText = 'COCINA: Luz prendida'
    }
    else{
        cocina_HTML.innerText = 'COCINA: Luz apagada'
    }
}

renderLuzHabitacion()
renderLuzCocina()


const menu_HTML = document.getElementById('menu')
let estadoMenuAbierto = true

function setEstadoMenuAbierto(nuevo_valor){
    estadoMenuAbierto = nuevo_valor
    renderMenu()
}


function renderMenu (){
    if(estadoMenuAbierto){
        menu_HTML.innerHTML = `
            <div>
                <button>Opcion 1</button>
                <button>Opcion 2</button>
                <button>Opcion 2</button>
            </div>
        `
    }
    else {
        menu_HTML.innerHTML = ''
    }
}

renderMenu()
 */
//-----------------------------------------------------------

//ESTO ESTA MAL, PORQUE LOS ESTADOS SON INMUTABLES
//estadoMenuAbierto = false
//Porque vas a tener que llamar a la funcion de render para que el estado se refleje en la aplicacion
//renderMenu()