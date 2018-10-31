import React, {Component} from 'react'

export default class Dogs extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Charlie',
            fur: 'Luscious',
            bark: 'Loud'
        }
    }
    render() {
        return (
            <div>
                Name: {this.state.name}
                Fur: {this.state.fur}
                Bark: {this.state.bark}
            </div>
        )
    }
}