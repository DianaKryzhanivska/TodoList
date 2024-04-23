import React from "react";
import { NavList, Wrapper } from "./NavLinks.styled";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Wrapper>
        <NavList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
        </NavList>
      </Wrapper>
    </>
  );
};

export default NavLinks;
