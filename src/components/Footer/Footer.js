import React from 'react';
import footerLogo from "./../../img/footer-logo.svg";
import {NavLink} from "react-router-dom";
import { BsYoutube} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {useEffect, useState} from "react";
import {FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 5800);
    }, []);

    return (
    <footer id="footer" style={{
        display: load? 'none' : 'block'
    }}>
        <div className="container">
            <div className="footer">
                <div className="footer-logo">
                    <img src={footerLogo} alt=""/>
                </div>
                <nav className="footer-nav">
                    <NavLink className="footer-nav_item" to={"/Home"}>
                        Home
                    </NavLink>
                    <NavLink className="footer-nav_item" to={"/About"}>
                        About Us
                    </NavLink>
                    <NavLink className="footer-nav_item" to={"/Study"}>
                        Study Abroad
                    </NavLink>
                    <NavLink className="footer-nav_item" to={"/Contacts"}>
                        Contacts
                    </NavLink>
                </nav>
                <div className="footer-icons">
                    <BsYoutube className="footer-icons_icon"/>
                    <FaTelegramPlane className="footer-icons_icon"/>
                    <AiFillInstagram className="footer-icons_icon"/>
                </div>
                <div className="footer-line"></div>
                <div className="footer-copyright">
                    <span>&copy; 2023 Motion Study LLC</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;