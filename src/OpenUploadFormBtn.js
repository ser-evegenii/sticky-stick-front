import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';

const OpenUploadFormBtn = () => {

    return (
        <div style={{
            float: 'right',
        }}>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Auth
                </Button>
            </label>
        </div>
    );
}

export default OpenUploadFormBtn;