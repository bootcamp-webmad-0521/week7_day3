import { Component } from "react";

import './AddMovie.css'

class NewMovieForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            director: '',
            rating: '',
            hasOscar: false
        }
    }

    // handleTitleChange = e => this.setState({ title: e.target.value })
    // handleDirectorChange = e => this.setState({ director: e.target.value })
    // handleRatingChange = e => this.setState({ rating: e.target.value })
    // handleOscarChange = e => this.setState({ hasOscar: e.target.checked })

    handleInputChange = e => {

        const name = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        this.setState({
            [name]: value                   // computed property names
        })
    }


    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addMovie(this.state)

        this.setState({
            title: '',
            director: '',
            rating: '',
            hasOscar: false
        })
    }


    render() {
        return (

            <form className="new-movie-form" onSubmit={this.handleFormSubmit}>

                <label>
                    Título: <input type="text" value={this.state.title} onChange={this.handleInputChange} name="title" />
                </label>

                <label>
                    Director/a: <input type="text" value={this.state.director} onChange={this.handleInputChange} name="director" />
                </label>

                <label>
                    Puntuación: <input type="text" value={this.state.rating} onChange={this.handleInputChange} name="rating" />
                </label>

                <label>
                    ¿Ganó Oscar?: <input type="checkbox" checked={this.state.hasOscar} onChange={this.handleInputChange} name="hasOscar" />
                </label>

                <input type="submit" value="Crear película" />
            </form>
        )
    }
}


export default NewMovieForm