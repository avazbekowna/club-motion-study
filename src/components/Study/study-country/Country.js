import React, {useState} from 'react';
import {HiOutlineChevronDown, HiOutlineChevronUp} from "react-icons/hi";
import britain from './../../../img/Ellipse 12.png'
import america from './../../../img/image 98.png'
import austria from './../../../img/Ellipse 12 (1).png'
import german from './../../../img/Ellipse 12 (2).png'
import holland from './../../../img/Ellipse 12 (3).png'
import ireland from './../../../img/Ellipse 12 (4).png'
import spain from './../../../img/Ellipse 12 (5).png'
import italy from './../../../img/Ellipse 12 (6).png'
import canada from './../../../img/Ellipse 12 (7).png'
import cyprus from './../../../img/Ellipse 12 (8).png'
import china from './../../../img/Ellipse 12 (9).png'
import latvia from './../../../img/Ellipse 12 (10).png'
import {NavLink} from "react-router-dom";

const Country = () => {
    const [country, setCountry] = useState([])
    const [label, setLabel] = useState([])
    const [language, setLanguage] = useState([])
    return (
        <>
            <div className="Country" id="Country">
                <div className="container">
                    <div className="content-country">
                        <h1>Choose the country</h1>
                        <div className="country-accordion">
                            <div className="country-item">

                                <input className='country-input' type="checkbox"  name='country1' id='country-1'/>
                                <label onClick={()=> setCountry(!country)} className='country-title' htmlFor='country-1'><h3>Higher Education</h3>
                                    {
                                        country ? <HiOutlineChevronDown className='down'/> :
                                            <HiOutlineChevronUp className='up'/>

                                    }

                                </label>

                                <div className="country-text">
                                    <div className="text-p">
                                        <p>Secondary Education</p>
                                        <p>Higher Education</p>
                                        <p>language courses for youth</p>
                                        <p>children's language camps</p>
                                    </div>

                                </div>
                            </div>
                            <div className="country-item">
                                <input className='country-input' type="checkbox" name='country2' id='country-2'/>
                                <label onClick={()=> setLabel(!label) } className='country-title' htmlFor='country-2'><h3>specialization</h3>
                                    {
                                        label ? <HiOutlineChevronDown className='down'/>  :
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
                            <div className="country-item">
                                <input className='country-input' type="checkbox" name='country3' id='country-2'/>
                                <label onClick={()=> setLanguage(!language) } className='country-title' htmlFor='country-3'><h3>Countries</h3>
                                    {
                                        language ? <HiOutlineChevronDown className='down'/>  :
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
                        <div className="country-flag">
                            <div className="content-flag">
                                <div className="flag-info">
                                    <div className="img-info">
                                        <NavLink to={'/United'}><img src={america} alt=""/></NavLink>
                                        <p>America</p>
                                        <p className='adaptation'>higher education in AMERICA</p>
                                    </div>
                                </div>
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={britain} alt=""/>
                                        <p>Great Britain</p>
                                        <p className='adaptation'>higher education in the UK</p>
                                    </div>
                                </div>
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={austria} alt=""/>
                                        <p>Austria</p>
                                        <p className='adaptation'>higher education in AUSTRALIA</p>
                                    </div>
                                </div>
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={german} alt=""/>
                                        <p>Germany</p>
                                        <p className='adaptation'>higher education in GERMANY</p>
                                    </div>
                                </div>

                            </div>
                            <div className="content-flag">
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={holland} alt=""/>
                                        <p>Holland</p>
                                        <p className='adaptation'>higher education in HOLLAD</p>
                                    </div>
                                </div>
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={ireland} alt=""/>
                                        <p>Ireland</p>
                                        <p className="adaptation">higher education in IRELAND</p>
                                    </div>

                                </div>
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={spain} alt=""/>
                                        <p>Spain</p>
                                        <p className="adaptation">higher education in SPAIN</p>
                                    </div>

                                </div>
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={italy} alt=""/>
                                        <p>Italy</p>
                                        <p className='adaptation'>higher education in ITALY</p>
                                    </div>

                                </div>

                            </div>
                            <div className="content-flag">
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={canada} alt=""/>
                                        <p>Canada</p>
                                        <p className="adaptation">higher education in CANADA</p>
                                    </div>

                                </div>
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={cyprus} alt=""/>
                                        <p>Cyprus</p>
                                        <p className="adaptation">higher education in CUPRIS</p>
                                    </div>
                                </div>
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={china} alt=""/>
                                        <p>China</p>
                                        <p className="adaptation">higher education in China</p>
                                    </div>
                                </div>
                                <div className="flag-info">
                                    <div className="img-info">
                                        <img src={latvia} alt=""/>
                                        <p>Latvia</p>
                                        <p className="adaptation">higher education in China</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Country