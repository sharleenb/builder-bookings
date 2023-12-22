import React from "react";
import Modal from 'react-modal';

export default function SignUp({isOpen, closeModal, children}) {
  
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Modal" >
      <button onClick={closeModal}>Close</button>
      {children}
    </Modal>
  )
};
