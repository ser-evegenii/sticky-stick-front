const baseURL = "http://localhost:4000/swipe?direction=";
import React from 'react';
import axios from 'axios';
import "./buttons.css";

import {AppContextConsumer} from "./AppContext";

class DeleteBtn extends React.Component {

    constructor(props){
        super(props);
    }

    click() {
        this.props.swipe(this.props.direction)
    }

    render() {
        return  (
            <AppContextConsumer>
                { context => (
            <div className="deleteBtnBlock">
                <button className="deleteBtn"
                        onClick={context.deleteObject} > Delete
                </button>
            </div>
                    )}
            </AppContextConsumer>
        );
    }
}

export default DeleteBtn;