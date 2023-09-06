import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import "../../styles/authPage.css";
import AuthBtn from "./AuthBtn";
import {HomeLink} from "../../features/HomeLink";

class LoginForm extends Component {
 constructor(props) {
  super(props);
  this.showResultMessage = this.showResultMessage.bind(this)
  this.getEmail = this.getEmail.bind(this)
 }


 state = {
  userEmail: "",
  resultMessage: "",
 }

 getEmail(event) {
  this.setState({userEmail: event.target.value})
 }

 showResultMessage(message) {
  this.setState({resultMessage: message})
 }


 render() {
  return (
   <div className="LoginPage">
    <HomeLink/>
    <div className="LoginPage__content">
     <div className="LoginPage__form">
      <Form>
       <Form.Group controlId="formBasicEmail">
        <Form.Label className="text-center" style={{width: "100%"}}>
         Email
        </Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={this.getEmail}/>
        <Form.Text className="text-muted">
         Enter your email and we will send invitation for you
        </Form.Text>
        <p className="text-center">
         {this.state.resultMessage}
        </p>
       </Form.Group>
      </Form>
      <label htmlFor="contained-button-file" className="LoginPage__button">
       <AuthBtn email={this.state.userEmail} showMessage={this.showResultMessage}/>
      </label>
     </div>
    </div>
   </div>
  )
 }
}

export default LoginForm;