import { Link } from 'react-router-dom'

const home = () => {
    return (
        <div>
            <h3>Welcome to my portfolio page! My name is</h3>
            <h1>Ana</h1>
            <p>and I'm Web Developer, <Link to="/experience">check my experience!</Link>!</p>
        </div>
    )
}

export default home