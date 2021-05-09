import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./index";
const Navigation = () => {
  return (
    <div className="navigation">
      <Logo />

      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="/about" activeClassName="nav-active">
        À propos
      </NavLink>
    </div>
  );
};

export default Navigation;
