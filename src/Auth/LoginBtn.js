import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import RegisterBtn from "./RegisterBtn";

class LoginBtn extends Component {

    render() {
        return (
            <div className="header-authorization">
                <a href="/login">Login</a>
            </div>
        )
    }
}

export default LoginBtn;