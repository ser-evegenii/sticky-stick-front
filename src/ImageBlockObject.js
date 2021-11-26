import React, { Component } from 'react';
import axios from "axios";

class ImageBlockObject extends Component {
    constructor(props){
        super(props);
        this.baseUrl = "http://localhost:4000/load?id="
        this.swipe = this.swipe.bind(this);
    }

    state = {
        name: "",
    }

    swipe() {
        axios.get("http://localhost:4000/swipe?direction=", )
            .then((response) => {
                this.setState({name: this.baseUrl + response.data})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleCallback = (childData) =>{
        this.setState({name: this.baseUrl + childData})
    }


    render() {
        const {name} = this.state;
        return(
            <div>
                <div><img className="swipeBtn" src={name} alt="image" /></div>
            </div>
        )
    }
}

export default CentrScreenBlock;