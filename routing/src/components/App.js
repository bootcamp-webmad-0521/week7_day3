import Experience from './Experience'
import Education from './Education'
import Home from './Home'
import Profile from './Profile'
import RouteParams from './RouteParams'
import QueryStrings from './QueryStrings'
import Navbar from './Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'

function App() {

  // API call to fetch the user
  const loggedUser = undefined
  // const loggedUser = { username: 'Popino el perro' }

  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/experience" render={() => <Experience />} />
        <Route path="/education" render={() => <Education />} />

        {/* Route Params & Query Strings */}
        <Route path="/vuelos/:from/:to/:date" render={props => <RouteParams {...props} />} />
        <Route path="/resultados-busqueda" render={props => <QueryStrings {...props} />} />

        {/* Ruta protegida */}
        <Route path="/profile" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />} />
      </Switch>
    </>
  )
}

export default App
