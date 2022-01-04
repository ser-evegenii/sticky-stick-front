import React, { Component } from 'react';
import ButtonComponent from "./swipeBtn";
import "./styles/buttons.css";
import ImgDetails from "./imgDetails";
import Rating from "./rating";
import ShowTimeBlockObject from "./ShowTimeBlockObject";
import ExtensionUpdater from "./extensionUpdater";
import LogoIcon from "./logo";

import {AppContextConsumer} from "./AppContext";

class CenterScreenBlock extends Component {
    constructor(props){
        super(props);
        this.showSlider = this.showSlider.bind(this)
    }

    state = {
        displayObjURI: "",
        currentId: "",
        sliderIsActive: false
    }

    showSlider(isActive) {
        this.setState({ sliderIsActive: isActive })
    }

    render() {
        return(
            <AppContextConsumer>
                { context => (
            <div className="someTest">
                <LogoIcon/>
                <ExtensionUpdater />
                <div className="centerScreen">
                <React.Fragment>
                    <ButtonComponent swipe = {context.swipeRequest} directionSymbol = "&laquo;" direction = "previous"
                                     showSlider = {this.showSlider}/>
                    <div>
                        <ShowTimeBlockObject classname="showTimeObject" displayObjURI = {context.displayObjURI} swipe = {context.swipeRequest}
                                             sliderIsActive = {this.state.sliderIsActive}
                                             showSlider = {this.showSlider}
                                            extension = {context.extension}/>
                        <ImgDetails login={context.currentLogin} sourceURI={context.sourceURI} sourceUser={context.sourceUser}/>
                        <Rating updateRating = {context.updateRating} currentId = {context.currentId} likes = {context.likes} dislikes = {context.dislikes}/>
                    </div>
                    <ButtonComponent swipe = {context.swipeRequest} direction = "next" directionSymbol = "&raquo;"
                                     showSlider = {this.showSlider}/>
                </React.Fragment>
                </div>
            </div>
                    )}
            </AppContextConsumer>
        )
    }
}

export default CenterScreenBlock;