import React from 'react'
import { Paper, Button } from '@mui/material';
import Slider from "react-slick";

import { Nail1,Nail2,Nail3 } from '../../images/images.js';

const Home = () => {

    const sliderSettings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        arrows: true,
        className: "carousel"
    };

    const nailList = [
        {
            name: 'Nail1',
            url: require("../../images/nails/nail1.png"),
            alt: 'nail1art'
        },
        {
            name: 'Nail2',
            url: require("../../images/nails/nail2.png"),
            alt: 'nail2art'
        },
        {
            name: 'Nail3',
            url: require("../../images/nails/nail3.png"),
            alt: 'nail3art'
        },
    ];

    return (
        <div>Home
            <Slider {...sliderSettings}>
                {nailList.map((nail) => {
                    return (
                        <div>
                            <img width="100%" src={nail.url} alt={nail.alt}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
  )
}

export default Home