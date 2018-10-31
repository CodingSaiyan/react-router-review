import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList'
import Animals from './components/Animals'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/shopping">Shopping</Link>
        <Link to="/animals">Animals</Link>
      </div>
    );
  }
}

export default App;
