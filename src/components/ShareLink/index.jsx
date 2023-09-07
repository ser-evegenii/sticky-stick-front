import React, {useState} from 'react';
import {useToggleBodyOverflow} from "../../hooks/useToggleBodyOverflow";
import shareIcon from '../../icons/share.png'
import cn from "classnames";

import "./ShareLink.css"

export const ShareLink = () => {
 const [isOpen, setIsOpen] = useState(false)
 const clipboardUrl = "https://www.stickystick.com/some/url"

 useToggleBodyOverflow(isOpen)

 const handleOpen = () => {
  setIsOpen(true)
 }

 const handleClose = () => {
  setIsOpen(false)
 }

 const handleCopyToClipBoard = () => {
  navigator.clipboard.writeText(clipboardUrl)
 }

 const modalStyles = cn("shareLink__modal", {["shareLink__modal_opened"]: isOpen})

 const item = <div className="shareLink__contentHeader__SN">
  <div className="shareLink__contentHeader__SN_icon"></div>
  <div className="shareLink__contentHeader__SN_text">Соц. сеть</div>
 </div>

 return (
  <div className="shareLink">
   <button onClick={handleOpen} className="shareLink__button">
    <div className="shareLink__buttonIcon"><img src={shareIcon} alt=""/></div>
    <span>Поделиться</span>
   </button>
   <div className={modalStyles}>
    <div className="shareLink__overlay" onClick={handleClose}/>
    <div className="shareLink__content">
     <div className="shareLink__content__header">
      <span>Поделиться</span>
      <button onClick={handleClose} className="shareLink__button shareLink__button_close">X</button>
     </div>
     <div className="shareLink__content__text">
      <div className="shareLink__contentHeader">
       {item}
       {item}
       {item}
       {item}
       {item}
       {item}
      </div>
     </div>
     <div className="shareLink__content__url">
      <div>
       {clipboardUrl}
      </div>
      <button onClick={handleCopyToClipBoard} className="shareLink__content__urlButton">Копировать</button>
     </div>
    </div>
   </div>
  </div>
 );
};

