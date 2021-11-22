import React from 'react';
import "./App.css"
import redHeart from "./icons/red_heart.png";
import blueHeart from "./icons/blue_heart.png";

class HeartIcon extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
        return  (
            <div className="hearts">
                <div className="heartBlock">
                    <img src={redHeart} className="heartImg" alt="red_heart" />
                    <p className="heartsCounter">10</p>
                </div>
                <div className="heartBlock">
                    <img src={blueHeart} className="heartImg" alt="blue_heart" />
                    <p className="heartsCounter">3</p>
                </div>
            </div>
        );
    }
}

export default HeartIcon;