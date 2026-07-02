import { useState } from "react"

/* 
plantear el hook: useCounter(defaultCounterValue)
La idea es que la funcionalidad de incremento y decremento del contador sea manejada en este hook useCounter asi de esta manera el Contador component queda mas limpio y solo se encarga de la renderizacion del contador.

El useCounter sera invocado desde Contador.jsx
*/
function Contador (){

    const [contador_estado_valor, setContadorEstado] = useState(0)

    function incrementar (){

        setContadorEstado(contador_estado_valor + 1)
        console.log("[Incrementar] Ahora contador es: " + contador_estado_valor)
    }

    function decrementar(){

        setContadorEstado(contador_estado_valor - 1)
        console.log("[Decrementar] Ahora contador es: " + contador_estado_valor)
    }

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