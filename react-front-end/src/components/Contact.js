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
      <div class="contact-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23073.256092529264!2d-79.787891!3d43.707286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b142d71638999%3A0x292c9627cbb32680!2sRoyal%20LePage%20Credit%20Valley%20Real%20Estate!5e0!3m2!1sen!2sus!4v1703629243852!5m2!1sen!2sus" height={300} border={0} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
};
