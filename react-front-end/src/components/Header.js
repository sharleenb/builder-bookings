import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Header() {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    axios.get("/api/active-socials").then((result) => {
      setSocials(result.data);
    });
  });

  return (
    <>
      <div className="header-wrapper">
        <div className="contact-info">
          <span>1(289)630 - 4900</span>
          <span> || </span>
          <span id="email-link">
            <a class="email" href="mailto:info@builderbookings.ca">
              info@builderbookings.ca
            </a>
          </span>
        </div>

        <div className="socials">
          {socials.map((social) => (
            <a href={social.link_url} class={social.icon}> </a>
          ))}
        </div>
      </div>
      <div className="navigation">
        <a href="/">
          {" "}
          <img
            class="logo"
            src="logo.png"
            width={205}
            height={100}
            alt="logos"
          ></img>
        </a>

        <div className="links">
          <a href="/homes">
            <button className="nav-btn">
              Homes
            </button>
          </a>
          <a href="/condos">
            <button className="nav-btn">
              Condos
            </button>
          </a>
          <a href="/blogs">
            <button className="nav-btn">Blogs</button>
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
  );
}
