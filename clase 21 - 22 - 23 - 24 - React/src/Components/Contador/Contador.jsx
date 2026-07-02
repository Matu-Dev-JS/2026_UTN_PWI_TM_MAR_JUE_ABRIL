import { useState } from "react"


function Contador (){
    //let contador = 0

    /* 
    Es una funcion que viene de react que te permite DECLARAR estados
    useState recibe el valor inicial del estado
    useState devuelve SIEMPRE un array de 2 valores
        El primer elemento es el valor de tu estado (Getter)
        El segundo elemento es una funcion para actualizar el valor de tu estado (Setter)
            Sirve para actualizar el valor de nuestro estado y re-renderizar el componente en consecuencia
    */
    const [contador_estado_valor, setContadorEstado] = useState(0)

    /* 
    const contador_estado_valor = contador_estado[0]
    const setContadorEstado = contador_estado[1]
    */

    function incrementar (){
        
        /* 
        El estado es INMUTABLE
        */
        setContadorEstado(contador_estado_valor + 1)
        console.log("[Incrementar] Ahora contador es: " + contador_estado_valor)
    }

    function decrementar(){

        setContadorEstado(contador_estado_valor - 1)
        console.log("[Decrementar] Ahora contador es: " + contador_estado_valor)
    }

    console.log('El componente Contador.jsx se renderizo')

    let condicion = false

    condicion 
    ? console.log("Se cumple la condicion")
    : console.log("No se cumple la condicion")

    

    return (
        <div>
            <button onClick={decrementar}>-</button>
            <span>{contador_estado_valor}</span>
            <button onClick={incrementar}>+</button>
            <br/>
            {
                contador_estado_valor > 10 
                && 
                <span style={{color: 'red'}}>[ERROR]: El numero maximo a incrementar es 10</span>
            }

            {
                contador_estado_valor < 0 
                ? <span style={{color: 'red'}}>[ERROR]: El numero minimo es 0</span>
                : <span style={{color: 'green'}}>El contador es valido</span>
            }

            
        </div>
    )
}


export default Contador


/* 
Un componente busca renderizarse la MENOR cantidad de veces posible
*/