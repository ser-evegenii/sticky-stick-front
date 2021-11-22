import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class UploadImgForm extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
            name: ""
        };
    }

    onImageChange = event => {

        this.setState({
            images: event.target.files,
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image_file', this.state.images);
        formData.append('email', e.target.email.value);
        formData.append('login', e.target.login.value);
        axios
            .post(`http://localhost:4000/upload`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then(res => {
                console.log(res.data);
                console.log(res.status);
            })
            .catch(err => {
                console.log("error")
                console.log(err);
            });
    };

    render() {
        return (
            <div className="uploadFormDiv">
                <form onSubmit={this.onSubmit} className="uploadForm">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email"/>
                    <label htmlFor="email">Login: </label>
                    <input type="text" name="login"/>
                    <label htmlFor="image_file">Choose img: </label>
                    <input type="file" name="image_file" onChange={this.onImageChange} alt="image" multiple/>
                    <br />
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}

export default UploadImgForm;