import React, {Component} from 'react';
import "../../styles/loader.css";
import VideoPlayer from 'react-simple-video-player';

import './ShowTimeBlockObject.css'


class ShowTimeBlockObject extends Component {
 constructor(props) {
  super(props);
  this.updateSliderStatus = this.updateSliderStatus.bind(this)
  this.renderElement = this.renderElement.bind(this)
 }

 state = {
  showSlider: false,
 }

 componentDidMount() {
 }

 updateSliderStatus() {
  this.props.showSlider(false)
 }

 renderElement() {
  if (this.props.extension === 'video')

   return <VideoPlayer url={this.props.displayObjURI}/>;
  else {
   return (
    <div className="ShowTimeBlockObject">
     <div className="loader" style={{display: this.props.sliderIsActive ? "block" : "none"}}/>
     <div className="ShowTimeBlockObject__imgBack">
      <img className={this.props.classname} onLoad={this.updateSliderStatus} src={this.props.displayObjURI}
           alt="image"/>
     </div>
    </div>
   )
  }

 }

 render() {
  return (
   <div>{this.renderElement()}
   </div>
  )
 }
}

export default ShowTimeBlockObject;

//<VideoPlayer url="http://10.0.2.15:4000/load?id=11" />
//                <div className="loader" style={{display: this.props.sliderIsActive ? "block" : "none"}}></div>
//                 <div><img className={this.props.classname} onLoad={this.updateSliderStatus} src={this.props.displayObjURI} alt="image" /></div>