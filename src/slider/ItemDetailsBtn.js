import React from 'react';
import detailsButton from "../layout/img/main/button.png";

class ItemDetailsBtn extends React.Component {

    constructor(props){
        super(props);
        this.sliders = this.sliders.bind(this)
    }

    componentDidMount() {
        this.sliders()
    }

    sliders() {
        let sliders = document.querySelectorAll('.slider__item');
        sliders.forEach(function(slider) {
            let button = slider.querySelector('.slider-button_open');

            if (button) {
                button.addEventListener('click', function(){
                    let info = slider.querySelector('.info-container');
                    info.style.display = (info.style.display === 'block') ? 'none' : 'block';

                    let imgButton = slider.querySelector('.img-button');
                    imgButton.style.transform = (imgButton.style.transform === 'rotate(0deg)') ? 'rotate(180deg)' : 'rotate(0deg)';
                });
            }
        });
    }

    render() {
        return  (
            <div className="button-container">
                <div className="slider-button_open">
                    <a href="#"><img src={detailsButton} alt="button"
                                     className="img-button"/></a>
                </div>
            </div>
        );
    }
}

export default ItemDetailsBtn;