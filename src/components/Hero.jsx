import React from "react";

export default function Hero() {
    return <div className="hero-banner mb-4 py-4 w-100">
        <div className="container d-md-flex align-items-md-end h-100 justify-content-md-between p-3">
            <img src="/images/photo.jpg" alt="Girlyn" className="rounded-circle avatar shadow" />
                <h2 className="float-md-end bg-primary-color text-white mt-3 p-3 text-center">
                    Web Developer / SEO / GTM
                </h2>
        </div>
    </div>
}