import React, {useState} from 'react';
import {useToggleBodyOverflow} from "../../hooks/useToggleBodyOverflow";
import cn from "classnames";

import "./ShareLink.css"

export const ShareLink = () => {
 const [isOpen, setIsOpen] = useState(false)

 useToggleBodyOverflow(isOpen)

 const handleOpen = () => {
  setIsOpen(true)
 }

 const handleClose = () => {
  setIsOpen(false)
 }

 const modalStyles = cn("shareLink__modal", {["shareLink__modal_opened"]: isOpen})

 return (
  <div className="shareLink">
   <button onClick={handleOpen} className="shareLink__button">
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
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur deserunt ea magnam maxime neque
       non numquam officia perferendis quisquam quod repellat ullam unde, vel veritatis. Deleniti praesentium quo
       voluptas.
      </div>
      <div>At atque consequatur dolore doloremque, error fugiat illo incidunt magni maiores modi natus nihil nisi
       nostrum
       nulla officiis pariatur provident reiciendis repellendus reprehenderit rerum sed temporibus unde vitae. Culpa,
       iste.
      </div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur deserunt ea magnam maxime neque
       non numquam officia perferendis quisquam quod repellat ullam unde, vel veritatis. Deleniti praesentium quo
       voluptas.
      </div>
      <div>At atque consequatur dolore doloremque, error fugiat illo incidunt magni maiores modi natus nihil nisi
       nostrum
       nulla officiis pariatur provident reiciendis repellendus reprehenderit rerum sed temporibus unde vitae. Culpa,
       iste.
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

