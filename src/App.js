import React, { Component } from "react";
import "./styles/App.css";
import MainPage from "./MainPage";
import configData from "./config.json"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AdminPage from "./AdminPage";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
              <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/administrator">
                        <AdminPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
