import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/buttons.css";

const AuthBtn = () => {

    return (
        <div style={{
            float: 'right',
        }}>
            <label htmlFor="contained-button-file">
                <button type="button" className="btn auth-btn btn-lg">Auth</button>
            </label>
        </div>
    );
}

export default AuthBtn;