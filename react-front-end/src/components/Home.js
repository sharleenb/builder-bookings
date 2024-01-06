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
        <div class="home-image"></div>
          <div class="top">Find Your Brand New Home</div>
          <div class="middle">Sign up and get first VIP & Platinum access</div>
          <div class="bottom">
            <div class="modal">
            <button id="bottom-link" class="fa fa-paper-plane" onClick={openModal}>SIGN UP NOW</button>
            <SignUp isOpen={modalIsOpen} closeModal={closeModal}>
            </SignUp>
            </div>
          <a id="bottom-link" class="fa fa-home" href="#homes">
          VIEW HOMES</a>
          <a id="bottom-link" class="fa fa-building" href="#condos">
          VIEW CONDOS</a>
          </div>
        </div>
        <h1 class="home-title">Featured Pre-Construction Projects</h1>
          <div class="page-layout">
            <h2 class="home-title">
              <a id="homes" href='homes'>Homes Now Selling</a></h2>
            <div class="home-projects">
              {homes.map((project) => (
                <div
                  class="project-wrapper"
                  onClick={() => handleClick(project.id)}
                >
                  <img class="thumbnail-image" src={project.thumbnail} alt="thumbnail"/>
                  <div class="overlay">
                  <h4>{project.project_name}</h4>
                    <div className="status">{project.status}</div>
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
            <a id="view-more" class="fa fa-home" href="/homes">VIEW ALL HOMES</a>
          </div>
          
          <div class="page-layout">
            <h2 class="home-title">
              <a id="condos" href='condos'>Condos Now Selling</a></h2>
            <div class="home-projects">
              {condos.map((project) => (
                <div
                  class="project-wrapper"
                  onClick={() => handleClick(project.id)}
                >
                  <img class="thumbnail-image" src={project.thumbnail} alt="thumbnail"/>
                  <div class="overlay">
                  <h4>{project.project_name}</h4>
                    <div className="status">{project.status}</div>
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
            <a id="view-more" class="fa fa-building" href="/condos">VIEW ALL CONDOS</a>
          </div> 
        </div>
  );
}
