import React, { Component } from 'react';
import ImageApi from './components/services/ImageApi';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <ImageApi/>
      </div>
    )
  }
}

export default App;
