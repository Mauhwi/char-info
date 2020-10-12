import React, {useEffect} from 'react';
import './App.css';
import CardHolder from './CardHolder';
import charData from './data/chars';
import CharPage from './CharPage/CharPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [chars, setChars] = React.useState(charData)

  return (
    <div className="App">
      <Router>
        <nav className="App-header">
          <h2>ESO Builds</h2>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/items" className="nav-link">Items</Link>
        </nav>

        <Switch>
          <Route exact path="/"><CardHolder chars={chars} /></Route>
          <Route path="/char/:id" component={CharPage}/>
        </Switch>

        <hr></hr>
        <footer><p>© 2020 Mauhwi </p></footer>

      </Router>

    </div>
  );
}

export default App;
