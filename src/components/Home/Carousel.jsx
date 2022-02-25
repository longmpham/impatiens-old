import React from 'react'
import Slider from "react-slick";


import nailList from '../../data.js'

const Carousel = () => {

    const sliderSettings = {
        dots: true,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        arrows: true,
        className: "carousel",
        marginBottom: "30px",
        cssEase: "linear",
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: "200px",
    };

    return (
        <div>Carousel
            <Slider {...sliderSettings}>
                {nailList.map((nail) => {
                    return (
                        <div key={nail._id}>
                            <img width="100%" src={nail.image[0]} alt={nail.alt}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
  )
}

export default Carousel