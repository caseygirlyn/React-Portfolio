import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const closeNav = () => {
        setExpanded(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary-color">
            <div className="container">
                <NavLink className="navbar-brand py-0" to="/" onClick={closeNav}>
                    <h1 className="header mb-1">
                        <img
                            src="/images/girlyn_w_logo.png"
                            alt="Girlyn Casey - Full-Stack Developer - SEO"
                            width={225}
                            height={40}
                            className="h-auto w-100"
                        />
                    </h1>
                </NavLink>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={expanded ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-0">
                        <li className="nav-item mx-2">
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive ? 'active' : ''} nav-link fs-5 text-white`
                                }
                                end
                                to="/"
                                onClick={closeNav}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink
                                className="nav-link fs-5 text-white"
                                to="projects"
                                onClick={closeNav}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink
                                className="nav-link fs-5 text-white"
                                to="https://github.com/caseygirlyn"
                                target="_blank"
                                onClick={closeNav}
                            >
                                GitHub
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink
                                className="nav-link fs-5 text-white"
                                to="https://www.linkedin.com/in/girlyncasey/"
                                target="_blank"
                                onClick={closeNav}
                            >
                                LinkedIn
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink
                                className="nav-link fs-5 text-white"
                                to="https://girlyn.co.uk/"
                                target="_blank"
                                onClick={closeNav}
                            >
                                Girlyn.co.uk
                            </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink
                                className="nav-link fs-5 text-white"
                                to="contact"
                                onClick={closeNav}
                            >
                                Contact Me
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
