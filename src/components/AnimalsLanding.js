import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class AnimalsLanding extends Component {
    render() {
        return (
            <div>
                <Link to="/animals/cats"><button>Cats!</button></Link>
                <Link to={`/store/jvmquxr`}><button>Show hat</button></Link>
                <Link to={`/store/27kqpvi`}><button>Show Shirt</button></Link>
            </div>
        )
    }
}