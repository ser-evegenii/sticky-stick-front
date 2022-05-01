import React, {Component} from "react";
import "./layout/css/styles.css";
import Slider from "./slider/slider"
import SliderControl from "./slider/SliderControl"
import ItemDetailsBtn from "./slider/ItemDetailsBtn";
import ItemInfoContainer from "./slider/info_container/ItemInfoContainer";
import {AppContextConsumer} from "./AppContext";


class Container extends Component {
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
        return (
            <AppContextConsumer>
                { context => (
                <div class="container">
                    <div class="main-inner">
                        <div class="slider">
                            <div class="slider__container">
                                <div class="slider__wrapper">
                                    <div class="slider__items">
                                        <div class="slider__item">
                                            <Slider displayObjURI = {context.displayObjURI}
                                                    swipe = {context.swipeRequest}
                                                    sliderIsActive = {this.state.sliderIsActive}
                                                    showSlider = {this.showSlider}
                                                    extension = {context.extension}/>
                                            <ItemDetailsBtn/>
                                            <ItemInfoContainer name = {context.name}
                                                               likes={context.likes}
                                                               dislikes={context.dislikes}
                                                               updateRating = {context.updateRating}
                                                               currentId = {context.currentId}
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <SliderControl swipe = {context.swipeRequest}
                                           showSlider = {this.showSlider}
                                           direction="prev"/>
                            <SliderControl swipe = {context.swipeRequest}
                                           showSlider = {this.showSlider}
                                           direction="next"/>

                        </div>
                    </div>
                </div>
                )}
                </AppContextConsumer>
        );
    }
}

export default Container;