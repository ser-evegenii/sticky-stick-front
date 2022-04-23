import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import configData from "../config.json";
import isEmail from 'validator/lib/isEmail';

class AuthBtn extends React.Component{
    constructor(props){
        super(props);
    }

    state = {
        userEmail: "",
    }

    sendEmail(email) {
        if (!isEmail(email)) {
            this.props.showMessage('Invalid email')
            return
        }
        let data = JSON.stringify({
            "email": email,
        })
        // Send a POST request
        return axios({
            method: 'post',
            url: configData.USER_REGISTRATION,
            data: data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            this.props.showMessage("Email has been sended. And you can't blink an eye as you see answer")
            return (response.status)
        })
            .catch((error) => {
                this.props.showMessage("Oh, something go wrong, try to make it a little bit after")
                return 500
            })}

    render() {
        return (
                <div class="header-logo">
                    <button type="button" className="btn auth-btn btn-lg"
                            onClick={() => this.sendEmail(this.props.email)}>Auth</button>
                </div>
        );
    }
}

export default AuthBtn;