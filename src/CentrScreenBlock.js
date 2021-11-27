import React, { Component } from 'react';
import ButtonComponent from "./swipeBtn";
import axios from "axios";
import "./buttons.css";
import ImgDetails from "./imgDetails";
import HeartIcon from "./heartIcon";
import ImageBlockObject from "./ImageBlockObject";

import {AppContextConsumer} from "./AppContext";

const loadObjUrl = "http://localhost:4000/load?id="
const swipeUrl = "http://localhost:4000/swipe?direction="

class CentrScreenBlock extends Component {
    constructor(props){
        super(props);
        this.swipe = this.swipe.bind(this);
    }

    state = {
        displayObjURI: "",
        currentId: "",
    }

    swipe(direction) {
        axios.get(swipeUrl+direction, )
            .then((response) => {
                this.state.currentId = response.data
                this.setState({displayObjURI: loadObjUrl + response.data})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return(
            <AppContextConsumer>
                { context => (
            <div>
                <div className="centerScreen">
                <React.Fragment>
                    <ButtonComponent swipe = {context.swipeRequest} directionSymbol = "&laquo;" direction = "previous"/>
                    <div>
                        <ImageBlockObject classname="swipeBtn" displayObjURI = {context.displayObjURI} swipe = {context.swipeRequest} />
                        <ImgDetails/>
                        <HeartIcon/>
                    </div>
                    <ButtonComponent swipe = {context.swipeRequest} direction = "next" directionSymbol = "&raquo;"/>
                </React.Fragment>
                </div>
            </div>
                    )}
            </AppContextConsumer>
        )
    }
}

export default CentrScreenBlock;


/*
    <div><img className="swipeBtn" src={name} alt="image" /></div>

    render() {
        return (
            <div>
                <img src="http://localhost:4000/load?id=1" alt="display image" />
            </div>
        );
    }
 */