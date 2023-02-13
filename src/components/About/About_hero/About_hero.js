import React from 'react';
import about1 from "../../../img/about1.png"

const AboutHero = () => {
    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="best">
                        <div className="about">
                            <div className="about--us">
                                <div className="about--us--us1"></div>
                                <div className="about--us--person">
                                    <img src={about1} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="education">
                            <span>About Us</span>
                            <h1>Best Education
                                Platform</h1>
                            <h2>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</h2>
                            <h3>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle.</h3>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default AboutHero;