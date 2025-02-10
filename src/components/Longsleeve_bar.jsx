import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import SQLiteComponent from "../SQLiteComponent";


import Arrow from "../assets/arrow_left.png";
import Merch1 from "../assets/merch1.png";
import Merch2 from "../assets/merch2.png";
import Merch3 from "../assets/merch3.png";

import Shirt1_front from "../assets/shirtOne_front.png";
import Shirt1_back from "../assets/shirtOne_back.png";
import Shirt2_front from "../assets/shirtTwo_front.png";
import Shirt2_back from "../assets/shirtTwo_back.png";


import shirt5 from "../assets/shirt5.png"
import shirt7 from "../assets/shirt7.png"


import shirt5_back from "../assets/shirt5_back.png"
import shirt7_back from "../assets/shirt7_back.png"

import hoodie1 from "../assets/hoodie1.png"
import hoodie1_back from "../assets/hoodie1_back.png"
import hoodie2 from "../assets/hoodie2.png"
import hoodie2_back from "../assets/hoodie2_back.png"

import "./New_Shop_Bar.css";

export default function MenuBar() {
    const [isHovered, setIsHovered] = useState(false);

    const scrollHandler = (direction) => {
        console.log("Arrow clicked", direction);
        const menu = document.getElementById("menu_secc");
        const scrollAmount = 320;
        if (menu) {
            menu.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
        }
    };
    const navigate = useNavigate();
    

    const sqliteRef = useRef(null);
    
    const fetchItemNumber =  (itemId) => {
      if (sqliteRef.current && sqliteRef.current.fetchDataByText) {
        const numberValue =  sqliteRef.current.fetchDataByText(itemId);
        return numberValue;
      }
      return null;
    }; 
    
    
    const handleImageClick = async (id) => {
      // Set clicked item ID in localStorage
      localStorage.setItem("clickedItem", JSON.stringify(id));
      
      // Fetch inventory asynchronously and store it once fetched
      const inv = await fetchItemNumber(id);
  
      // Store the fetched inventory in localStorage if it's available
      if (inv !== null) {
          console.log("Storing inventory in localStorage:", inv); // Add log here
          localStorage.setItem("inventory", JSON.stringify(inv));
      }
  
      // Navigate to ShopDetails page
      navigate("/shopdetails");
    };

    

    return (
        <div className="shopBar">
          <SQLiteComponent ref={sqliteRef} />
          
            <img
                src={Arrow}
                alt="left arrow"
                className="left_arroww"
                id="left_arrow"
                onClick={() => scrollHandler("left")}
            ></img>
            
            <div className="menu_secc" id="menu_secc">
              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("shirt7")}>
                  <img src={shirt7} className="image-front" loading="lazy"/>
                  <img src={shirt7_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Stage Fright CD Zipup</p>

              </div>
              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("shirt1")}>
                  <img src={Shirt1_front} className="image-front" loading="lazy"/>
                  <img src={Shirt1_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Stage Fright Classic Longsleeve</p>

                
              </div>
              

              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("hoodie1")}>
                  <img src={hoodie1} className="image-front" loading="lazy"/>
                  <img src={hoodie1_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Ignition Themed Tour Hoodie</p>

              </div>

              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("hoodie2")}>
                  <img src={hoodie2} className="image-front" loading="lazy"/>
                  <img src={hoodie2_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Stage Fright Members Hoodie</p>

              </div>

              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("shirt5")}>
                  <img src={shirt5} className="image-front" loading="lazy"/>
                  <img src={shirt5_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Stage Fright Tour Longsleeve</p>

              </div>

              

              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("shirt2")}>
                  <img src={Shirt2_front} className="image-front" loading="lazy"/>
                  <img src={Shirt2_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Stage Fright Zip-Up Sweatshirt</p>

              </div>

              

              
              

                
            </div>
            
            <img
                src={Arrow}
                alt="right arrow"
                className="right_arroww"
                id="right_arrow"
                onClick={() => scrollHandler("right")}
            ></img>
            
        </div>
    );
}
