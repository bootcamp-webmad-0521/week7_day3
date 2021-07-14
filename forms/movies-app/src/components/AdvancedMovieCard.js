import './MovieCard.css'

const AdvancedMovieCard = ({ title, director, hasOscar, rating, removeMovie }) => {

    return (
        <article className="movie-card">
            <h3>{title}</h3>
            <p>{director}</p>
            <hr />
            <small>Puntuación: {rating} | {hasOscar ? 'Tiene Oscar' : 'No tiene Oscar'}</small>
            <button onClick={removeMovie}>Ya la he visto</button>           {/* Lift up state */}
        </article>
    )
}

export default AdvancedMovieCard