import React, { Component } from "react";
import logo from "./logo.svg";
import ImageComponent from "./CentrScreenBlock.js";
import UploadImgForm from "./UploadImgForm";
import "./App.css";
import ExtensionUpdater from "./extensionUpdater";
import {AppContext} from "./AppContext"
import DeleteBtn from "./deleteBtn";


class App extends Component {
  render() {
    return (
      <div className="App">
          <AppContext>
          <header className="App-header">
              <div className="App-header-logo">
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{color: "black"}}>Logo???</p>
              </div>
              <ExtensionUpdater />
              <UploadImgForm/>
          </header>
          <ImageComponent />
          <br/>
          <br/>
          <br/>
          <br/>
           <DeleteBtn/>
          <br/>
          <br/>
          <br/>
          </AppContext>
      </div>
    );
  }
}

export default App;
