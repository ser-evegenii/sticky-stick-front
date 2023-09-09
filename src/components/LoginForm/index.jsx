import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import AuthBtn from "../Auth/AuthBtn";
import "../../styles/authPage.css";
import cn from "classnames";

export const LoginForm = (props) => {

 const [state, setState] = useState({
  userEmail: "",
  resultMessage: "",
 })


 const getEmail = (event) => {
  setState({userEmail: event.target.value})
 }

 const showResultMessage = (message) => {
  setState({resultMessage: message})
 }

 return (
  <div className="LoginPage__form">
   <Form>
    <Form.Group controlId="formBasicEmail">
     <Form.Label className="text-center" style={{width: "100%"}}>
      Email
     </Form.Label>
     <Form.Control type="email" placeholder="Enter email" onChange={getEmail}/>
     {props.description && <Form.Text className="text-muted">
      Enter your email and we will send invitation for you
     </Form.Text>}

     <p className="text-center">
      {state.resultMessage}
     </p>
    </Form.Group>
   </Form>
   <label htmlFor="contained-button-file" className={cn("LoginPage__button", props.buttonSubmitClassName ?? "")}>
    <AuthBtn email={state.userEmail} showMessage={showResultMessage}/>
   </label>
  </div>
 );
};

