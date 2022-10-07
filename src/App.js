import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Education from "./components/Education/Education";
import Project from "./components/Projects/Project";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Education" element={<Education />} /> 
        <Route path="/Project" element={<Project />} /> 
      </Routes>
    </div>
  );
}

export default App;
