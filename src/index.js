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
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/shopping" component={ShoppingList} />
        <Route path="/animals" render={(props) => {
            // console.log(props)
            return (
                <Animals {...props}>
                    <Switch>
                        <Route path="/animals/cats" component={Cats} />
                        <Route path="/animals/pandas" component={Pandas} />
                        <Route component={AnimalsLanding} />
                    </Switch>
                </Animals>
            )
        }} />
        <Route path="/store/:id" component={Store} />
    </Switch>
</HashRouter>
, document.getElementById('root'));
// registerServiceWorker();

// https://localhost:3000/students/1?key=value