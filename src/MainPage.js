import React, {Component} from "react";
import {AppContext} from "./AppContext";
import logo from "./logo.svg";
import CategoryUpdater from "./swipe/categoryUpdater";
import ImageComponent from "./CenterScreenBlock";
import AuthBtn from "./Auth/AuthBtn";

class MainPage extends Component {
    render() {
        return (
            <div className="App">
                <AppContext>
                    <header className="App-header">
                        <AuthBtn/>
                    </header>
                    <ImageComponent />
                </AppContext>
            </div>
        );
    }
}

export default MainPage;