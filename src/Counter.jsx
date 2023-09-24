import { useEffect, useState } from "react";

export function Counter() {
    
    const [mensaje, setMensaje ] = useState('')
    const [counter, setCounter] = useState(0)

    // Se manda a llamar cuando hay cambios en el componente que lo contiene
    useEffect(() => {
        console.log('Render')
    }, [counter])
    // Con un arreglo vacío solo se ejecuta el useEffect una vez, cuando se renderiza, si se le ponen datos entonces solo hace focus en ese


    return (
        <>
            {/* <h1>Counter: {counter}</h1>
            <button onClick={() => {
                setCounter( counter + 1 )
            }}>Sumar</button>
        
            <button onClick={() => {
                setCounter(counter - 1)
            }}>Restar</button>

            <button onClick={() => {
                setCounter(0)
            }}>Reiniciar</button> */}

            <div>
               <input onChange={e => setMensaje(e.target.value)}/>
               <button onClick={() => {alert('El mensaje es: ' + mensaje)}}>Save</button>

               <hr /> 
                <h1>Counter: {counter}</h1>
               <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
            </div>

        </>
        
    )    
}