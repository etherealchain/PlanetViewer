import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlanetViewer from './PlanetViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            <PlanetViewer/>
        </div>
      </div>
    );
  }
}

export default App;
