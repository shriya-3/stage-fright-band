import React from "react";
import { Link, useNavigate } from "react-router-dom";


import Arrow from "../assets/arrow_left.png";


import Merch1 from "../assets/merch1.png"
import Merch2 from "../assets/merch2.png"
import Merch3 from "../assets/merch3.png"

import toteOne from "../assets/toteOne.png"
import toteTwo from "../assets/toteTwo.png"
import cap_front from "../assets/cap_front.png"
import cap_back from "../assets/cap_back.png"
import tokens from "../assets/tokens.png"
import bundle_back from "../assets/bundle_back.png"
import bundle_front from "../assets/bundle_front.png"
import fanny_front from "../assets/fanny_front.png"
import fanny_back from "../assets/fanny_back.png"

import album1 from "../assets/albums.png"
import album2 from "../assets/middle_alb.png"
import album3 from "../assets/albums (3).png"
import album4 from "../assets/album4 (1).png"

import record1 from "../assets/record1.png"
import record2 from "../assets/record2.png"
import record3 from "../assets/record3.png"

import "./Shop_Bar.css";

export default function menuBar() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top
};
    const scrollHandler = (direction) => {
        console.log("Arrow clicked", direction);
        const menu = document.getElementById("menu_sec");
        const scrollAmount = 400;
        if (menu) {
            menu.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
        }
    };
    


  return (
    <div className="menuBar">
        <img
            src={Arrow}
            alt="left arrow"
            className="left_arrow"
            id="left_arrow"
            onClick={() => scrollHandler("left")}
        ></img>
      <div className="menu_sec" id="menu_sec">
        
        <div className="card1" onClick={() => handleNavigate("/shop")}>
          
            <img src={Merch2} alt="Specials" loading="lazy" onClick={() => handleNavigate("/shop")}></img>
          
        </div>
        <div className="card1">
        
          <img src={Merch1} loading="lazy" onClick={() => handleNavigate("/shop")} alt="Appetizers" />
          
        
        </div>
        <div className="card1">
        
          <img src={Merch3} alt="Burgers" loading="lazy" onClick={() => handleNavigate("/shop")}></img>
        
        </div>
        <div className="card1">
          
            <img src={cap_front} alt="Pizza" loading="lazy" onClick={() => handleNavigate("/shop")}></img>
          
        </div>
        <div className="card1">
          
            <img src={tokens} alt="Tex" loading="lazy" onClick={() => handleNavigate("/shop")}></img>
          
        </div>
        <div className="card1">
          
            <img src={fanny_front} alt="Deserts" loading="lazy" onClick={() => handleNavigate("/shop")} ></img>
          
        </div>
        <div className="card1">
          
            <img src={bundle_front} alt="Drinks" loading="lazy" onClick={() => handleNavigate("/shop")} ></img>
          
        </div>
        <div className="card1">
          
            <img src={toteTwo} alt="Sides" loading="lazy" onClick={() => handleNavigate("/shop")}></img>
          
        </div>
        <h5 className="border"></h5>
      </div>

      
      <img
        src={Arrow}
        alt="right arrow"
        className="right_arrow"
        id="right_arrow"
        onClick={() => scrollHandler("right")}
      ></img>
    </div>
  );
}