import React from "react";

export default function Projects(props) {
    return <div className="cardContainer col-md-4 col-sm-12 w-lg-auto p-md-3 p-1 pb-3" id={props.id}>
        <div className="card border-2 rounded-0 w-auto shadow">
            <img src={props.image} title={props.name} className="w-100" />
            <div className="card-body caption bg-primary-color text-white">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text mb-1">
                    {props.tech}
                </p>
                <p className="mb-0">
                    <a href={props.url} target="_blank" rel="noreferrer" className="card-link text-white">Live Link</a>
                    { props.githubRepo ? <a href={props.githubRepo} target="_blank" rel="noreferrer" className="card-link text-white">GitHub Repo</a> : ''}
                </p>
            </div>
        </div>
    </div>
}