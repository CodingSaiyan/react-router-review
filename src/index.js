import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route, Switch} from 'react-router-dom'
import ShoppingList from './components/ShoppingList'

import Animals from './components/Animals'
import Dogs from './components/Dogs'
import Cats from './components/Cats'
import Pandas from './components/Pandas'
import AnimalsLanding from './components/AnimalsLanding'
import Store from './components/Store'

ReactDOM.render(
<HashRouter>
    <App></App>
</HashRouter>
, document.getElementById('root'));
// registerServiceWorker();

// https://localhost:3000/students/1?key=value