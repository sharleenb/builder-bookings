import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Header() {

  // need to figure out the styling for selected button
  
  const [style, setStyle] = useState("button");
  const [socials, setSocials] = useState([])
 
    const changeStyle = () => {
        console.log("you just clicked");
        if (style !== "button") {
        setStyle("button")
       } else {
        setStyle("props.selected")
      }
    };

  useEffect(() => {
    axios.get("/api/socials").then((result) => {
      setSocials(result.data)
    })
  })  


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
        {socials.map((social) => (
          <a href={social.link_url} class={social.icon}></a>
        ))}
      {/* <a href="https://www.facebook.com/builderbookings" class="fa fa-facebook"> </a>
      <a href="https://twitter.com/?lang=en" class="fa fa-twitter"> </a>
      <a href="https://www.instagram.com/" class="fa fa-instagram"> </a>
      <a href="https://www.youtube.com/" class="fa fa-youtube"> </a> */}
      </div>
    </div>
    <div className="navigation">
        <a href="/"> <img class="logo" src="logo.png" width={205}
          height={100} alt="logos"></img>
        </a>
        
        <div className='links'>
        <a href="/homes">
          <button className="nav-btn" onClick={() => changeStyle}>Homes</button>
        </a>
        <a href="/condos">
          <button className="nav-btn" onClick={() => changeStyle}>Condos</button>
        </a>
        <a href="/team">
          <button className="nav-btn">Team</button>
        </a>
        <a href="/guide">
          <button className="nav-btn">Quick Guide</button>
        </a>
        <a href="/contact">
          <button className="nav-btn">Contact</button>
        </a>
        </div>
      </div>
    </>
  )
};
