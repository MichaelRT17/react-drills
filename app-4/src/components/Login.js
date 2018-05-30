import React, {Component} from 'react';

export default class Login extends Component {
    constructor() {
        super();

        this.state= {
            username:'',
            password:''
        }
    }

    inputtingUsername(input) {
        this.setState({username:input})
    }

    inputtingPassword(input) {
        this.setState({password:input})
    }

    loggingIn() {
        let userdisplay = this.state.username
        alert(
            `Username: ${this.state.username} Password: ${this.state.password}`
        )
    }
    
    render() {
        return (
            <div>
                <input onChange={e => this.inputtingUsername(e.target.value)}/>
                <input onChange={e => this.inputtingPassword(e.target.value)}/>
                <button 
                onClick={() => this.loggingIn()}>
                Login</button>
            </div> 
        )
    }
}