import React, { Component } from 'react';
import "../layout/css/sign.css"
import "./SignSwitch"
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import {update} from "./SomeFunc";
import ReactDOM from "react-dom";

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)

    }
    state = {
        signUpElement: "tab active",
        signInElement: "tab",
        showSignUpElement: true,
    }
    handleClick(event) {
        if (event === "login") {
            this.setState({ showSignUpElement: false })
        } else {
            this.setState({ showSignUpElement: true })
        }
    }


    render() {
        return (
            <div class="form">
                <ul class="tab-group">
                    <li className={this.state.showSignUpElement ? "tab active" : "tab"}><a href="#signup"
                                                  onClick={() => this.handleClick("signup")}>Sign Up</a></li>
                    <li className={this.state.showSignUpElement ? "tab" : "tab active"}><a href="#login"
                                           onClick={() => this.handleClick("login")}>Log In</a></li>
                </ul>

                <div className="tab-content">
                    <SignInForm showSignUpElement={this.state.showSignUpElement}/>
                    <SignUpForm showSignUpElement={this.state.showSignUpElement}/>
                </div>

            </div>
        )
    }
}

export default LoginForm;