import React from "react";

export default function Footer() {
  return (
    <div class="page-layout">
      <div class="newsletter">
        <i class="fa-solid fa-paper-plane"></i>
        <p>Sign up to get first access <br></br> You will be notified as soon as new listings are added</p>
        <div class='subscribe'>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          required
        ></input>
        <input type="submit" value="Subscribe"></input>
        </div>
       
      </div>

      <div class="footer-details">
        <img
          class="logo"
          src="logo.png"
          width={205}
          height={100}
          alt="logos"
        ></img>
        <div class="quick-links">
          <h4>Quick Links</h4>
          <a href="/terms">Terms of Use</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </div>

        <div class="footer-contact">
          <h4>Contact Us</h4>
          <span>1-10045 Hurontario St, Brampton, ON</span>
          <span>Phone: +1 (905) 793 - 5000</span>
          <span>Mobile: +1 (647) 221 - 4949</span>
          <span>Fax: +1 (905) 793 - 5020</span>
          <span>
            {" "}
            Email:
            <a href="mailto:info@builderbookings.ca">
              info@builderbookings.ca
            </a>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
