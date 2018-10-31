import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList'
import Animals from './components/Animals'
import {Link} from 'react-router-dom'
import Landing from './components/Landing'
import {Switch, Route} from 'react-router-dom'
import Store from './components/Store'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/shopping" component={ShoppingList} />
        <Route path="/animals" render={(props) => {
            return (
                <Animals {...props}></Animals>
            )
        }} />
        <Route path="/store/:id" component={Store} />
      </Switch>
    );
  }
}

export default App;
