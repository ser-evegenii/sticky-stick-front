import React, { Component } from 'react';
import VideoPlayer from 'react-simple-video-player';

const sliderWidth="650px"
const sliderHeight="350px"

class Slider extends Component {

    constructor(props){
        super(props);
        this.updateSliderStatus = this.updateSliderStatus.bind(this)
        this.renderElement = this.renderElement.bind(this)
    }

    state = {
        showSlider: false,
    }

    updateSliderStatus() {
        this.props.showSlider(false)
    }

    renderElement() {
        if(this.props.extension === 'video')
            return <VideoPlayer url={this.props.displayObjURI} />;
        else {
            return (
                    <img src={this.props.displayObjURI}
                         onLoad={this.updateSliderStatus}
                         alt="image"
                         width={sliderWidth}
                         height={sliderHeight}
                    />
            )
        };
    }

    render() {
        return (
            <div className="slider__item-video">
                {this.renderElement()}
            </div>
        );
    }
}
export default Slider;