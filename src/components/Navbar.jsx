import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary-color">
        <div className="container">
            <Link className="navbar-brand py-0" to="/">
                <h1 className="header">
                    <img src="/images/girlyn_w_logo.png" className="mw-100"/>
                </h1>
            </Link>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-0">
                    <li className="nav-item mx-2">
                        <Link className="nav-link fs-5 text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link fs-5 text-white" to="/projects" >Projects</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link fs-5 text-white" to="https://github.com/caseygirlyn">GitHub</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link fs-5 text-white" to="https://www.linkedin.com/in/girlyncasey/">LinkedIn</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link fs-5 text-white" href="/contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}
