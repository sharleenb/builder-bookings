import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Homes from "./components/Homes";
import Condos from "./components/Condos";
import Team from "./components/Team";
import Guide from "./components/Guide";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import MemberDetail from "./components/MemberDetail";
import Dashboard from "./components/Admin/Dashboard";
import Projects from "./components/Admin/Projects";
import Members from "./components/Admin/Members";
import Profile from "./components/Admin/Profile";
import EditProject from "./components/Admin/EditProject";
import EditMember from "./components/Admin/EditMember";
import AddProject from "./components/Admin/AddProject";
import AddMember from "./components/Admin/AddMember";
import Blogs from "./components/Blogs";
import ViewBlogs from "./components/Admin/ViewBlogs";
import EditBlogs from "./components/Admin/EditBlogs";
import AddBlog from "./components/Admin/AddBlog";

function App() {
  const [click, handleClick] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginStatusChange = (status) => {
    setIsLoggedIn(status);
  };

  if (isLoggedIn) {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/homes" element={<Homes />}></Route>
          <Route exact path="/condos" element={<Condos />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/guide" element={<Guide />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/terms" element={<Terms />}></Route>
          <Route exact path="/privacy-policy" element={<Privacy />}></Route>
          <Route
            path="/project/:id"
            element={<ProjectDetails handleClick={handleClick} click={click} />}
          />
          <Route
            path="/member/:id"
            element={<MemberDetail handleClick={handleClick} click={click} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard 
              isLoggedIn={isLoggedIn} onLoginStatusChange={handleLoginStatusChange}
              />}
          ></Route>
          <Route path="/edit-projects" element={<Projects />}></Route>
          <Route path="/edit-members" element={<Members />}></Route>
          <Route path="/edit-profile" element={<Profile />}></Route>
          <Route
            path="/edit-project/:id"
            element={<EditProject handleClick={handleClick} click={click} />}
          ></Route>
          <Route
            path="/edit-member/:id"
            element={<EditMember handleClick={handleClick} click={click} />}
          ></Route>
          <Route path="/add-project" element={<AddProject />}></Route>
          <Route path="/add-member" element={<AddMember />}></Route>
          <Route exact path="/edit-blogs" element={<ViewBlogs />}></Route>
          <Route exact path="/edit-blog/:id" element={<EditBlogs />}></Route>
          <Route exact path="/add-blog" element={<AddBlog />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/homes" element={<Homes />}></Route>
          <Route exact path="/condos" element={<Condos />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/guide" element={<Guide />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/terms" element={<Terms />}></Route>
          <Route exact path="/privacy-policy" element={<Privacy />}></Route>
          <Route
            path="/project/:id"
            element={<ProjectDetails handleClick={handleClick} click={click} />}
          />
          <Route
            path="/member/:id"
            element={<MemberDetail handleClick={handleClick} click={click} />}
          />
          <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} onLoginStatusChange={handleLoginStatusChange} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
