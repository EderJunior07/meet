import React from "react";
import "./style.css";

function CardMenu(props) {
  return (
    <div id="card-menu">
      <h1 id="card-welcome">
        <span>Olá, </span>
        {props.user}
      </h1>
      <div id="card-menu-buttons" />
    </div>
  )
}

export default CardMenu;
