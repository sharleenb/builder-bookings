import React from "react";

export default function Contact() {
  return (
    <div class='page-layout'>
      <h2>Contact</h2>
      <div class='contact-page'>
      <div class="contact-form">
        <h4>Let's get in touch.</h4>
        <form class='contact-form'>
          <label>Your Name (required)</label>
          <input></input>
          <label>Your Email (required)</label>
          <input></input>
          <label>Subject</label>
          <input></input>
          <label>Your Message</label>
          <textarea></textarea>
          <input type="submit"></input>
        </form>
      </div>
      <div class="agent-list">
        <h4>Agents</h4>
        <div>ALI SYED</div>
        <div>Sales Representative</div>
        <div>(647) 221 4949</div>
        <br></br>
        <div>Royal LePage Credit Valley Real Estate</div>
        <div>1-10045 Hurontario St, Brampton, ON L6Z 0E6</div>
        <div>info@builderbookings</div>
      </div>
      </div>
    </div>
  )
};
