import React from "react";

export default function Home() {
    return <div className="container content my-3 py-1">
        <section className="row p-3 border-1 mx-4 my-5">
            <h2 className="primary-color w-auto bg-white d-flex align-items-center">About Me</h2>
            <p>Hi, I'm Girlyn Casey!</p>
            <p>
                For the past 15 years, I have had the privilege of working in roles that have refined my web development skills. I have successfully managed numerous complex web development projects from inception to completion. I excel in fast-paced environments that demand strategic thinking, collaboration, and adaptability. I take pride in my ability to align teams with the company's vision, manage project scopes and timelines, and deliver high-quality solutions.
            </p>
            <p className="collapse" id="collapseExample">
                In addition to my professional pursuits, I find fulfillment and enrichment through a diverse array of hobbies and interests. Photography has become a passion of mine, allowing me to capture moments of beauty and tell stories through imagery, showcasing my creativity and attention to detail. I also enjoy immersing myself in nature through outdoor activities, which not only promote physical fitness but also instill in me a profound appreciation for the natural world and the importance of perseverance. Additionally, I am an avid traveler, having explored more than 20 countries and their diverse cultures and landscapes. These experiences have fostered adaptability, cultural awareness, and a global perspective, enriching my understanding of the world and enhancing my interpersonal skills. Moreover, I am passionate about trading and investing, continuously expanding my knowledge of financial markets and honing my analytical skills. These varied interests reflect my diverse skill set, curiosity, and commitment to personal growth, contributing to a well-rounded and adaptable approach to life and work.
            </p>
            <p className="mb-0">
                <span className="primary-color" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <span className="collapsed">
                        + Read more
                    </span>
                    <span className="expanded">
                        - Read less
                    </span>
                </span>
            </p>
        </section>
        <section className="row p-3 border-1 mx-4 my-5">
            <h2 className="primary-color w-auto bg-white d-flex align-items-center">Skills</h2>
            <div className="column-gap-3 column-gap-md-5 row-gap-2 d-flex flex-wrap fs-5 justify-content-center mb-2 px-0">
                <span><i className="bi bi-filetype-html"></i> HTML</span>
                <span><i className="bi bi-filetype-css"></i> CSS</span>
                <span><i className="bi bi-filetype-js"></i> JavaScript</span>
                <span><i className="bi bi-wordpress"></i> WordPress</span>
                <span><i className="bi bi-git"></i> Git</span>
                <span><i className="bi bi-github"></i> GitHub</span>
            </div>
            <div className="column-gap-3 column-gap-md-5 row-gap-2 d-flex flex-wrap fs-5 justify-content-center px-0 mb-2">
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
        </section>
        <div className="px-4 text-center"><a href="/cv/GIRLYN_CASEY_CV_2024.pdf" className="btn btn-secondary btn-lg bg-primary-color border-0" role="button" target="_blank" rel="nofollow"><i className="bi bi-download text-white me-2"></i>Download CV</a></div>
    </div>
}