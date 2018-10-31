import React, {Component} from 'react'
import ShoppingList from './ShoppingList'
import Animals from './Animals'
import {Link} from 'react-router-dom'

export default class Landing extends Component {
    render() {
        return (
          <div className="App">
            <Link to="/shopping"><button>Shopping</button></Link>
            <Link to="/animals"><button>Animals</button></Link>
          </div>
        );
      }
}