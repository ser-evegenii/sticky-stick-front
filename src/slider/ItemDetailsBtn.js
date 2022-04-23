import React from 'react';
import detailsButton from "../layout/img/main/button.png";

class ItemDetailsBtn extends React.Component {


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