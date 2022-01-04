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
        sourceURI: ""
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
                <div  className="login"><p>Added by:</p><a href="http://google.com"> {this.props.login}</a></div>
                </div>
                <div className="objSource"><a href={this.props.sourceUser}>@source</a></div>
            </div>
                    )}
            </AppContextConsumer>
        );
    }
}

export default ImgDetails;