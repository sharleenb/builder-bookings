import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Team() {
  const [members, setMembers] = useState([]);
  const [memberTypes, setMemberTypes] = useState([]);

  useEffect(() => {
    axios.get('/api/members')
    .then((result) => {
      setMembers(result.data)
    })
  }, [])
  
  useEffect(() => {
    axios.get('/api/member-types')
    .then((result) => {
      setMemberTypes(result.data.map((type) => type.member_type))
    })
  }, [])

  return (
    <div className="page-layout">
      <div className="team-header">
        <h1>Meet our Team!</h1>
      </div>
      <div>
        <h3>Who We Are?</h3>

        <p>We are a Team that specialize in locating the brand new pre-construction opportunities in the Ontario . We ensure that our clients get the best deal in the booming area and we find the most profitable projects for our clients.
        </p>
        <p> Builderbookings.ca is here for you! From the very first step to until the closing and thereafter we value your business and take you through a very smooth ride so you have the best experience by the end of the journey. We donot represent builders, we represent YOU! </p>

      <div class="member-section">
      {memberTypes.map((memberType) => (
        <div class="member-type">
        <h3>{memberType}</h3>
        <div class="type-container">
        {members
        .filter((member) => member.member_type === memberType)
        .map((member) => (
        <div class="member-container">
        <div className="image-container"> 
        <img src={member.photo_url} className="member-photo" alt="member"></img>
        <figcaption>
       <div>{member.name}</div>
        <div>{member.designation}</div>
       </figcaption>
        <div class="overlay">
        <p>{member.member_type}</p>
        <p>{member.phone}</p>
        <p>{member.email}</p>
        <p>Languages Spoken: {member.languages}</p>
        <p>View More</p>
        </div>
      </div>
      </div>
        ))}
      </div>
      </div>
        ))}   
      </div>
      </div>
    </div>
  )
};
