import React from 'react';
import { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Homes from './components/Homes';
import Condos from './components/Condos';
import Team from './components/Team';
import Guide from './components/Guide';
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy'
import MemberDetail from './components/MemberDetail';

function App() {

  const [click, handleClick] = useState(0);
  
return(
  <BrowserRouter>
  <Header />
  <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/homes" element={<Homes />}></Route>
    <Route exact path="/condos" element={<Condos />}></Route>
    <Route exact path="/team" element={<Team />}></Route>
    <Route exact path="/guide" element={<Guide />}></Route>
    <Route exact path="/contact" element={<Contact />}></Route>
    <Route exact path="/terms" element={<Terms />}></Route>
    <Route exact path="/privacy-policy" element={<Privacy />}></Route>
    <Route path="/project/:id" element={<ProjectDetails handleClick={handleClick} click={click}/>} />
    <Route path="/member/:id" element={<MemberDetail handleClick={handleClick} click={click}/>} />
  </Routes>
  <Footer />
  </BrowserRouter>

)
}

export default App;
