import React, {useEffect, useState} from 'react';
import "../../styles/loader.css";
import VideoPlayer from 'react-simple-video-player';

import './ShowTimeBlockObject.css'
import cn from "classnames";

const HIDING_IMAGE_LONG_LOADING_TIME_SECONDS = 60
const SLIDER_TIMEOUT_NOT_LOADED_IMG_SECONDS = 5

const ShowTimeBlockObject = (props) => {

 const [disabledIcon, setDisabledIcon] = useState(false);

 const [imgUrl, setState] = useState("https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png")

 const updateSliderStatus = () => {
  props.showSlider(false)
 }
 const handleActiveSliderStatus = () => {
  props.showSlider(true)
 }

 useEffect(() => {
  let timeoutId;

  if (props.displayObjURI === "") {
   timeoutId = setTimeout(() => {
    handleActiveSliderStatus()
   }, SLIDER_TIMEOUT_NOT_LOADED_IMG_SECONDS * 1000)
  }

  if (props.displayObjURI !== imgUrl) {
   clearTimeout(timeoutId)
   // setState(props.displayObjURI)
   setDisabledIcon(false)
   updateSliderStatus()
  }

  return () => {
   clearTimeout(timeoutId);
  };
 }, [props.displayObjURI]);


 useEffect(() => {
  let timeoutId;


  const setDisabledIconAfterTimeout = () => {
   timeoutId = setTimeout(() => {
    setDisabledIcon(true);
   }, HIDING_IMAGE_LONG_LOADING_TIME_SECONDS * 1000);
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
      {imgUrl === "" ? <div className="ShowTimeBlockObject__imgBackWhiteList"/> :
       <img className={imgClasses} onLoad={updateSliderStatus}
            src={imgUrl}
            alt="image"/>
      }
     </div>
    </div>
   )
  }
 }

 return <div>{renderElement()}</div>

}

export default ShowTimeBlockObject;
