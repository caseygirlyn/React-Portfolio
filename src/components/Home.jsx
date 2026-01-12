import React from "react";

export default function Home() {
    return <div className="container content my-3 py-1">
        <section className="row p-3 border-1 mx-4 my-5">
            <h2 className="primary-color w-auto bg-white d-flex align-items-center">Leadership</h2>
            <p>Hi, I'm Girlyn Casey!</p>
            <p>
                With over 15 years of experience in web development, I have honed my skills through diverse roles, successfully leading complex projects from inception to completion. Thriving in fast-paced environments, I excel at strategic thinking, collaboration, and adaptability. I take pride in aligning teams with company goals, managing project scopes and timelines, and delivering high-quality, scalable solutions.
            </p>
            <p className="collapse" id="collapseExample">
                Beyond my professional expertise, I am passionate about trading and investing, continuously refining my understanding of financial markets and analytical skills. My diverse interests reflect a commitment to continuous learning, growth, and a well-rounded approach to problem-solving and innovation. Additionally, I am an avid traveler and have explored more than 20 countries. These experiences have deepened my adaptability, cultural awareness, and global perspective, enriching my personal and professional interactions.
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
            <div className="column-gap-3 column-gap-md-4 row-gap-2 d-flex flex-wrap fs-5 justify-content-center mb-2 px-0">
                <span><i className="bi bi-filetype-html"></i> HTML5</span>
                <span><i className="bi bi-filetype-css"></i> CSS3</span>
                <span><i className="bi bi-filetype-js"></i> JavaScript</span>
                <span><i className="bi bi-wordpress"></i> WordPress</span>
                <span><i className="bi bi-git"></i> Git</span>
                <span><i className="bi bi-github"></i> GitHub</span>
            </div>
            <div className="column-gap-3 column-gap-md-4 row-gap-2 d-flex flex-wrap fs-5 justify-content-center px-0 mb-2">
                <span><i className="bi bi-check2-square"></i> Sitecore</span>
                <span><i className="bi bi-check2-square"></i> Vue.JS</span>
                <span><i className="bi bi-check2-square"></i> ReactJS</span>
                <span><i className="bi bi-check2-square"></i> Node.JS</span>
                <span><i className="bi bi-check2-square"></i> Angular</span>
                <span><i className="bi bi-check2-square"></i> jQuery</span>
                <span><i className="bi bi-check2-square"></i> Bitbucket</span>
                <span><i className="bi bi-check2-square"></i> API integration</span>
                <span><i className="bi bi-check2-square"></i> Bootstrap</span>
                <span><i className="bi bi-check2-square"></i> Tailwind CSS</span>
                <span><i className="bi bi-check2-square"></i> PrimeVue</span>
                <span><i className="bi bi-check2-square"></i> PHP</span>
                <span><i className="bi bi-check2-square"></i> MySQL</span>
                <span><i className="bi bi-check2-square"></i> Performance Optimization</span>
                <span><i className="bi bi-check2-square"></i> Responsive Design</span>
                <span><i className="bi bi-check2-square"></i> Cross-Browser Compatibility</span>
                <span><i className="bi bi-check2-square"></i> Agile Methodologies</span>
                <span><i className="bi bi-check2-square"></i> RESTful Services</span>
                <span><i className="bi bi-check2-square"></i> CI/CD</span>
                <span><i className="bi bi-check2-square"></i> VWO</span>
                <span><i className="bi bi-check2-square"></i> Google Tag Management</span>
                <span><i className="bi bi-check2-square"></i> Google Analytics</span>
                <span><i className="bi bi-check2-square"></i> SEO</span>
                <span><i className="bi bi-check2-square"></i> Email Marketing</span>
                <span><i className="bi bi-check2-square"></i> Figma</span>
                <span><i className="bi bi-check2-square"></i> A/B Test &amp; Personalization</span>
            </div>
        </section>
        <section className="row p-3 border-1 mx-4 my-5">
            <h2 className="primary-color w-auto bg-white d-flex align-items-center">Certificates</h2>
            <div className="row m-0">
                <p className="col-md-4 py-2 text-center">
                    <a href="https://skillsbootcamp.credential.getsmarter.com/47092453-aada-415b-8530-f03361621b2a#gs.a9hue4" className="text-dark" target="_blank">
                        <img src="/images/edX_bootcamp.svg" className="d-inline-block w-100 h-auto" alt="edX Skills Bootcamp in Front-End Development Certificate" width={372} height={96} />
                        <span className="d-inline-block mt-2">edX Skills Bootcamp in Front-End Development</span>
                    </a>
                </p>
                <p className="col-md-4 py-2 text-center">
                    <a href="/certificates/Sitecore_Web_Experience_Management.pdf" target="_blank" className="text-dark">
                        <img src="/images/sitecore.svg" className="d-inline-block w-100 h-auto" alt="Sitecore Web Experience Management Certificate" width={372} height={96} />
                        <span className="d-inline-block mt-2">Sitecore Web Experience Management</span>
                    </a>
                </p>
                <p className="col-md-4 py-2 text-center">
                    <a href="/certificates/Sitecore_Context_Marketing.pdf" target="_blank" className="text-dark">
                        <img src="/images/sitecore.svg" className="d-inline-block w-100 h-auto" alt="Sitecore Context Marketing Certificate" width={372} height={96} />
                        <span className="d-inline-block mt-2">Sitecore Context Marketing</span>
                    </a>
                </p>
            </div>
        </section>

        <section className="row p-3 border-1 mx-4 my-5">
            <h2 className="primary-color w-auto bg-white d-flex align-items-center">PageSpeed Optimization Service</h2>
            <div className="row mx-md-0 m-auto px-md-2 px-0">
                <p className="col-md-6 mt-md-3 pe-md-2 pe-0">
                    I am excited to offer a comprehensive PageSpeed Optimization service, designed to enhance your website's performance and user experience. My expertise will help your site pass Core Web Vitals and achieve high scores in Performance, Accessibility, Best Practices, and SEO. Let’s work together to ensure your website is fast, accessible, and optimized for both users and search engines. <a href="https://wa.me/447539472477" target="_blank" className="primary-color d-inline-block">Get in Touch via WhatsApp</a>
                </p>
                <p className="col-md-6"><a href="https://pagespeed.web.dev/analysis/https-girlyn-com/l4woa03gho?form_factor=desktop" target="_blank" title="PageSpeed Insights"><img src="/images/pagespeed_insights.svg" alt="PageSpeed Optimization" className="w-100 h-auto" width={575} height={295}/></a></p>
            </div>
        </section>

        <div className="px-4 text-center"><a href="/cv/GIRLYN_CASEY_CV.pdf" className="btn btn-secondary btn-lg bg-primary-color border-0" role="button" target="_blank" rel="nofollow"><i className="bi bi-download text-white me-2"></i>Download CV</a></div>
    </div>
}