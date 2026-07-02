import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
/* import { multiplicar, restar, sumar } from './math.js' */
//import PI, {restar, multiplicar} from './math.js'
//import * as Math from './math.js'



/* LLama al div y renderiza el app dentro de el */
createRoot(
  document.getElementById('root')
).render(
  <App />
)
