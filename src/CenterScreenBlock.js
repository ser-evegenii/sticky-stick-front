import React, {useState} from 'react';
import ButtonComponent from "./swipe/swipeBtn";
import "./styles/buttons.css";
import ImgDetails from "./imgDetails";
import Rating from "./rating";
import ShowTimeBlockObject from "./components/ShowTimeBlockObject/ShowTimeBlockObject";
import ObjectTypeUpdater from "./swipe/categoryUpdater";
import "./styles/App.css"

import {AppContextConsumer} from "./AppContext";
import like from "./icons/like.png";
import {ShareLink} from "./components/ShareLink";

const CenterScreenBlock = (props) => {

 const [state, setState] = useState({
  displayObjURI: "",
  currentId: "",
  sliderIsActive: false
 })


 const showSlider = (isActive) => {
  setState(prevState => ({...prevState, sliderIsActive: isActive}))
 }

 const likeElement = <img src={like} className="likeImg" alt="like"/>
 const dislikeElement = <img src={like} className="disLikeImg" alt="blue_heart"/>

 return (
  <AppContextConsumer>
   {context => (
    <div className="someTest">
     <ObjectTypeUpdater/>
     <div className="shareLinkBlock">
      <ShareLink/>
     </div>

     <div className="centerScreen">
      <ButtonComponent swipe={context.swipeRequest} directionSymbol="&laquo;" direction="previous"
                       className="centerScreen__PrevButton"
                       showSlider={showSlider}/>
      <div className="centerScreen__content">
       <ShowTimeBlockObject classname="showTimeObject" displayObjURI={context.displayObjURI}
                            swipe={context.swipeRequest}
                            sliderIsActive={state.sliderIsActive}
                            showSlider={showSlider}
                            extension={context.extension}/>
       <ImgDetails login={context.currentLogin} name={context.name} sourceUser={context.sourceUser}/>
       <Rating likeNode={likeElement} dislikeNode={dislikeElement} updateRating={context.updateRating}
               currentId={context.currentId}
               likes={context.likes}
               dislikes={context.dislikes}/>
       <div className="centerScreen__commentInput">
        <textarea disabled value="Write some comment"/>
        <button disabled>add</button>
       </div>
       <div/>
      </div>
      <ButtonComponent swipe={context.swipeRequest} direction="next" directionSymbol="&raquo;"
                       className="centerScreen__NextButton"
                       showSlider={showSlider}/>
     </div>
    </div>
   )}
  </AppContextConsumer>
 )
}

export default CenterScreenBlock;