import React, { Component } from "react";
import logo from "./logo.svg";
import ImageComponent from "./imageComponent.js";
import UploadImgForm from "./UploadImgForm";
import "./App.css";
import TypeUpdater from "./typeUpdater";
import OpenUploadFormBtn from "./OpenUploadFormBtn";

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <div className="App-header-logo">
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{color: "black"}}>Logo???</p>
              </div>
              <TypeUpdater />
              <UploadImgForm/>
          </header>
          <ImageComponent />

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <OpenUploadFormBtn/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      </div>

    );
  }
}

export default App;
