import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

export default function Home() {
  const [homes, setHomes] = useState([]);
  const [condos, setCondos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  useEffect(() => {
    axios.get("/api/five/homes").then((result) => {
      setHomes(result.data);
    });
  }, [homes]);

  useEffect(() => {
    axios.get("/api/five/condos").then((result) => {
      setCondos(result.data);
    });
  }, [condos]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div>
      <div class="home-container">
        <img src="http://builderbookings.ca/wp-content/uploads/2019/12/thumb-1920-942321.jpg" class="home-image" alt="home-image"></img>
          <div class="top">Find Your Brand New Home</div>
          <div class="middle">Sign up and get first VIP & Platinum access</div>
          {/* pop up modal for sign up link */}
          <div class="bottom">
            <div class="modal">
            <button id="bottom-link" class="fa fa-paper-plane" onClick={openModal}>SIGN UP NOW</button>
            <SignUp isOpen={modalIsOpen} closeModal={closeModal}>
              <p> Modal content here</p>
            </SignUp>
            </div>
          <a id="bottom-link" class="fa fa-home" href="#homes">
          VIEW HOMES</a>
          <a id="bottom-link" class="fa fa-building" href="#condos">
          VIEW CONDOS</a>
          </div>
        </div>
        
          <div>
            <h4>
              <a id="homes">Homes</a></h4>
            <div class="projects">
              {homes.map((project) => (
                <div
                  class="project-wrapper"
                  onClick={() => handleClick(project.id)}
                >
                  <img class="thumbnail-image" src={project.thumbnail} />
                  <div class="overlay">
                    <div>{project.project_name}</div>
                    <div>{project.status}</div>
                    <div>{project.price}</div>
                    <div>
                      {project.address} {project.city}, {project.province}
                    </div>
                  </div>
                  <figcaption class="project-caption">
                    <div class="project-name">{project.project_name}</div>
                    <div>
                      {project.city}, {project.province}
                    </div>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4>
              <a id="condos">Condos</a></h4>
            <div class="projects">
              {condos.map((project) => (
                <div
                  class="project-wrapper"
                  onClick={() => handleClick(project.id)}
                >
                  <img class="thumbnail-image" src={project.thumbnail} />
                  <div class="overlay">
                    <div>{project.project_name}</div>
                    <div>{project.status}</div>
                    <div>{project.price}</div>
                    <div>
                      {project.address} {project.city}, {project.province}
                    </div>
                  </div>
                  <figcaption class="project-caption">
                    <div class="project-name">{project.project_name}</div>
                    <div>
                      {project.city}, {project.province}
                    </div>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
        </div>
  );
}
