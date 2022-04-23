import React, {Component} from "react";
import NavigationMenu from "./swipe/navigationMenu";
import LogoIcon from "./logo";
import "./layout/css/styles.css";
import HeaderAuthorization from "./Auth/Header-authorization";


class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="header-inner">
                        <LogoIcon/>
                        <NavigationMenu/>
                        <HeaderAuthorization/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;