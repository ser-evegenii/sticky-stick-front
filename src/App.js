import React, { Component } from "react";
import "./styles/App.css";
import MainPage from "./MainPage";
import configData from "./config.json"
import AuthScreen from "./Auth/AuthScreen"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Upload from "./Upload/Upload";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
              <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                  <Route path="/admin">
                      <Upload />
                  </Route>
                  <Route path="/test">
                      <AuthScreen />
                  </Route>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
