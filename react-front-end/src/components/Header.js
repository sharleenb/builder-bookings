import React from "react";
import Button from "./Button"
import { useState } from "react";

export default function Header() {

  // need to figure out the styling for selected button
  
  const [style, setStyle] = useState("button");
 
    const changeStyle = () => {
        console.log("you just clicked");
        if (style !== "button") {
        setStyle("button")
       } else {
        setStyle("props.selected")
      }
    };


  return (
    <>
    <div className="header-wrapper">
      <div className="contact-info">
        <span>1(289)630 - 4900</span>
        <span> || </span>
        <span id='email-link'>
        <a class="fa" href="mailto:info@builderbookings.ca">info@builderbookings.ca</a>
        </span>
      </div>
      <div className="socials">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-youtube"></a>
      </div>
    </div>
    <div className="navigation">
        <a href="/"> <img class="logo" src="logo.png" width={125} height={80} alt="logos"></img>
        </a>
        
        <div className='links'>
        <a href="/homes">
          <Button className={style} onClick={() => changeStyle}>Homes</Button>
        </a>
        <a href="/condos">
          <button className={style} onClick={() => changeStyle}>Condos</button>
        </a>
        <a href="/team">
          <button>Team</button>
        </a>
        <a href="/guide">
          <button>Quick Guide</button>
        </a>
        <a href="/contact">
          <button>Contact</button>
        </a>
        </div>
      </div>
    </>
  )
};
