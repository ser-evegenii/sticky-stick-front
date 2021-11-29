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
                    <button>
                        <img src={redHeart} className="heartImg" alt="red_heart" />
                    </button>
                </div>
                <div className="heartBlock">
                    <button>
                        <img src={blueHeart} className="heartImg" alt="blue_heart" />
                    </button>
                </div>
            </div>
        );
    }
}
//<button style="background: url(myimage.png)" ... />
export default HeartIcon;