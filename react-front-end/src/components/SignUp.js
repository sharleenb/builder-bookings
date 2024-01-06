import React from "react";
import Modal from 'react-modal';

export default function SignUp({isOpen, closeModal}) {
  
  return (
    <div class="modal-comp">
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    closeTimeoutMS={300}
    contentLabel="Modal"
    style={{
      overlay: {
        zIndex: 102,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.5s ease'
      },
        content: { 
          position: 'static',
          maxWidth: '80%',
          width: 1040,
          height: 650,
          zIndex: 103,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.5s ease'
        },
      }}
    >
    <iframe title="sign-up" width="1040" height="650" src="https://5e2f5826.sibforms.com/serve/MUIFABviDckuFX0p305zegNzrwPvbOVh3185s52sfp0xdLMp0_e81IaoRC7lKQQYJOQdBlyuA0tYVqdNmxVofFw9Q9tJAuJWZ6YDUixLmUesp_AXLLrA3TN0mPBicy_iTV97OEPEnj1q52ivVgNVqB4EUw7BcxJg5DbgD2cIaBwkG4MtB-yspQ2FYgVT6SZrpzDTf06rLgLMQAJI" frameborder="0" scrolling="auto" allowfullscreen style={{position: 'absolute', 
      }} ></iframe>
    </Modal>
    </div>
    
  )
};
