import React, {Component} from 'react';

export default class NewTask extends Component {
    constructor() {
        super();

        this.state={
            userInput:'',

        }
    }

    onInput(input) {
        this.setState({
            userInput:input
        })
    }

    whenClicking(value) {
        this.props.add(this.state.userInput)
        this.setState({
            userInput:''
        })
    }
    
    render() {
        return (
            <div>
                <input 
                    value={this.state.userInput}
                    placeholder={'Enter new task here'}
                    onChange={e=> this.onInput(e.target.value)}
                />
                <button onClick={() => this.whenClicking}
                >Add</button>
            </div> 
        )
    }
}