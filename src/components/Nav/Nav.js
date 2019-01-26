import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="nav nav-pills nav-justified">
        <a href="/">Billions CLicky Game</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score} </li>
      <li>  </li>
      <li id="top-sco">Your Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;