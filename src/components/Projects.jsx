import React from "react";

export default function Projects(props) {
    return <div className="cardContainer col-md-4 col-sm-12 w-lg-auto p-3" id={props.id}>
        <a href={props.url} target="_blank" rel="noreferrer" className="text-decoration-none">
            <div className="card border-2 rounded-0 w-auto">
                <img src={props.image} title={props.name} className="w-100"/>
                <div className="card-body caption bg-primary-color text-white">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        {props.tech}
                    </p>
                </div>
            </div>
        </a>
    </div>
}