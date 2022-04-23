import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import AuthBtn from "./AuthBtn";

class HeaderAuthorization extends Component {

    render() {
        return (
            <div className="header-authorization">
                <a href="#">Login</a>
            </div>
        )
    }
}

export default HeaderAuthorization;