
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import "./assets/scss/global.scss"
import EpisodePage from './pages/EpisodePage'
import CharecterPage from './pages/CharecterPage'
import {RickAndMortyEpisodes} from "./pages/RickAndMortyApp"
import logo from "./assets/imges/logo.png"

function App() {
  return (
    <Router>
    <div className="main-app">
      <header className="app-header">
        <section className="container">
          <div className='logo'>
          <img className="logo-img" src = {logo}/>
          <h4> The home of Rick&Motry fans</h4>
          </div>
        </section>
      </header>


      <main className="container">
        <Switch>
          <Route path ='/episode' component={EpisodePage}/>
          <Route path='/character' component={CharecterPage}/>
          <Route path= '/' component={RickAndMortyEpisodes}/>
        </Switch>
      </main>

      
      <footer className="app-footer">
        <section className="container">rick&morty 2023 &copy;</section>
      </footer>
    </div>
    </Router>
  )
}

export default App
