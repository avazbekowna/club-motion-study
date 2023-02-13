
import React from 'react';
import heroSmImg1 from "./../../../img/Home-hero-sm1.svg";
import heroSmImg2 from  "./../../../img/Home-hero-sm2.svg";
import heroLgImg1 from "./../../../img/Home-hero-lg1.png";
import heroLgImg2 from "./../../../img/Home-hero-lg2.png";
import heroContactImg1 from "./../../../img/Home-hero-men.svg";
import heroContactImg2 from "./../../../img/Home-hero-phone.svg";

const HomeHero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero-desc">
                        <h3 className="hero-desc_subtitle">EXPLORE THE WORLD</h3>
                        <h1 className="hero-desc_title">Study abroad with our help</h1>
                        <p>Study at the world's top universities and expand your horizons. Get the highest quality education and achieve success abroad.</p>
                    </div>
                    <div className="hero-block">
                        <div className="hero-block_sm-img sm-1">
                            <img src={heroSmImg1} alt=""/>
                        </div>
                        <div className="hero-block_lg-img lg-1">
                            <img src={heroLgImg1} alt=""/>
                        </div>
                        <div className="hero-block_lg-img lg-2">
                            <img src={heroLgImg2} alt=""/>
                        </div>
                        <div className="hero-block_sm-img sm-2">
                            <img src={heroSmImg2} alt=""/>
                        </div>
                        <div className="hero-block_blur-top">
                            <div></div>
                        </div>
                        <div className="hero-block_blur-bottom">
                            <div></div>
                        </div>
                    </div>
                    <div className="hero-contact">
                        <div className="hero-contact_group">
                            <div className="hero-contact_group-bg">
                                <img src={heroContactImg1} alt=""/>
                            </div>
                            <div className="hero-contact_group-desc">
                                <h5>NAME</h5>
                                <input type="text" placeholder="|Enter your name"/>
                            </div>
                        </div>
                        <div className="hero-contact_group group-2">
                            <div className="hero-contact_group-bg">
                                <img src={heroContactImg2} alt=""/>
                            </div>
                            <div className="hero-contact_group-desc">
                                <h5>PHONE</h5>
                                <input type="text" placeholder="Enter your phone"/>
                            </div>
                        </div>
                        <button className="hero-contact_btn">Сontact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;