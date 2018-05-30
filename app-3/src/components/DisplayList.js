import React, {Component} from 'react';

export default class DisplayList extends Component {
    constructor() {
        super();

        this.state = {
            groceryList: ['Bananas', 'Ice Cream', 'Whiskey', 'Salsa', 'Chocolate'],
            userInput: ''
        }
    }

    whenInputting(input) {
        this.setState( {userInput:input} )
    }
    
    render() {
        let itemsToDisplay = this.state.groceryList.filter(e => {
            return e.includes(this.state.userInput)
        }).map((e, index) => {
            return <h4 key={index}>{e}</h4>
        })
        return (
            <div>
                <input onChange={e=> this.whenInputting(e.target.value)}/>
                { itemsToDisplay }
            </div> 
        )
    }
}