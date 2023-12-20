import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [homes, setHomes] = useState([]);
  const [condos, setCondos] = useState([]);

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
      <div>
        <img
          src="http://builderbookings.ca/wp-content/uploads/2019/12/thumb-1920-942321.jpg"
          class="home-image"
        ></img>
        <div>
          <p>Find Your Brand New Home</p>
          <p>Sign up and get first VIP & Platinum access</p>
          {/* pop up modal for sign up link */}
          <a href="#">Sign Up Now</a>
          {/* jump to specific part of page */}
          <a>View Homes</a>
          <a>View Condos</a>

          <div>
            <h4>Homes</h4>
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
            <h4>Condos</h4>
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
      </div>
    </div>
  );
}
