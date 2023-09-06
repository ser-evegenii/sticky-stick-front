import React, {Component} from "react";
import "./styles/App.css";
import MainPage from "./MainPage";
import AuthScreen from "./components/Auth/AuthScreen"
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Upload from "./Upload/Upload";

class App extends Component {
 render() {
  return (
   <Router>
    <div>
     <Switch>
      <Route exact path="/">
       <MainPage/>
      </Route>
      <Route path="/admin">
       <Upload/>
      </Route>
      <Route path="/auth">
       <AuthScreen/>
      </Route>
     </Switch>
    </div>
   </Router>
  );
 }
}

export default App;
