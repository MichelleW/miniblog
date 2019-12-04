import React, { Component } from 'react'

import './App.css'
import MiniBlog from './components/MiniBlog/MiniBlog';

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
