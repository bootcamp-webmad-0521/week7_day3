import { Link } from 'react-router-dom'

const Profile = ({ loggedUser }) => {
    return (
        <div>
            <h1>Bienvenid@ a tu perfil, {loggedUser?.username}</h1>
            <Link to="/">Volver</Link>
        </div>
    )
}

export default Profile