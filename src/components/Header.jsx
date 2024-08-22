import React from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary-color">
        <div className="container">
            <NavLink className="navbar-brand py-0" to="/">
                <h1 className="header mb-1">
                    <img src="/images/girlyn_w_logo.png" alt="Girlyn Casey - Full-Stack Developer - SEO" width={225} height={40} className="h-auto w-100"/>
                </h1>
            </NavLink>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-0">
                    <li className="nav-item mx-2">
                        <NavLink className=
                        {`${({ isActive }) =>
                        isActive ? 'active' : ''} nav-link fs-5 text-white`} end to="https://girlyn.com">Home</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link fs-5 text-white" to="https://girlyn.com/projects" >Projects</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link fs-5 text-white" to="https://github.com/caseygirlyn" target="_blank">GitHub</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link fs-5 text-white" to="https://www.linkedin.com/in/girlyncasey/" target="_blank">LinkedIn</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link fs-5 text-white" to="https://girlyn.co.uk/" target="_blank">Girlyn.co.uk</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link fs-5 text-white" to="https://girlyn.com/contact">Contact Me</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}
