import React, {Component, useState} from 'react';

class FormSwitcher extends Component {
    constructor(props){
        super(props);
        this.switchForm = this.switchForm.bind(this);
    }

    state = {
        signUp: "tab active",
        signIn: "tab",
    }
    setActive(e) {
        e.preventDefault()
        if (this.state.signUp === "tab active") {
            this.setState({ signUp: "tab" })
            this.setState({ signIn: "tab active" })
        } else {
            this.setState({ signUp: "tab active" })
            this.setState({ signIn: "tab" })
        }

    }

    render() {
        return (
            <ul className="tab-group">
                <li className={this.state.signUp}><a href="#signup" onClick={handleClick}>Sign Up</a></li>
                <li className={this.state.signIn}><a href="#login" onClick={handleClick}>Log In</a></li>
            </ul>
        )
    }
}

export default FormSwitcher;