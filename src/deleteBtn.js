import React from 'react';
import "./styles/buttons.css";

import {AppContextConsumer} from "./AppContext";

class DeleteBtn extends React.Component {

    constructor(props){
        super(props);
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