import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import projects from "./projects.json";
import Slug from "./components/Slug";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main role="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="projects" element={
            <Projects>
              {projects.map((projectObj) => (
                <Project
                  id={projectObj.id}
                  key={projectObj.id}
                  name={projectObj.name}
                  image={projectObj.image}
                  tech={projectObj.tech}
                  url={projectObj.url}
                  githubRepo={projectObj.githubRepo}
                  slug={projectObj.slug}
                />
              ))
              }
            </Projects>
          }></Route>
          <Route path="projects/:slug" element={<Slug />}>
          </Route>  
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
