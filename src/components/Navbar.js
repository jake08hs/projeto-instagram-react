import React from "react";
import NavIcon from "./NavIcon";

export default function Navbar() {

  const icons = [
    "paper-plane-outline",
    "compass-outline",
    "heart-outline",
    "person-outline"
  ];

  return (
    <div className="navbar">
      <div className="container">

        <div className="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <img
            src="/assets/img/logo.png"
            className="nav-logo"
            alt="Instagram Logo"
          />
        </div>

        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className="icones">
          {icons.map((icon) => (
            <NavIcon key={icon} name={icon} />
          ))}
        </div>

      </div>
    </div>
  );
}
