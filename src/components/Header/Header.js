/* eslint-disable react/jsx-no-undef */
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../../img/Logo.png";
import { CiSearch } from "react-icons/ci";
import {useEffect, useState} from "react";
import Home_abouts from "../Home/Home_abouts/Home_abouts";
import HomeAbouts from "../Home/Home_abouts/Home_abouts";
import BurgerMenu from "./Burger_menu";

const Header = () => {
  const [load, setLoad] = useState(true)
  const [contact,setContact] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 5800);
  }, []);

  return (
    <>
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
                <NavLink className="header_right-nav_item"
                         to={"/Home"}>
                  Contacts
                </NavLink>
              </nav>
              <form className="header_right-search">
                <CiSearch className="header_right-search_icon" />
                <input type="text" placeholder="Поиск..." />
              </form>
              <div className="header_right-langs">
                <select>
                  <option>ENG</option>
                  <option>RU</option>
                  <option>KG</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>
      <BurgerMenu/>

    </>
  );
};

export default Header;
