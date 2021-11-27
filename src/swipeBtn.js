const baseURL = "http://localhost:4000/swipe?direction=";
import React from 'react';
import axios from 'axios';
import "./buttons.css";

class SwipeButton extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
        this.click = this.click.bind(this);
    }

    click() {
        this.props.swipe(this.props.direction)
    }

    render() {
        return  (
                <div className="swipeBtnBlock">
                    <button className="swipeBtn"
                    onClick={() => this.click()} > {this.props.direction} {this.props.directionSymbol}
                    </button>
                </div>
        );
    }
}

export default SwipeButton;
/*

    render(){
        return(
            <React.Fragment>
                <img src={this.state.imageURL} alt="image" />
            </React.Fragment>
        )
    }
 */