import React from "react";

export default function Footer() {
    return <footer className="container-fluid content bg-light mt-5 py-3">
        <div className="col-md-12 ps-md-5 column-gap-md-5 d-flex flex-wrap fs-6 justify-content-center">
            <a href="https://github.com/caseygirlyn" target="_blank" className="btn"><i className="bi bi-github"></i> github</a>
            <a href="https://www.linkedin.com/in/girlyncasey/" target="_blank" className="btn"><i className="bi bi-linkedin"></i> linkedin</a>
            <a href="https://www.instagram.com/gicasey/" target="_blank" className="btn"><i className="bi bi-instagram"></i> instagram</a>
        </div>
    </footer>
}