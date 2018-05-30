import React, {Component} from 'react';

export default class DisplayList extends Component {
    constructor() {
        super();

        this.state = {
            groceryList: ['Bananas', 'Ice Cream', 'Whiskey', 'Salsa', 'Chocolate']
        }
    }

    showList() {
        let displayList = this.state.groceryList.map((e, index)=> {
            
            return <h4 key={index}>{e}</h4>
        })
        return displayList
    }
    
    render() {
        return (
            <div>
                {this.showList()}
            </div> 
        )
    }
}