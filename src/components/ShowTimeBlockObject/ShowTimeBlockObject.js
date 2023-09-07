import React from 'react';
import "../../styles/loader.css";
import VideoPlayer from 'react-simple-video-player';

import './ShowTimeBlockObject.css'

const ShowTimeBlockObject = (props) => {

 const updateSliderStatus = () => {
  props.showSlider(false)
 }

 const renderElement = () => {
  if (props.extension === 'video')

   return <div className="videoWrapper">
    <VideoPlayer url={props.displayObjURI}/>
   </div>
  else {
   return (
    <div className="ShowTimeBlockObject">
     <div className="loader" style={{display: props.sliderIsActive ? "block" : "none"}}/>
     <div className="ShowTimeBlockObject__imgBack">
      <img className={props.classname} onLoad={updateSliderStatus} src={props.displayObjURI}
           alt="image"/>
     </div>
    </div>
   )
  }

 }


 return (
  <div>{renderElement()}
  </div>
 )

}

export default ShowTimeBlockObject;

//<VideoPlayer url="http://10.0.2.15:4000/load?id=11" />
//                <div className="loader" style={{display: this.props.sliderIsActive ? "block" : "none"}}></div>
//                 <div><img className={this.props.classname} onLoad={this.updateSliderStatus} src={this.props.displayObjURI} alt="image" /></div>