import React from 'react';
import "./styles/App.css"
import {AppContextConsumer} from "./AppContext";

class ImgDetails extends React.Component {

    constructor(props){
        super(props);
    }
    state = {
        tags: "#stickystick",
        login: "",
        sourceUser: "",
        Name: ""
    }

    render() {
        return  (
            <AppContextConsumer>
                { context => (
            <div className="details">
                <div className="imgDetails">
                <div className="tags">
                    <p>
                    {this.state.tags.length > 18 ?
                        `${this.state.tags.substring(0, 12)}...` : this.state.tags
                    }
                    </p>
                </div>
                <div  className="fileName"><p>{this.props.name}</p></div>
                </div>
                <div className="objSource"><a href={this.props.sourceUser}>{this.props.sourceUser}</a></div>
            </div>
                    )}
            </AppContextConsumer>
        );
    }
}

export default ImgDetails;