import axios from 'axios';
import React, { Component } from 'react';
import './styles/App.css';
import configData from "./config.json"

class UploadImgForm extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
            name: "",
            responseCode: false,
            responseMessage: "none",
            responseClass: ""
        };
        this.showResponse = this.showResponse.bind(this);
    }

    onImageChange = event => {

        this.setState({
            images: event.target.files,
        });
    };

    showResponse = (status) => {
        this.setState({ responseCode: status })
    }

    onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', e.target.name.value);
        formData.append('email', e.target.email.value);
        formData.append('login', e.target.login.value);
        formData.append('source_uri', e.target.sourceUri.value);
        formData.append('source_owner', e.target.sourceOwner.value);
        formData.append('extension', e.target.extension.value);
        this.setState({ responseClass: "emptyUploadResponse"} )
        await axios
            .post(configData.SAVE_URI, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then(res => {
                this.setState({ responseCode: true} )
                this.setState({ responseMessage: "success"} )
                this.setState({ responseClass: "successUploadResponse"} )
            })
            .catch(err => {
                this.setState({ responseCode: false} )
                this.setState({ responseMessage: "error"} )
                this.setState({ responseClass: "errorUploadResponse"} )
            });
    };

    render() {
        return (
            <div className="uploadFormDiv">
                <form onSubmit={this.onSubmit} className="uploadForm">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name"/>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email"/>
                    <label htmlFor="login">Login: </label>
                    <input type="text" name="login"/>
                    <label htmlFor="sourceUri">Source uri: </label>
                    <input type="text" name="sourceUri"/>
                    <label htmlFor="sourceOwner">Source owner: </label>
                    <input type="text" name="sourceOwner"/>
                    <label htmlFor="extension">Extension: </label>
                    <input type="text" name="extension"/>
                    <br />
                    <button type="submit">Send</button>
                </form>

                <div className={this.state.responseClass} id="uploadResponseMessage">
                    <p>{this.state.responseMessage}</p>
                </div>
            </div>
        );
    }
}

export default UploadImgForm;