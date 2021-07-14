
const QueryString = props => {

    console.log('ESTE ES EL OBJETO DE PROPS DE RRD', props)

    const { search } = props.location
    const searchParams = new URLSearchParams(search)

    const clothe = searchParams.get('prenda')
    const color = searchParams.get('color')
    const size = searchParams.get('talla')

    return (
        <div>
            <h3>Obtener Query Strings desde un componente</h3>

            <hr></hr>

            <p>Debes enviar a la API una consulta para prenda {clothe}, de color {color} y talla {size}</p>

            <hr></hr>

            <p>Mira la consola, o React Dev Tools para obervar cómo es el objeto de props de RRD</p>

        </div>
    )
}

export default QueryString