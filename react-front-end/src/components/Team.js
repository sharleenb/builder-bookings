import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Team() {
  const [members, setMembers] = useState([]);
  const [memberTypes, setMemberTypes] = useState([]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/member/${id}`);
  }; 

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
        <h1 class="page-title">Meet our Team!</h1>
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
        <div class="member-container" onClick={() => handleClick(member.id)}>
        <div className="image-container"> 
        <img src={member.photo_url} className="member-photo" alt="member"></img>
        <figcaption>
       <h4>{member.name}</h4>
        <div>{member.designation}</div>
       </figcaption>
        <div class="overlay">
        <h2>{member.name}</h2>
        <span>{member.member_type}</span>
        <span>{member.phone}</span>
        <span>{member.email}</span>
        <span>Languages Spoken: {member.languages}</span>
        <span>View More</span>
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
