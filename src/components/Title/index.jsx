import React from "react";

export default function Title(props) {
  return <><h2 className="primary-color w-auto bg-white d-flex align-items-center mb-2">{props.children}</h2><div className="col-12"></div></>;
}
