import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
