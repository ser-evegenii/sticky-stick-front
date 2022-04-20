import React from 'react';
import "./styles/App.css"
import like from "./icons/like.png";

const openRatingConstant = 20

class Rating extends React.Component {

    constructor(props){
        super(props);
        this.click = this.click.bind(this);
    }

    click(direction) {
        this.props.updateRating(direction, this.props.currentId)
    }

    render() {
        return  (
            <div className="hearts">
                <div className="heartBlock">
                    <button className="noneBtn"
                        onClick={() => this.click("+")} >
                        <img src={like} className="likeImg" alt="like" />
                    </button>
                    <p>{this.props.likes > openRatingConstant ?
                        `${this.props.likes}` : ""
                    }</p>
                </div>
                <div className="heartBlock">
                    <button className="noneBtn"
                            onClick={() => this.click("-")} >
                        <img src={like} className="disLikeImg" alt="blue_heart" />
                    </button>
                    <p>{this.props.dislikes > openRatingConstant ?
                        `${this.props.dislikes}` : ""
                    }</p>
                </div>
            </div>
        );
    }
}

export default Rating;