import React from "react";

export default function Skills(){
    return <div className="container content">
        <section id="skills" className="row p-4">
        <div className="col-md-3">
            <h2 className="primary-color">Skills</h2>
        </div>
        <div className="col-md-9 ps-md-5 border-start border-3">
            <div className="column-gap-3 column-gap-md-5 row-gap-2 d-flex flex-wrap fs-5 justify-content-center mb-2">
                <span><i className="bi bi-filetype-html"></i> HTML</span>
                <span><i className="bi bi-filetype-css"></i> CSS</span>
                <span><i className="bi bi-filetype-js"></i> JavaScript</span>
                <span><i className="bi bi-wordpress"></i> WordPress</span>
                <span><i className="bi bi-git"></i> Git</span>
                <span><i className="bi bi-github"></i> GitHub</span>
            </div>
            <div className="column-gap-3 column-gap-md-5 row-gap-2 d-flex flex-wrap fs-5 justify-content-center">
                <span><i className="bi bi-check2-square"></i> Google Tag Management</span>
                <span><i className="bi bi-check2-square"></i> Google Analytics</span>
                <span><i className="bi bi-check2-square"></i> Search Engine Optimization</span>
                <span><i className="bi bi-check2-square"></i> Email Marketing</span>
                <span><i className="bi bi-check2-square"></i> Vue.JS</span>
                <span><i className="bi bi-check2-square"></i> ReactJS</span>
                <span><i className="bi bi-check2-square"></i> A/B Test &amp; Personalization</span>
                <span><i className="bi bi-check2-square"></i> Figma</span>
            </div>
        </div>
    </section>
    </div>
}