import { Component } from "react"
import { advancedMoviesFromApi as movies } from "../fakeApi"
import NewMovieForm from "./AddMovie"
import AdvancedMovieCard from "./AdvancedMovieCard"


class DynamicMoviesList extends Component {

    constructor() {
        super()
        this.state = { movies }
    }

    removeMovie = movieId => {
        this.setState({
            movies: this.state.movies.filter(elm => elm._id !== movieId)
        })
    }

    addMovieToList = newMovie => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.push(newMovie)
        this.setState({ movies: moviesCopy })
    }

    render() {

        return (

            <>
                <h2>Listado de películas (dinámico)</h2>

                {
                    this.state.movies.map(elm => <AdvancedMovieCard key={elm._id} {...elm} removeMovie={() => this.removeMovie(elm._id)} />)
                }

                <h2>Crear nueva película</h2>

                <NewMovieForm addMovie={this.addMovieToList} />
            </>
        )
    }
}

export default DynamicMoviesList