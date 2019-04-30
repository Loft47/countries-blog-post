import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import CountryDetail from './CountryDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/country/:name" exact component={CountryDetail} />
      </Router>
    </div>
  );
}

export default App;
