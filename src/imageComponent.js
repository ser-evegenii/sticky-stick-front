import React, { Component } from 'react';
import ButtonComponent from "./swipeBtn";
import axios from "axios";
import "./buttons.css";
import ImgDetails from "./imgDetails";
import HeartIcon from "./heartIcon";

class ImageComponent extends Component {
    constructor(props){
        super(props);
        this.baseUrl = "http://localhost:4000/load?id="
    }

    state = {
        name: "",
    }
    componentDidMount() {
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
                <div className="centerScreen">
                <React.Fragment>
                    <ButtonComponent parentCallback = {this.handleCallback} directionSymbol = "&laquo;" direction = "previous"/>
                    <div>
                        <img className="swipeBtn" src={name} alt="image" />
                        <ImgDetails/>
                        <HeartIcon/>
                    </div>
                    <ButtonComponent parentCallback = {this.handleCallback} direction = "next" directionSymbol = "&raquo;"/>
                </React.Fragment>
                </div>
            </div>
        )
    }
}

export default ImageComponent;


/*
    render() {
        return (
            <div>
                <img src="http://localhost:4000/load?id=1" alt="display image" />
            </div>
        );
    }
 */