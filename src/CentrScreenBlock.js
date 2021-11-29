import React, { Component } from 'react';
import ButtonComponent from "./swipeBtn";
import axios from "axios";
import "./buttons.css";
import ImgDetails from "./imgDetails";
import HeartIcon from "./heartIcon";
import ImageBlockObject from "./ImageBlockObject";

import {AppContextConsumer} from "./AppContext";

class CentrScreenBlock extends Component {
    constructor(props){
        super(props);
    }

    state = {
        displayObjURI: "",
        currentId: "",
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
                        <ImgDetails login={context.currentLogin}/>
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