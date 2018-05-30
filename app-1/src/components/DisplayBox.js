import React, {Component} from 'react';

export default class DisplayBox extends Component {
    constructor() {
        super();

        this.state = {
            userInput:''
        }
    }

    whenTyping(input) {
        this.setState({userInput:input})
    }
    
    render() {
        return (
            <div>
                <input 
                    onChange={e=> this.whenTyping(e.target.value)}
                />
                <p>{this.state.userInput}</p>
            </div> 
        )
    }
}