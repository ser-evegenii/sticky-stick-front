import React, { Component } from "react";
import MainPage from "./MainPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Upload from "./Upload/Upload";

import "./layout/css/styles.css";
import LoginForm from "./Auth/LoginForm";

class App extends Component {
    render() {
    return (
        <Router>
              <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                  <Route path="/admin">
                      <Upload />
                  </Route>
                  <Route path="/login">
                      <LoginForm />
                  </Route>
                </Switch>
        </Router>
    );
  }
}

export default App;
