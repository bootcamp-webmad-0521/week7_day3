import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const activeText = { color: 'red' }

    return (

        <nav>
            <NavLink to="/" exact activeStyle={activeText}>Inicio</NavLink>
            <NavLink to="/experience" activeStyle={activeText}>Experiencia</NavLink>
            <NavLink to="/education" activeStyle={activeText}>Educación</NavLink>
            <NavLink to="/profile" activeStyle={activeText}>Mi perfil *</NavLink>
            <NavLink to="/vuelos/mad/bcn/17-ago-2021" activeStyle={activeText}>Route Params</NavLink>
            <NavLink to="/resultados-busqueda?prenda=short&color=rojo&talla=M" activeStyle={activeText}>Query Strings</NavLink>
        </nav>
    )
}

export default Navbar