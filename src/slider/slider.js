import React, { Component } from 'react';

const sliderWidth="650px"
const sliderHeight="350px"

class Slider extends Component {
    render() {
        return (
            <div className="slider__item-video">
                    <img src="http://pizdec.ru:4000/api/load?id=38" alt="image" width={sliderWidth} height={sliderHeight} />
            </div>
        );
    }
}
export default Slider;