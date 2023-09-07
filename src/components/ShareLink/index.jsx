import React, {useRef, useState} from 'react';
import {useToggleBodyOverflow} from "../../hooks/useToggleBodyOverflow";
import shareIcon from '../../icons/share.png'
import cn from "classnames";


// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


import "./ShareLink.css"
import {Swiper, SwiperSlide} from "swiper/react";

export const ShareLink = () => {
 const [isOpen, setIsOpen] = useState(false)
 const [disablingSlideBtns, setDisablingSlideBtns] = useState({
  next: false,
  prev: true
 })
 const swiperRef = useRef()
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

 const handleClickNextButton = () => {
  swiperRef.current?.slideNext()
  console.log(swiperRef.current)
  setDisablingSlideBtns({prev: swiperRef.current.isBeginning, next: swiperRef.current.isEnd})
 }

 const handleClickPrevButton = () => {
  swiperRef.current?.slidePrev()
  console.log(swiperRef.current)
  setDisablingSlideBtns({prev: swiperRef.current.isBeginning, next: swiperRef.current.isEnd})
 }

 const handleMoveSlide = (e) => {
  setDisablingSlideBtns({prev: e.isBeginning, next: e.isEnd})
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
      {!disablingSlideBtns.prev && <div onClick={handleClickPrevButton}
                                        className="shareLink__content__slideBtn shareLink__content__slideBtn_left">{"<"}</div>}
      <div className="shareLink__contentHeader">
       <Swiper
        slidesPerView={5}
        onSliderFirstMove={handleMoveSlide}
        pagination={{
         clickable: true,
        }}
        onBeforeInit={swiper => {
         swiperRef.current = swiper
        }}
        className="mySwiper"
        breakpoints={{// when window width is >= 320px
         200: {
          slidesPerView: 2,
          spaceBetween: 10
         },
         300: {
          slidesPerView: 3,
          spaceBetween: 10
         },
         440: {
          slidesPerView: 4,
          spaceBetween: 10
         }
        }
        }

       >
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>
        <SwiperSlide>{item}</SwiperSlide>

       </Swiper>
      </div>
      {!disablingSlideBtns.next && <div onClick={handleClickNextButton}
                                        className="shareLink__content__slideBtn shareLink__content__slideBtn_right">{">"}</div>}

     </div>
     <div className="shareLink__content__url">
      <div className="shareLink__content__urlText">
       {clipboardUrl}
      </div>
      <button onClick={handleCopyToClipBoard} className="shareLink__content__urlButton">Копировать</button>
     </div>
    </div>
   </div>
  </div>
 );
};

