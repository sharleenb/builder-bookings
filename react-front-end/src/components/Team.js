import React from "react";

export default function Team() {
  return (
    <div className="team-page">
      <div className="team-header">
        <h1>Meet our Team!</h1>
      </div>
      <div>
        <h3>Who We Are?</h3>

        <p>We are a Team that specialize in locating the brand new pre-construction opportunities in the Ontario . We ensure that our clients get the best deal in the booming area and we find the most profitable projects for our clients.
        </p>
        <p>
        Builderbookings.ca is here for you! From the very first step to until the closing and thereafter we value your business and take you through a very smooth ride so you have the best experience by the end of the journey. We donot represent builders, we represent YOU!
        </p>

        <h3>Real Estate Experts</h3>
        <div className="image-container"> 
        <img src="AliSyed.jpeg" width='250' height='300' className="member-photo" alt="member"></img>
        <div className="overlay-text">
          <p>Ali Syed <br></br> 
            Sales Representative</p>
        </div>
        </div>
        <h3>Mortgage Specialists</h3>
        <h3>Lawyers</h3>
      </div>
    </div>
  )
};
