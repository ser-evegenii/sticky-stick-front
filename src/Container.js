import React, {Component} from "react";
import {AppContext} from "./AppContext";
import NavigationMenu from "./swipe/navigationMenu";
import LogoIcon from "./logo";
import "./layout/css/styles.css";
import HeaderAuthorization from "./Auth/Header-authorization";
import Slider from "./slider/slider"
import SliderControl from "./slider/SliderControl"
import ItemDetailsBtn from "./slider/ItemDetailsBtn";
import ItemInfoContainer from "./slider/info_container/ItemInfoContainer";


class Container extends Component {
    render() {
        return (
                <div class="container">
                    <div class="main-inner">
                        <div class="slider">
                            <div class="slider__container">
                                <div class="slider__wrapper">
                                    <div class="slider__items">
                                        <div class="slider__item">
                                            <Slider/>
                                            <ItemDetailsBtn/>
                                            <ItemInfoContainer/>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <SliderControl direction="prev"/>
                            <SliderControl direction="next"/>

                        </div>
                    </div>
                </div>
        );
    }
}

export default Container;