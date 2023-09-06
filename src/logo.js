import logo from "./icons/sticky-stick-logo_sample_font.png";
import React from "react";


const LogoIcon = () => {
 return (
  <div className="logo">
   <img src={logo} className="imgLogo" alt="logo"/>
  </div>
 );
}

export default LogoIcon;
