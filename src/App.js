import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Header from './Components/header'
import Counter  from './Components/counter'
import LetterCounter  from './Components/letterCounter' 
import ChangeBackground from './Components/changeBackground'

function App() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/change-background">
            <ChangeBackground />
          </Route>
          <Route path="/letter-counter">
            <LetterCounter />
          </Route>
          <Route path="/">
            <Counter />
          </Route>
        </Switch>
    </Router>
    )
}

export default App;
