import React from 'react';
import "../../styles/authPage.css";
import {HomeLink} from "../HomeLink";
import {LoginForm} from "../LoginForm";

const AuthScreen = (props) => {

 return (
  <div className="LoginPage">
   <HomeLink/>
   <div className="LoginPage__content">
    <LoginForm/>
   </div>
  </div>
 )
}

export default AuthScreen;