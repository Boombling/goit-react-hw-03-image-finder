import React, { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css'

class App extends Component {
  state = {
    showModal: false,
  }


  render() {
    return (
      <div>
        <ImageGallery/>
      </div>
    )
  }
}

export default App;
