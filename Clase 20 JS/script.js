/* 
    - Estados
    - Asincronia
    - Eventos
*/

/* 
    ESTADOS:
*/

let estado_tweets = [
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
                <p>${tweet.content}</p>
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

function findTweetById (tweet_id){
    for(let tweet of estado_tweets){
        if(tweet.id === Number(tweet_id)){
            return tweet
        }
    }
}
/* function deleteTweetById (tweet_id){
    const tweet_found = findTweetById(tweet_id)

    //Sino esta devuelvo false indicando que no elimine nada
    if(!tweet_found){
        return false
    }

    const tweet_index = estado_tweets.indexOf(tweet_found)

    console.log('EL indice del tweet a elminar es: ' + tweet_index )

    //Creo un clon para saltear la regla de inmutabilidad de los estados
    const clone_estado_tweets = [...estado_tweets]

    //Elimina desde el indice de el tweet buscado 1 elemento
    clone_estado_tweets.splice(tweet_index, 1)

    console.log('Estado clonado', clone_estado_tweets) //Aca deben ser 2
    console.log('Estado original', estado_tweets) //Aca deben ser 3
    setEstadoTweets(clone_estado_tweets)

}
 */

/* function deleteTweetById (tweet_id){
    const nueva_lista_tweets = []

    for(const tweet of estado_tweets){

        //Dejo pasar a todos los que cumplen con la condicion
        if(tweet.id !== tweet_id){
            nueva_lista_tweets.push(tweet)
        }
    }

    setEstadoTweets(nueva_lista_tweets)
} */

/* 
Crear la funcion agregarTweet que recibira un id, author_name, content y deberan crear un nuevo tweet y agregarlo al estado

A tener en cuenta:
    - El estado es inmutable
    - .push() es un metodo mutable
    - Cuando creen el tweet muchos valores estaran vacion, ejemplo attachments o comments valdran en [] y likes y retweets seran 0
    - Por ahora la funcion no contempla que puedas crear un tweet con attachments
*/


/* function agregarTweet(id, author_name, content) {
    if(!id || !author_name || !content) {
        return;
    }
    const tweet = {
        id: id,
        content: content,
        author_name: author_name,
        likes: 0,
        retweets: 0,
        comments: [],
        attachments: []
    }
    let clone_tweets = [...estado_tweets, tweet]    
    //clone_tweets.push(tweet)
    setEstadoTweets(clone_tweets)
}

 */
renderTweets()


/* 
agregarComentario(tweet_id, author_name, comment)
    Agregar un comentario a un tweet si el tweet existe

modifcarContenidoTweet(tweet_id, nuevo_contenido)
    Modificar el content de un tweet si existe

agregarLike(tweet_id) 
    incrementar en 1 la cantidad de likes de ese tweet si existe
    el boton de 'like' debe decir ahora likeado

retweetear(tweet_id) 
    incrementar en 1 la cantidad de retweets de ese tweet si existe
    el boton de 'retweet' debe decir ahora retweeteado

dislikeTweet(tweet_id)
    decrementar en 1 la cantidad de likes de ese tweet si existe
    

quitarRetweet(tweet_id) 
    decrementar en 1 la cantidad de retweets de ese tweet si existe
*/




















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