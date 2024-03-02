import React from "react";

export default function Home() {
    return <div className="container content my-3 py-1">
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
                <p>
                    In addition to my professional pursuits, I find fulfillment and enrichment through a diverse array of hobbies and interests. Photography has become a passion of mine, allowing me to capture moments of beauty and tell stories through imagery, showcasing my creativity and attention to detail. Cooking and baking serve as outlets for my creativity and patience, providing opportunities to experiment with flavors and techniques while nourishing both body and soul. I also enjoy immersing myself in nature through outdoor activities, which not only promote physical fitness but also instill in me a profound appreciation for the natural world and the importance of perseverance. Furthermore, engaging in DIY projects allows me to exercise my problem-solving skills and hands-on abilities, while reading broadens my horizons, stimulates my intellect, and nurtures my love for learning. Additionally, I am an avid traveler, having explored more than 20 countries and their diverse cultures and landscapes. These experiences have fostered adaptability, cultural awareness, and a global perspective, enriching my understanding of the world and enhancing my interpersonal skills. I also find joy in singing, which not only allows me to express myself creatively but also promotes confidence and communication skills. Moreover, I am passionate about trading and investing, continuously expanding my knowledge of financial markets and honing my analytical skills. These varied interests reflect my diverse skill set, curiosity, and commitment to personal growth, contributing to a well-rounded and adaptable approach to life and work.
                </p>
                <p>
                You can download my <a href="https://drive.google.com/file/d/1-RF6Amggn49n6XVJsEAqFOUaEQKd2Kn7/view?usp=sharing" className="primary-color" target="_blank" rel="nofollow">CV here</a>.
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