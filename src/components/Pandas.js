import React, {Component} from 'react'

export default class Pandas extends Component {
    constructor() {
        super()
        this.state = {
            adorable: 'True',
            likesBamboo: 'True',
            snuggly: 'False'
        }
    }
    render() {
        return (
            <div>
                Adorable: {this.state.adorable}
                Likes Bamboo: {this.state.likesBamboo}
                Snuggly: {this.state.snuggly}
            </div>
        )
    }
}