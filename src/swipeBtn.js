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
    onTrigger = (data) => {
        this.props.parentCallback(data);
    }

    click(direction) {
        this.setState({ isLoading: true });
        axios.get(baseURL+direction.direction, )
            .then((response) => {
                this.onTrigger(response.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const {direction} = this.props;
        const {directionSymbol} = this.props;
        return  (
                <div className="swipeBtnBlock"><button className="swipeBtn" onClick={() => this.click({direction})} > {direction} {directionSymbol} </button></div>
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