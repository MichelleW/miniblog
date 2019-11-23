import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MiniBlog from './components/MiniBlog';

class App extends Component {

  render() {
    return (
      <div className="app">
        <MiniBlog />
      </div>
    )
  }
}

export default App
