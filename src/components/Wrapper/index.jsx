import React from "react";

export default function Wrapper(props) {
  return <div className="wrapper container card-group"><section className="row p-3 border-1 mx-4 my-5">{props.children}</section></div>;
}
