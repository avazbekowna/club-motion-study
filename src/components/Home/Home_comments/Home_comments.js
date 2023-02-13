
import React from 'react';
import Slider from "react-slick";
import commentsImg1 from "./../../../img/Home-comments1.png";
import commentsImg2 from "./../../../img/Home-comments2.png";
import {findAllByDisplayValue} from "@testing-library/react";

const HomeComments = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.1,
        slidesToScroll: 2.1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return <div id="comments">
        <div className="container">
            <div className="comments">
                <h2 className="comments-title">video testimonials from our students</h2>
                <Slider {...settings}>
                    <div>
                        <img src={commentsImg1}/>
                    </div>
                    <div>
                        <img src={commentsImg2}/>
                    </div>
                    <div>
                        <img src={commentsImg1}/>
                    </div>
                    <div>
                        <img src={commentsImg2}/>
                    </div>
                </Slider>
            </div>
        </div>
    </div>;
};

export default HomeComments;