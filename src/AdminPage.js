import React, {Component} from "react";
import {AppContext} from "./AppContext";
import logo from "./logo.svg";
import CategoryUpdater from "./swipe/categoryUpdater";
import UploadImgForm from "./TestPage";
import ImageComponent from "./CenterScreenBlock";
import DeleteBtn from "./deleteBtn";

class AdminPage extends Component {
    render() {
        return (
            <div className="App">
                <AppContext>
                    <header className="App-header">
                        <UploadImgForm/>
                        <DeleteBtn/>
                    </header>
                    <ImageComponent />
                </AppContext>
            </div>
        );
    }
}

export default AdminPage;