/* eslint-disable react/jsx-no-undef */
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../img/Logo.png";
import { CiSearch } from "react-icons/ci";
import {useEffect, useState} from "react";
import Home_form from "../Home/Home_form/Home_form";
import Home from "../Home/Home";

const Header = () => {
  const [load, setLoad] = useState(true)
const [accord, setAccord] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 5800);
  }, []);

  return (
    <header id="header" style={{
      display: load? 'none' : 'block'
    }}>
      <div className="container">
        <div className="header">
          <div className="header_logo">
            <NavLink to={"/"}>
              <img src={Logo} />
            </NavLink>
          </div>
          <div className="header_right">
            <nav className="header_right-nav">
              <NavLink className="header_right-nav_item" to={"/Home"}>
                Home
              </NavLink>
              <NavLink className="header_right-nav_item" to={"/About"}>
                About Us
              </NavLink>
              <NavLink className="header_right-nav_item" to={"/Study"}>
                Study Abroad
              </NavLink>
              <NavLink  className="header_right-nav_item" to={"/"}>
                Contacts
              </NavLink>

            </nav>
           <NavLink to={'/Country'}> <form onClick={()=> setAccord(!accord)} className="header_right-search">
              <CiSearch className="header_right-search_icon" />
              <input  type="text" placeholder="Поиск..."/>
                     {
                accord ? <div className="search-study">
                  <div className="search_content">
                    <p>United States</p>
                    <p>Korea</p>
                    <p>Australia</p>
                    <p>Malaysia</p>
                    <p>Germany</p>
                  </div>
                </div> :
                    ''
                     }

            </form></NavLink>
            <div className="header_right-langs">
              <select className='language'>
                <option>ENG</option>
                <option>RU</option>
                <option>KG</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
