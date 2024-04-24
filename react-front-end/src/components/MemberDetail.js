import React from "react";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MemberDetail() {
  const [member, setMember] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get('/api/members')
    .then((result) => {
      setMember(result.data.find((member) => member.id === Number(id)));
    })
  }, [])

  return (
    <div class="page-layout">
      <div className="member-page">
      <img src={`/uploads/${member.photo_url}`} className="member-image" alt="member"></img>
      <div className="member-details">
        <h1>{member.name}</h1>
        <span>Designation: {member.designation}</span>
        <span>Agent Type: {member.member_type}</span>
        <span>Phone Number: {member.phone}</span>
        <span>Email: {member.email}</span>
        <span>Languages Spoken: {member.languages}</span>
        <p>{member.about}</p>
      </div>  
      </div>
    </div>
  )
};
