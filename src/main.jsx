import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import * as bootstrap from 'bootstrap'
import './main.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Project from "./components/Project";
import Projects from "./components/Projects";
import projects from "./projects.json";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'projects',
        element: [
            <Header />,
            <Hero />,
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
                    />
                ))
                }
            </Projects>,
            <Footer />
        ]
    },
    {
        path: 'contact',
        element: [<Header />, <Hero />, <Contact />, <Footer />]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);