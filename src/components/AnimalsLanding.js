import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class AnimalsLanding extends Component {
    constructor() {
        super()
        this.state ={
            selected: ''
        }
    }
    setSelected = (val) => {
        this.setState({
            selected: val
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setSelected('jvmquxr')}>jvmquxr</button>
                <button onClick={() => this.setSelected('27kqpvi')}>27kqpvi</button>
                <Link to="/animals/cats">Cats!</Link>
                <Link to={`/store/${this.state.selected}`}>products!</Link>
            </div>
        )
    }
}