import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import "../styles/authPage.css";
import AuthBtn from "./AuthBtn";

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.showResultMessage = this.showResultMessage.bind(this)
        this.getEmail = this.getEmail.bind(this)
    }


    state = {
        userEmail: "",
        resultMessage: "",
    }

    getEmail(event) {
        this.setState({ userEmail: event.target.value })
    }

    showResultMessage(message) {
        this.setState({ resultMessage: message })
    }



    render() {
        return (
            <div className="LoginPage">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="text-center" style={{ width: "100%" }}>
                        Email
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.getEmail}/>
                    <Form.Text className="text-muted">
                        Enter your email and we will send invitation for you
                    </Form.Text>
                    <p className="text-center">
                        {this.state.resultMessage}
                    </p>
                </Form.Group>
            </Form>
                <AuthBtn email={this.state.userEmail} showMessage={this.showResultMessage}/>
            </div>
        )
    }
}

export default LoginForm;