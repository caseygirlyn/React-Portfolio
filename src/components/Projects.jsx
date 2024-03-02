import React from "react";

export default function Projects(props) {
  return <div className="container content my-3 py-1">
    <section className="row p-3 border-1 mx-4 my-5">
        <h2 className="primary-color w-auto bg-white d-flex align-items-center">Projects</h2>
            <div className="wrapper container card-group">{props.children}</div>
    </section>
    </div>;
}