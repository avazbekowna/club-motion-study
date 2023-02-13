import React from 'react';
import man from './../../img/Bitmap.png'
import {NavLink} from "react-router-dom";
const Study = () => {
    return (
        <>
            <div className="study-abroad">
                <div className="container">
                    <h1>Study Abroad
                        <div className='border'></div>
                    </h1>

                    <div className="content-study">
                        <div className="study-img">
                            <img src={man} alt=""/>
                            <div className='border-img'></div>
                        </div>
                        <div className="study-info">
                            <p>
                                <span>Motion study</span>  for International Education offers its clients various study abroad opportunities – language courses, secondary, professional and higher education, professional development programmes for teachers and specialists of companies and organizations.
                            </p>
                            <div className='info-our'>
                                <h2>Our partners include:</h2>
                                <p>
                                    -	Universities and higher education establishments. <br/>
                                    -	Private schools and colleges. <br/>
                                    -	State schools and colleges. <br/>
                                    -	World known language schools for adults. <br/>
                                    -	International language schools for 7-18 y.o. schoolchildren. <br/>
                                    -	Business schools <br/>
                                    -	Executive centres <br/>
                                    -	Summer camps <br/>
                                    -	Guardianship companies <br/>
                                </p>
                            </div>
                            <div className="button-study">
                                <NavLink to={'/Country'}><button>Explore</button></NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Study;