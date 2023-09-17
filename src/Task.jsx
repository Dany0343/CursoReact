import './Task.css'

export function TaskCard ({ready}) {
    // Forma de poner un conjunto de estilos en variables y luego esas variables ponerlas en el HTML ej: <h1 style={titleStyle}>Mi primer tarea</h1>
    // const cardStyles = {background: '#202020', color: '#fff', padding: '20px'};
    // const titleStyle = {fontWeight: "bolder"}

    // Otra forma de añadir estilos es utilizando clases de CSS

    return (
        <div className='card'>
            
            <h1>Mi primer tarea</h1>
            <span className={ready ? 'bg-green' : 'bg-red'}>
                {
                    ready === true ? 'Tarea realizada' : 'Tarea pendiente'
                }
            </span>
            
        </div>
    )
}