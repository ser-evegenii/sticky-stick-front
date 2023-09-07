import React, {Component} from "react";
import {AppContext} from "./AppContext";
import ImageComponent from "./CenterScreenBlock";
import LogoIcon from "./logo";
import {AboutProject} from "./components/AboutProject";
import {AuthLink} from "./components/AuthLink";

class MainPage extends Component {
 render() {
  return (
   <div className="App">
    <AppContext>
     <header className="App-header">
      <div className="App-header__logo">
       <LogoIcon/>
       <AboutProject height={350} width={700}/>
      </div>
      <AuthLink/>
     </header>
     <ImageComponent/>
    </AppContext>
   </div>
  );
 }
}

export default MainPage;