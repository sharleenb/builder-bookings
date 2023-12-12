import React from "react";

export default function Header() {
  return (
    <>
    <div className="header-wrapper">
      <div className="contact-info">
        <span>1(289)630 - 4900</span>
        <span> || </span>
        <span>
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
        <img class="logo" src="logo.png" width={125} height={80} alt="logos"></img>
        <div className="links">
        <a href="/homes">
          <button>Homes</button>
        </a>
        <a href="/condos">
          <button>Condos</button>
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
