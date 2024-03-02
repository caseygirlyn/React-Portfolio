import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import projects from "./projects.json";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="projects" element={
        <Wrapper>
        <Title>Projects</Title>
        {projects.map((projectObj) => (
          <Projects 
            id={projectObj.id}
            key={projectObj.id}
            name={projectObj.name}
            image={projectObj.image}
            tech={projectObj.tech}
            url={projectObj.url}
            githubRepo={projectObj.githubRepo}
          />
          ))
        }
      </Wrapper>
      }></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>   
    <Footer /> 
    </>
  );
}

export default App;
