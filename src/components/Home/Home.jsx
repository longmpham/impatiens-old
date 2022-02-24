// import React, { Component } from "react";
// import Slider from "react-slick";


// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>122222222</h3>
//           </div>
//           <div>
//             <h3>233333333</h3>
//           </div>
//           <div>
//             <h3>4444444443</h3>
//           </div>
//           <div>
//             <h3>4555555</h3>
//           </div>
//           <div>
//             <h3>566666666</h3>
//           </div>
//           <div>
//             <h3>677777777777</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

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