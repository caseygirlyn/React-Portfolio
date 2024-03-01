import React from "react";

export default function Home() {
    return <div className="container content my-5 py-1">
        <section className="row p-4 border-1 mx-4 my-5">
            <h2 className="primary-color w-auto bg-white d-flex align-items-center">About Me</h2>
            <div className="pt-3">
                <h3>Hi, I'm Girlyn Casey!</h3>
                <p>
                    Over the past 14 years, I have been privileged to work in roles that
                    allowed me to hone my skills in web development. I have successfully
                    overseen numerous complex web development projects from inception to
                    completion. I thrive in fast-paced environments where strategic
                    thinking, collaboration, and adaptability are crucial. I take pride
                    in my ability to align teams with the company's vision, manage
                    project scopes and timelines, and ensure the delivery of
                    high-quality solutions that exceed clients' expectations.
                </p>
            </div>
        </section>
        <section className="row p-4 border-1 mx-4 my-5">
            <h2 className="primary-color w-auto bg-white d-flex align-items-center">Skills</h2>
            <div>
                <div className="column-gap-3 column-gap-md-5 row-gap-2 d-flex flex-wrap fs-4 justify-content-center mb-2">
                    <span><i className="bi bi-filetype-html"></i> HTML</span>
                    <span><i className="bi bi-filetype-css"></i> CSS</span>
                    <span><i className="bi bi-filetype-js"></i> JavaScript</span>
                    <span><i className="bi bi-wordpress"></i> WordPress</span>
                    <span><i className="bi bi-git"></i> Git</span>
                    <span><i className="bi bi-github"></i> GitHub</span>
                </div>
                <div className="column-gap-3 column-gap-md-5 row-gap-2 d-flex flex-wrap fs-4 justify-content-center">
                    <span><i className="bi bi-check2-square"></i> Google Tag Management</span>
                    <span><i className="bi bi-check2-square"></i> Google Analytics</span>
                    <span><i className="bi bi-check2-square"></i> Search Engine Optimization</span>
                    <span><i className="bi bi-check2-square"></i> Email Marketing</span>
                    <span><i className="bi bi-check2-square"></i> Vue.JS</span>
                    <span><i className="bi bi-check2-square"></i> ReactJS</span>
                    <span><i className="bi bi-check2-square"></i> Node.JS</span>
                    <span><i className="bi bi-check2-square"></i> Figma</span>
                    <span><i className="bi bi-check2-square"></i> A/B Test &amp; Personalization</span>
                </div>
            </div>
        </section>
    </div>
}