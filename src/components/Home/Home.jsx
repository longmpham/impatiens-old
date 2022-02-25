import React from 'react'
import { Paper, Button } from '@mui/material';
import Slider from "react-slick";

import About from './About'

import nailList from '../../data.js'

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
        className: "carousel",
        marginBottom: "30px",
    };

    return (
        <div>Home
            <Slider {...sliderSettings}>
                {nailList.map((nail) => {
                    return (
                        <div>
                            <img width="100%" src={nail.image} alt={nail.alt}/>
                        </div>
                    )
                })}
            </Slider>
            <About />
        </div>
  )
}

export default Home