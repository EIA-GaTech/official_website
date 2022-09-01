import React from 'react';
import Home from './pages';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Donate from './pages/donate';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
