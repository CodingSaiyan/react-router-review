import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Cats from './Cats'
import Pandas from './Pandas'
import AnimalsLanding from './AnimalsLanding'

export default class Animals extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Switch>
                <Route path="/animals/cats" component={Cats} />
                <Route path="/animals/pandas" component={Pandas} />
                <Route component={AnimalsLanding} />
            </Switch>
        )
    }
}