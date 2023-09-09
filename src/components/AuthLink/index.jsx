import React, {useState} from 'react';
import "./AuthLink.css"
import {Link} from "react-router-dom";
import cn from "classnames";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import {LoginForm} from "../LoginForm";

export const AuthLink = () => {

 const [isOpen, setIsOpen] = useState(false)

 const tagsRef = useOutsideClick(() => {
  setIsOpen(false)
 });

 const handleToggle = () => {
  setIsOpen(prevState => !prevState)
 }

 const handleClose = () => {
  setIsOpen(false)
 }

 const formClasses = cn("authLink__form", {["authLink__form__open"]: isOpen})

 return (
  <div className="authLink__main" ref={tagsRef}>
   <Link to="/auth" className="authLink authLink_mobile auth-btn" key="mobile" onClick={handleClose}>
    auth
   </Link>
   <button className="authLink auth-btn authLink_desktop" onClick={handleToggle} key="desktop">
    auth
   </button>
   <div className={formClasses}>
    <LoginForm buttonSubmitClassName={"buttonSubmitClassName"}/>
   </div>
  </div>

 );

}

