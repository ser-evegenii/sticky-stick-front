import React, {useEffect, useRef, useState} from 'react';

import './Tags.css'
import cn from "classnames";
import {useOutsideClick} from "../../hooks/useOutsideClick";

export const Tags = (props) => {
 const [isOpen, setIsOpen] = useState(false)
 const tagsRef = useOutsideClick(() => {
  setIsOpen(false)
 });
 const tagsContentRef = useRef(null)
 const [tagsContentHeight, setTagsContentHeight] = useState(0)

 useEffect(() => {
  if (tagsContentRef.current) {
   setTagsContentHeight(tagsContentRef.current.offsetHeight)
  }
 }, [tagsContentRef.current])

 const handleToggleState = () => {
  setIsOpen(prevState => !prevState)
 }


 const tagsContentClasses = cn("Tags__content", {["Tags__content"]: isOpen})
 const tagsHeaderButtonClasses = cn("Tags__headerButton", {["Tags__headerButton_hide"]: isOpen})

 return (
  <div className="Tags" ref={tagsRef}>
   <div className="Tags__header">
    <span>{props.data[0].length > 10 && props.data.length > 1 ? `${props.data[0].slice(0, 10)}...` : props.data[0]}</span>
    {props.data.length > 1 && <div onClick={handleToggleState} className={tagsHeaderButtonClasses}>>></div>}
   </div>
   {props.data.length > 1 &&
    <div style={{maxHeight: isOpen ? tagsContentHeight : 0}} className="Tags__contentWrapper">
     <div className={tagsContentClasses} ref={tagsContentRef}>
      {props.data.map((el, id) => <div key={id}>{el}</div>)}
     </div>
    </div>
   }

  </div>
 );
};

