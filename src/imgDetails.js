import React, {useState} from 'react';
import "./styles/App.css"
import {AppContextConsumer} from "./AppContext";
import {ShareLink} from "./components/ShareLink";
import {Tags} from "./components/Tags";

const ImgDetails = (props) => {

 const [state, setState] = useState({
  tags: ["#stickystick", "#stickystick", "#stickystick", "#stickystick"],
  login: "",
  sourceUser: "",
  name: ""
 })


 return (
  <AppContextConsumer>
   {context => (
    <div className="details">
     <div className="imgDetails">
      <Tags data={state.tags}/>
      <div className="fileName"><p>{props.name}</p></div>
      <ShareLink/>
     </div>
     {/*<div className="objSource"><a href={props.sourceUser}>{props.sourceUser}</a></div>*/}
    </div>
   )}
  </AppContextConsumer>
 );
}

export default ImgDetails;