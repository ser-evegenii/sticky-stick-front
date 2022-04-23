import React, {Component} from "react";
import {AppContext} from "./AppContext";
import NavigationMenu from "./swipe/navigationMenu";
import LogoIcon from "./logo";
import "./layout/css/styles.css";
import HeaderAuthorization from "./Auth/Header-authorization";
import Container from "./Container";
import Header from "./Header";


class MainPage extends Component {
    render() {
        return (
                <AppContext>
                    <Header/>
                    <Container/>
                </AppContext>
        );
    }
}

export default MainPage;