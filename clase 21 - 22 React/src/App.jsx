import React from 'react'

import { ProductCard } from './Components/ProductCard/ProductCard'

import Titulo from './Components/Titulo/Titulo'
import { Tweet } from './Components/Tweet/Tweet'

//Las funciones que devuelven HTML se llaman componentes
function App() {
  return (
    <div>
      <Titulo content='Hola a todos!'/>
      <Titulo content='Que tal??'/>
      <button>Hola</button>

      <Tweet author_name={'Pepe'} content={"hola"} likes={40} retweets={50}/>

      <ProductCard 
        title='tv samsung 50"' 
        description='lorem, bla bla bla...' 
        price={400}
        categories={['Tecnologia', 'mundial']}
      />
      <ProductCard 
        title='tv noblex 50"' 
        description='lorem, bla bla bla...' 
        price={300}
        categories={['Hogar', 'mundial']}
      />
      <ProductCard 
        title='tv LG 50"' 
        description='lorem, bla bla bla...'
        price={350}
        categories={['Tech', 'mundial']}
      />
    </div>
  )
}



export default App