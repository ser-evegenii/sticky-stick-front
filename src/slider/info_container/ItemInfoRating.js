import React from 'react';
import like_icon from "../../layout/img/main/like.png";

class ItemInfoRating extends React.Component {
    constructor(props){
        super(props);
        this.click = this.click.bind(this);
    }

    click(direction) {
        this.props.updateRating(direction, this.props.currentId)
    }

    render() {
        return  (
            <div className="video-rating" id="anchor">
                <div className="video-rating_item">
                    <a href="#"><img src={like_icon} alt="like" onClick={() => this.click("+")}/></a>
                    <p className="video-rating_item_rating-amount">{this.props.likes}</p>
                </div>
                <div className="video-rating_item">
                    <a href="#"><img src={like_icon} alt="dislike" onClick={() => this.click("-")}/></a>
                    <p className="video-rating_item_rating-amount">{this.props.dislikes}</p>
                </div>
            </div>
        );
    }
}

export default ItemInfoRating;