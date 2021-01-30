import React from "react";
import "./style.css";

function Title(props) {
  return <nav class="navbar navbar-light">
  <a class="m-auto navbar-brand">{props.children}</a>
  </nav>

}

export default Title;
