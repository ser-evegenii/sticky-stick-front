import logo_icon from "./icons/sticky-stick-logo_sample_font.png";
import React from "react";


const LogoIcon = () => {

    return (
        <div className="header-logo">
            <a href="#">
                <img src={logo_icon} className="imgLogo" alt="logo" />
            </a>
        </div>
    );
}

export default LogoIcon;
