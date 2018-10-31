import React, {Component} from 'react'
import axios from 'axios'

export default class Store extends Component {
    constructor() {
        super()
        this.state = {
            product: {}
        }
    }
    componentDidMount() {
        const {id} = this.props.match.params
        axios.get(`https://practiceapi.devmountain.com/products/${id}`).then(response => {
            this.setState({
                product: response.data
            })
        })
    }
    render() {
        return (
            <div>
                Title: {this.state.product.title}
                Category: {this.state.product.category}
            </div>
        )
    }
}