import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Piece from './piece'
import Board from './Board'


class App extends Component {
  render() {
    return (
      <div >
        <Board/>
      </div>
    )
  }
}

export default App;
