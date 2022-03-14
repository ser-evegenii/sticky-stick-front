import React, {Component} from "react";
import {AppContext} from "./AppContext";
import logo from "./logo.svg";
import ExtensionUpdater from "./extensionUpdater";
import ImageComponent from "./CenterScreenBlock";
import AuthBtn from "./AuthBtn";

class MainPage extends Component {
    render() {
        console.log(process.env.REACT_APP_LOAD_IMG_URI)
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