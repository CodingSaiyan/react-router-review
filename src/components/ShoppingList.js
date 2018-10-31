import React, {Component} from 'react'

export default class ShoppingList extends Component {
    constructor() {
        super()
        this.state = {
            list: ['Almond Milk', 'Pistachio nuts', 'Ice cream - delicious'],
            userInput: ''
        }
    }
    handleChange = (value, key) => {
        let obj = {};
        obj[key] = value;
        this.setState(obj)
    }

    addItem = () => {
        let listCopy = this.state.list.slice()
        listCopy.push(this.state.userInput)
        this.setState({
            list: listCopy,
            userInput: ''
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map( (element, index) => {
                        return (
                            <p key={index}>{element}</p>
                        )
                    })
                }
                <input 
                placeholder="List Item" 
                value={this.state.userInput} 
                onChange={(e) => this.handleChange(e.target.value, 'userInput')}
                ></input>
                <button onClick={this.addItem}>Add Item!</button>
            </div>
        )
    }
}