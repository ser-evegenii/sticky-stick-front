import React, { Component } from 'react';
import ButtonComponent from "./swipe/swipeBtn";
import ImgDetails from "./imgDetails";
import Rating from "./rating";
import ShowTimeBlockObject from "./ShowTimeBlockObject";
import NavigationMenu from "./swipe/navigationMenu";
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
                <div className="centerScreen">
                <React.Fragment>
                    <div>
                        <ShowTimeBlockObject classname="showTimeObject" displayObjURI = {context.displayObjURI} swipe = {context.swipeRequest}
                                             sliderIsActive = {this.state.sliderIsActive}
                                             showSlider = {this.showSlider}
                                            extension = {context.extension}/>
                        <ImgDetails login={context.currentLogin} name={context.name} sourceUser={context.sourceUser}/>
                        <Rating updateRating = {context.updateRating} currentId = {context.currentId} likes = {context.likes} dislikes = {context.dislikes}/>
                    </div>
                </React.Fragment>
                </div>
            </div>
                    )}
            </AppContextConsumer>
        )
    }
}

export default CenterScreenBlock;