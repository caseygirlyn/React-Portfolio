import React from "react";
import { NavLink } from 'react-router-dom';

export default function Project(props) {
    return <div className="cardContainer col-md-4 col-sm-12 w-lg-auto p-md-3 p-1 pb-3" id={props.id}>
        <div className="card border-2 rounded-0 w-auto shadow">
            <img src={props.image} title={props.name} className="w-100" />
            <div className="card-body caption bg-primary-color text-white py-1">
                <p className="card-title fw-bolder mb-0">{props.name}</p>
                <p className="card-text mb-0 fst-italic">{props.tech}</p>
                <small>
                <NavLink to={props.slug} rel="noreferrer" className="card-link text-white">View Project</NavLink>
                    <NavLink to={props.url} target="_blank" rel="noreferrer" className="card-link text-white">Live Link</NavLink>
                    { props.githubRepo ? <NavLink to={props.githubRepo} target="_blank" rel="noreferrer" className="card-link text-white">GitHub</NavLink> : ''}
                </small>
            </div>
        </div>
    </div>
}