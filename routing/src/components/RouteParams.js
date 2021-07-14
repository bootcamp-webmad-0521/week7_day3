import { Link } from 'react-router-dom'

const RouteParams = props => {

    console.log('ESTE ES EL OBJETO DE PROPS DE RRD', props)

    const { date, from, to } = props.match.params

    return (
        <div>
            <h3>Obtener Route Params desde un componente</h3>

            <hr></hr>

            <p>Debes enviar a la API una consulta para los vuelos de {from} a {to} en la fecha {date}</p>

            <hr></hr>

            <p>Mira la consola, o React Dev Tools para obervar cómo es el objeto de props de RRD</p>

            <Link to="/">Volver a inicio</Link>

        </div>
    )
}

export default RouteParams