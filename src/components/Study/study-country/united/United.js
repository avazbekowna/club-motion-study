import React, {useState} from 'react';
import {HiOutlineChevronDown, HiOutlineChevronUp} from "react-icons/hi";
import solbrige from './../../../../img/Frame 141.png'
import trobe from './../../../../img/Frame 141 (1).png'
import tsi from './../../../../img/Frame 141 (2).png'
import solbrige2 from './../../../../img/Frame 141 (3).png'
import edith from './../../../../img/Frame 141 (4).png'
import dcu from './../../../../img/Frame 141 (5).png'
import cowan from './../../../../img/Frame 141 (6).png'
import {CiLocationOn} from "react-icons/ci";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const United = () => {
    const [accord, setAccord] = useState([])
    const [accord1, setAccord1] = useState([])
    const navigate  = useNavigate()

    return (
        <>
            <div className="united">
                <div className="container">
                    <h1>United Stated</h1>
                    <div className="content-united">
                        <div className="country-accordion1">
                            <div className="country-item" >

                                <input className='country-input' type="checkbox"  name='country1' id='country-1'/>
                                <label  onClick={()=> setAccord(!accord)} className='country-title' htmlFor='country-1'><h3>Higher Education</h3>
                                    {
                                        accord ?    <HiOutlineChevronDown className='down'/>
                                            :
                                            <HiOutlineChevronUp className='up'/>
                                    }

                                </label>

                                <div className="country-text" >
                                    <div className="text-p">
                                        <p>Higher Education</p>
                                        <p>language courses for youth</p>
                                        <p>children's language camps</p>
                                    </div>

                                </div>
                            </div>
                            <div className="country-item1">
                                <input className='country-input' type="checkbox" name='country2' id='country-2'/>
                                <label onClick={()=> setAccord1(!accord1)} className='country-title' htmlFor='country-2'><h3>specialization</h3>
                                    {
                                        accord1 ?  <HiOutlineChevronDown className='down'/> :
                                            <HiOutlineChevronUp className='up'/>
                                    }


                                </label>

                                <div className="country-text">
                                    <p>IT technologies</p>
                                    <p>Business</p>
                                    <p>Medicine</p>
                                    <p>international Relationship</p>
                                    <p>Tourism</p>
                                </div>
                            </div>
                        </div>
                        <div className="university">
                            <div className="university-type" onClick={() => navigate('/Contacts')} >

                                <div className="image-university">
                                    <img src={solbrige} alt=""/>
                                </div>
                                <div className="name-univer">
                                    <p>Name:</p>
                                    <span>Solbrige University</span>
                                </div>
                                <div className="location-univer">
                                    <div className="location">
                                        <p>Location</p>
                                        <CiLocationOn className='log'/>
                                    </div>
                                    <span>Perth</span>
                                </div>
                                <div className="age-univer">
                                    <p className='age'>Age:</p>
                                    <p>From 16</p>
                                </div>
                            </div>
                            <div className="university-type">

                                <div className="image-university">
                                    <img src={trobe} alt=""/>
                                </div>
                                <div className="name-univer">
                                    <p>Name:</p>
                                    <span>La Trobe University</span>
                                </div>
                                <div className="location-univer">
                                    <div className="location">
                                        <p>Location</p>
                                        <CiLocationOn className='log'/>
                                    </div>
                                    <span>Piga</span>
                                </div>
                                <div className="age-univer">
                                    <p className='age'>Age:</p>
                                    <p>From 16</p>
                                </div>
                            </div>
                            <div className="university-type3">

                                <div className="image-university">
                                    <img src={tsi} alt=""/>
                                </div>
                                <div className="name-univer">
                                    <p>Name:</p>
                                    <span>TSI University</span>
                                </div>
                                <div className="location-univer">
                                    <div className="location">
                                        <p>Location</p>
                                        <CiLocationOn className='log'/>
                                    </div>
                                    <span>Piga</span>
                                </div>
                                <div className="age-univer">
                                    <p className='age'>Age:</p>
                                    <p>From 16</p>
                                </div>
                            </div>
                            <div className="university-type">

                                <div className="image-university">
                                    <img src={solbrige2} alt=""/>
                                </div>
                                <div className="name-univer">
                                    <p>Name:</p>
                                    <span>Solbrige University</span>
                                </div>
                                <div className="location-univer">
                                    <div className="location">
                                        <p>Location</p>
                                        <CiLocationOn className='log'/>
                                    </div>
                                    <span>Perth</span>
                                </div>
                                <div className="age-univer">
                                    <p className='age'>Age:</p>
                                    <p>From 16</p>
                                </div>
                            </div>
                            <div className="university-type5">

                                <div className="image-university">
                                    <img src={edith} alt=""/>
                                </div>
                                <div className="name-univer">
                                    <p>Name:</p>
                                    <span>Edith University</span>
                                </div>
                                <div className="location-univer">
                                    <div className="location">
                                        <p>Location</p>
                                        <CiLocationOn className='log'/>
                                    </div>
                                    <span>Melbourne</span>
                                </div>
                                <div className="age-univer">
                                    <p className='age'>Age:</p>
                                    <p>From 16</p>
                                </div>
                            </div>
                            <div className="university-type6">

                                <div className="image-university">
                                    <img src={dcu} alt=""/>
                                </div>
                                <div className="name-univer">
                                    <p>Name:</p>
                                    <span>DCU University</span>
                                </div>
                                <div className="location-univer">
                                    <div className="location">
                                        <p>Location</p>
                                        <CiLocationOn className='log'/>
                                    </div>
                                    <span>Perth</span>
                                </div>
                                <div className="age-univer">
                                    <p className='age'>Age:</p>
                                    <p>From 16</p>
                                </div>
                            </div>
                            <div className="university-type7">

                                <div className="image-university">
                                    <img src={cowan} alt=""/>
                                </div>
                                <div className="name-univer">
                                    <p>Name:</p>
                                    <span>cowan University</span>
                                </div>
                                <div className="location-univer">
                                    <div className="location">
                                        <p>Location</p>
                                        <CiLocationOn className='log'/>
                                    </div>
                                    <span>Boston</span>
                                </div>
                                <div className="age-univer">
                                    <p className='age'>Age:</p>
                                    <p>From 16</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default United;