import React from "react";
// import { useParams } from "react-router-dom";

export default function Works(props) {
    return <div className="cardContainer col-md-4 col-sm-12" id={props.id}>
        <a href={props.url} target="_blank" rel="noreferrer" className="text-decoration-none">
            <div className="card border-5 rounded-0">
                <img src={props.image} title="CurrenCity" />
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