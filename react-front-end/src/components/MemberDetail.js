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
      <img src={`/uploads/${member.thumbnail}`} className="member-image" alt="member"></img>
      <div className="member-details">
        <h1>{member.name}</h1>
        <span><strong>Designation:</strong> {member.designation}</span>
        <span><strong>Agent Type:</strong> {member.member_type}</span>
        <span><strong>Phone Number:</strong> {member.phone}</span>
        <span><strong>Email:</strong> {member.email}</span>
        <span><strong>Languages Spoken:</strong> {member.languages}</span>
        <p>{member.about}</p>
      </div>  
      </div>
    </div>
  )
};
