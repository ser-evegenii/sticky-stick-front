import React, {useEffect, useState} from 'react';
import "../../styles/loader.css";
import VideoPlayer from 'react-simple-video-player';

import './ShowTimeBlockObject.css'
import cn from "classnames";

const HIDING_IMAGE_LONG_LOADING_TIME = 5

const ShowTimeBlockObject = (props) => {

 const [disabledIcon, setDisabledIcon] = useState(false);

 const [imgUrl, setState] = useState("")

 const updateSliderStatus = () => {
  props.showSlider(false)
 }

 useEffect(() => {
  if (props.displayObjURI !== "" && props.displayObjURI !== imgUrl) {
   setState(props.displayObjURI)
   setDisabledIcon(false)
   updateSliderStatus()
  }
 }, [props.displayObjURI]);


 useEffect(() => {
  let timeoutId;


  const setDisabledIconAfterTimeout = () => {
   timeoutId = setTimeout(() => {
    setDisabledIcon(true);
   }, HIDING_IMAGE_LONG_LOADING_TIME * 1000);
  };


  const handleSliderIsActiveChange = () => {

   if (!props.sliderIsActive) {
    clearTimeout(timeoutId);
    setDisabledIcon(false);
   } else {
    setDisabledIconAfterTimeout();
   }
  };

  handleSliderIsActiveChange();

  return () => {
   clearTimeout(timeoutId);
  };
 }, [props.sliderIsActive])

 const imgClasses = cn(props.classname, "ShowTimeBlockObject__imgClass", {["ShowTimeBlockObject__imgClass_hide"]: disabledIcon})

 const errorClasses = cn("ShowTimeBlockObject__imgBack_error", {["ShowTimeBlockObject__imgBack_errorOpen"]: disabledIcon})
 const loaderClasses = cn("loader", {["loader_open"]: props.sliderIsActive && !disabledIcon})


 const renderElement = () => {
  if (props.extension === 'video')

   return <div className="videoWrapper">
    <VideoPlayer url={props.displayObjURI}/>
   </div>
  else {
   return (
    <div className="ShowTimeBlockObject">
     <div className={loaderClasses}/>
     <div className={errorClasses}>ERROR</div>
     <div className="ShowTimeBlockObject__imgBack">
      <img className={imgClasses} onLoad={updateSliderStatus}
           src={imgUrl}
           alt="image"/>
     </div>
    </div>
   )
  }
 }

 return <div>{renderElement()}</div>

}

export default ShowTimeBlockObject;
