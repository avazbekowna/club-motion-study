import React from 'react';
import university from  "./../../../img/university.png"
const ContactHero = () => {
    return (
        <>
            <div id="university">
                <div className="container">
                    <div className="university">
                        <h1 className="university--title">Solbrige University</h1>

                        <div className="university--block">
                            <div>
                                <img src={university} alt=""/>
                            </div>

                            <div className="blocks">
                                <div className="blocks--location">
                                    <h1> <span>Location : </span> Australia,Milan,Rim</h1>
                                </div>
                                <div className="blocks--location">
                                    <h1>  <span>Date of foundation : </span>1996</h1>
                                </div>

                                <div className="blocks--type">
                                    <h1>Type of programs  :  <span>Bachelor Course </span>  </h1>
                                    <p>Magistracy</p>
                                </div>

                                <div className="blocks--fashion">
                                    <h2> <span>Specialities  :</span>   Fashion and Design</h2>
                                    <div className="blocks--fashion--design">
                                        <p>Jewerly design</p>
                                        <p>Shoe design</p>
                                        <p>JInterior design</p>
                                        <p>Car design</p>
                                        <p>Photography</p>
                                    </div>
                                </div>

                                <div className="blocks--location">
                                    <h1> <span> Language : </span>   english,Italian</h1>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            
        </>
    );
};

export default ContactHero;