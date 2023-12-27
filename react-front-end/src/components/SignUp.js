import React from "react";
import Modal from 'react-modal';

export default function SignUp({isOpen, closeModal}) {
  
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Modal">
      <button onClick={closeModal}>Close</button>
      <h2>Sign Up</h2>
      <p>Request more information on any projects. Our Agent will call you shortly with details.</p>
      <form class="sign-up" method="post">
      <input type="text" name="name" id="name" placeholder="Full Name" required></input>
      <input type="email" name="email" id="email" placeholder="Your Email" required></input>
      <input type="phone" name="phone" id="phone" placeholder="(905) XXX XXXX" required></input>
      <div class="realtor">
      <p>Are you a Realtor?</p>
      <label><input type="radio" name="radio" value="Yes"/>Yes</label>
      <label><input type="radio" name="radio" value="No"/>No</label>
      </div>
      <textarea type="text" rows="6" cols="80" placeholder="Please provide more details"></textarea>
      </form>
    </Modal>
  )
};
