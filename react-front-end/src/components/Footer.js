import React from "react";

export default function Footer() {
  return (
    <div class="page-layout">
      <div class="newsletter">
        <div class="newsletter-p">
          <p class="fa fa-paper-plane"></p>
          <p>
            <strong>Sign up to get first access</strong>
          </p>
          <p>You will be notified as soon as new listings are added</p>
        </div>

        <iframe
          title="subscription-form"
          height="190"
          src="https://5e2f5826.sibforms.com/serve/MUIFANKUyIiGzDENM3yqSqvA96xbLshQYlnOj8AJYrN35PZrc0qmX5NNkorU-tUxZva1utESqAJl-m37U0nxkSuLkEgZHGkJeqWhSV4amptq7U_9ahQY0PqwvSM6rpgTA89OywKKuRi41yG_XFW0wtRUHy4KeT4RK8HaOcmqS4sBOMNRzgxEnqhIBlZxY8sQ6kVEPhdJr30MupzG"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
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
          <h4 class="footer-title">QUICK LINKS</h4>
          <a href="/terms">Terms of Use</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </div>

        <div class="footer-contact">
          <h4 class="footer-title">CONTACT US</h4>
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
