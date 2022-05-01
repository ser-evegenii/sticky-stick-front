import React, {Component} from "react";
import NavigationMenu from "./swipe/navigationMenu";
import LogoIcon from "./logo";
import "./layout/css/styles.css";
import LoginBtn from "./Auth/LoginBtn";


class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="header-inner">
                        <LogoIcon/>
                        <NavigationMenu/>
                        <LoginBtn/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;