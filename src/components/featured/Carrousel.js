import React from 'react';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carrousel =  () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
    }

    const slides = [
        slide_one, slide_two, slide_three
    ]

    const renderSlide = (slide, index) => (
        <div key={index}>
            <div
                className="carrousel_image"
                style={{
                        background:`url(${slide})`,
                        height:`${window.innerHeight}px`
                    }}
            ></div>
        </div>
    )

    return (
        <div className="carrousel_wrapper"
            style = {{
                height: `${window.innerHeight}px`
            }}
        >
            <Slider {...settings}>
            { slides.map((item, index) => renderSlide(item, index) ) }
            </Slider>
        </div>
    )
}


export default Carrousel 