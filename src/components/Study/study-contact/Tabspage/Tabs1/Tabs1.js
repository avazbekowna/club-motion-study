import React from 'react';
import tabs1 from "../../../../../img/tabs1.png"
import calendar1 from "../../../../../img/calendar1.png"
import calendar2 from "../../../../../img/calendar2.png"
import {MdError} from "react-icons/md";
import {FaInstagramSquare, FaTelegram} from "react-icons/fa";
import {RiWhatsappFill} from "react-icons/ri";
import {AiFillInstagram} from "react-icons/ai";

const Tabs1 = () => {
    return (
        <>
            <div id="description">
                <div className="big-dec">
                    <div className="big-dec--first">

                        <div className="description">
                            <div>
                                <img src={tabs1} alt=""/>
                            </div>
                            <div className="lands">
                                <h1>landscape design</h1>
                                <p>University of Fashion and Design</p>
                            </div>
                        </div>

                        <div className="big-dec--first--ect">
                           <div>
                               <h1>Nominal duration: <span>   4.5 years(240 ECTS)</span></h1>
                           </div>
                            <div className="awards">
                                <h1>Awards:</h1>
                                <div>
                                    <p><span>B.Sc.</span> (Professional Bachelor’s  <br/>
                                        degree in Business <br/>
                                        Management, qualification: <br/>
                                        Business Manager or E- <br/>
                                        Business Manager)</p>
                                </div>
                            </div>
                            <div className="line-dec"></div>

                            <div className="application">
                                <div className="application--block1">
                                    <h2>Tuition fee:</h2>
                                    <h3>Application fee:</h3>
                                    <h4>Registration fee:</h4>
                                </div>

                                <div className="application--block2">
                                    <h2> <span>€1,400 </span>per semester <br/>
                                       <span> US$1,502.87</span></h2>

                                    <div className="semester"></div>
                                    <h3>€120 one-time <br/>
                                        US$128.83</h3>
                                    <div className="semester"></div>
                                    <h4>US$150 one-time</h4>

                                    <h5>
                                        You need to choose student status: <br/>
                                        Base – 150 USD <br/>
                                        Standard – 500 USD <br/>
                                        VIP – 900 USD <br/>
                                    </h5>


                                </div>


                            </div>
                            <div className="line-dec2"></div>

                            <div className="entry-block">
                                <div className="entry-block--high1">
                                    <h2>Tuition fee:</h2>
                                    <h3>Entry qualication:</h3>
                                </div>

                                <div className="entry-block--high2">
                                    <h2>High school / secondary education (or higher)</h2>
                                    <h3>Completed Secondary Education ( 12 years, in some countries 11 years)</h3>

                                    <div className="sem2"></div>
                                    <h4>The entry qualification documents are accepted in the following languages: English / Lithuanian.Often you can get a suitable transcript from your school. If this is not the case, you will need official translations along with verified copies of the original.</h4>
                                </div>
                            </div>



                        </div>

                    </div>

                    <div className="apply">
                        <button className="apply--now">Apply Now!!! <span> Fall semester 2023</span></button>
                        <div className="apply--pre">
                            <div className="apply--pre--block1">
                                <div className="pre1">
                                    <img src={calendar1} alt=""/>
                                </div>
                                <div className="pre1">
                                    <img src={calendar1} alt=""/>
                                </div>
                                <div className="pre2">
                                    <img src={calendar2} alt=""/>
                                </div>
                            </div>

                            <div className="apply--pre--block2">
                                <h2> <span>Pre-deadline</span> <br/>
                                    20 Jun 2023, 23:59:59Eastern European Time <br/>
                                </h2>
                                <h5> Please ask your manager in <br/> Baltic Center about correct deadline for your country</h5>
                                <h3> <span>Application deadline</span> <br/>
                                    31 Aug 2023, 23:59:59Eastern <br/> European Time
                                </h3>
                                <h6> Autumn Intake</h6>
                                 <h4>Studies commence</h4>
                                <h1> 4 Sept 2023</h1>

                            </div>
                        </div>
                        <button className="apply--now2">Apply Now!!! <br/>
                            <span> Fall semester 2023</span></button>

                        <div className="apply--error">
                            <h1> <MdError/> Application period has ended</h1>

                            <div className="apply--error--block1">
                                <div className="error1">
                                    <img src={calendar2} alt=""/>
                                </div>
                                <div>
                                    <h2><span>Studies commence</span>
                                        <br/>
                                        6 Feb 2023</h2>
                                </div>

                            </div>

                            <div>


                            </div>

                        </div>
                        <div className="apply--line"></div>

                        <div className="apply--share">
                            <h1>Share on:</h1>

                            <div className="apply--share--icons">
                               <div className="icon1">
                                   <RiWhatsappFill/>
                               </div>
                                <div className="icon2">
                                   <AiFillInstagram/>
                                </div>
                              <div className="icon3">
                                  <FaTelegram/>
                              </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>
    );
};

export default Tabs1;