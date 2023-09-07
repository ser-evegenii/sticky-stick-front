import React from 'react';
import "./styles/App.css"

const OPEN_RATING = 20

class Rating extends React.Component {

 constructor(props) {
  super(props);
  this.click = this.click.bind(this);
 }

 click(direction) {
  this.props.updateRating(direction, this.props.currentId)
 }

 render() {
  return (
   <div className="hearts">
    <div className="heartBlock">
     <button className="noneBtn"
             onClick={() => this.click("+")}>
      {this.props.likeNode}
     </button>
     <p>{this.props.likes > OPEN_RATING ?
      `${this.props.likes}` : ""
     }</p>
    </div>
    <div className="heartBlock">
     <button className="noneBtn"
             onClick={() => this.click("-")}>
      {this.props.dislikeNode}
     </button>
     <p>{this.props.dislikes > OPEN_RATING ?
      `${this.props.dislikes}` : ""
     }</p>
    </div>
   </div>
  );
 }
}

export default Rating;