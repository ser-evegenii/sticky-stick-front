import React, {useState} from 'react';
import "./styles/App.css"
import {AppContextConsumer} from "./AppContext";
import {ShareLink} from "./components/ShareLink";
import {Tags} from "./components/Tags";

const ImgDetails = (props) => {

 const [state, setState] = useState({
  tags: ["#stickystick", "#anytagTager", "#testTagdadsdasdas", "#small"],
  login: "",
  sourceUser: "",
  name: ""
 })


 return (
  <AppContextConsumer>
   {context => (
    <div className="details__main">
     <div className="details__name"><p className="details__nameText">{props.name}</p></div>
     <div className="details">
      <div className="imgDetails">
       <Tags data={state.tags}/>

      </div>
     </div>
    </div>

   )}
  </AppContextConsumer>
 );
}

export default ImgDetails;