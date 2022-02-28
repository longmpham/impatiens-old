import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick";


// import nailList from '../../data.js'

const Carousel = () => {

    const [loading, setLoading] = useState(false);
    const [nailList, setNailList] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
  
            // 1. loading screen
            // 2. get promise (await for data)
            // 3. setdata and/or log
            // 4. set loading false
            // 5. call function
  
            // loading...
            setLoading(true);
  
            const result = await axios.get("http://jsonplaceholder.typicode.com/albums/1/photos", {
                params: {
                    _limit: 10 // limit number of objects found (finds first 10)
                }
            });
  
            console.log(result.data);
            setNailList(result.data);
            setLoading(false);
        }
        fetchData();
    }, []);

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
                        <div key={nail.id}>
                            <img width="100%" src={nail.url} alt={nail.thumbnailUrl}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
  )
}

export default Carousel