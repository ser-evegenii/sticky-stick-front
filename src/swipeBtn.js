
import React from 'react';
import "./styles/buttons.css";
import arrow from "./icons/arrow.png";

class SwipeButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
        this.click = this.click.bind(this);
    }

    click() {
        this.props.showSlider(true)
        this.props.swipe(this.props.direction)
    }

    renderElement(){
        if(this.props.direction == 'next')
            return "nextArrowImg"
        else {
            return "prevArrowImg"
        }
    }

    render() {
        return  (
                <div className="swipeBtnBlock">
                    <button className="swipeBtn"
                    onClick={() => this.click()} >
                        <img src={arrow} className={this.renderElement()} alt="like" />
                    </button>
                </div>
        );
    }
}

export default SwipeButton;