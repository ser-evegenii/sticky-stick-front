import React, { Component } from 'react';
import {AppContextConsumer} from "./AppContext";


class ImageBlockObject extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.swipe()
    }

    render() {
        return(
            <div>
                <div><img className={this.props.classname} src={this.props.displayObjURI} alt="image" /></div>
            </div>
        )
    }
}

export default ImageBlockObject;