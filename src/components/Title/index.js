import React from "react";
import "./style.css";

function Title(props) {
  return <nav className="navbar navbar-light">
  <a className="m-auto navbar-brand">{props.children}</a>
  </nav>

}

export default Title;
