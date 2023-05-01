import {Image} from "../../../interfaces/Image";
import styles from './Slider.module.scss'
import {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface SliderProps{
    slides:Array<Image>
}

const ImageSlider = ({slides}:SliderProps) => {

    const settings = {
        className:styles.slider,
        centerMode: true,
        infinite: true,
        centerPadding: "80px",
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        arrows: true,
        swipeToSlide: true,
        nextArrow: <div><img src={'./ArrowRight.png'} alt=""/></div>,
        prevArrow: <div><img src={'./ArrowLeft.png'} alt=""/></div>,
        //afterChange:{handlePageChange},
        variableWidth:true,
    };

    return (
       <div className={styles.sliderContainer}>
           <Slider {...settings}   customPaging={(i)=><div>{i} from {slides.length}</div>}>
               {
                   slides.map((slide,index)=>
                       <div className={styles.image} key={index}>
                           <img src={slide.url} alt={`${index}`}/>
                       </div>
                   )
               }
           </Slider>
           <div className={styles.fon}></div>
           <div className={styles.fon +' '+ styles.rightFon}></div>
       </div>
    );
};

export default ImageSlider;