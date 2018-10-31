import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Animals extends Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {/* Put header divs here */}
                {this.props.children}
            </div>
        )
    }
}