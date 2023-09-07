import React, {useState} from 'react';
import './AboutProject.css'
import cn from "classnames";
import {useToggleBodyOverflow} from "../../hooks/useToggleBodyOverflow";

export const AboutProject = (props) => {
 const [isOpen, setIsOpen] = useState(false)
 useToggleBodyOverflow(isOpen)

 const handleOpen = () => setIsOpen(true)

 const handleClose = () => setIsOpen(false)

 const modalStyles = cn("aboutProject__modal", {["aboutProject__modal_opened"]: isOpen})

 return (
  <div className="aboutProject">
   <button onClick={handleOpen} className="aboutProject__button auth-btn">
    <span>О проекте</span>
   </button>
   <div className={modalStyles}>
    <div className="aboutProject__overlay" onClick={handleClose}/>
    <div className="aboutProject__content" style={{maxWidth: props.width ?? "700px"}}>
     <div className="aboutProject__content__header">
      <div/>
      <span>О проекте</span>
      <button onClick={handleClose} className="aboutProject__button aboutProject__button_close auth-btn">X</button>
     </div>
     <div className="aboutProject__content__text" style={{maxHeight: props.height - 83 ?? "250px"}}>
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

