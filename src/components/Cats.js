import React, {Component} from 'react'

export default class Cats extends Component {
    constructor() {
        super()
        this.state = {
            cute: 'True',
            fluffy: 'yes',
            scratchesOwner: 'True'
        }
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                Cute: {this.state.cute}
                Fluffy: {this.state.fluffy}
                Scratches Owner: {this.state.scratchesOwner}
            </div>
        )
    }
}