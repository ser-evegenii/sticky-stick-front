import React, {Component} from "react";
import {AppContext} from "./AppContext";
import "./layout/css/styles.css";
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