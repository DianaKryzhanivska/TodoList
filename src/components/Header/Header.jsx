import React, { useState } from "react";
import logo from "../../images/logo.png";
import { BurgerBtn, Container, Logo } from "./Header.styled";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import NavLinks from "./NavLinks/NavLinks";

const Header = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const handleOpenMenu = () => {
    setOpenBurgerMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenBurgerMenu(false);
  };
  return (
    <>
      <Container>
        <Logo to="/">
          <img src={logo} alt="logo" />
          <p>TodoList</p>
        </Logo>
        {isDesktop ? (
          <NavLinks />
        ) : (
          <BurgerBtn type="button" onClick={handleOpenMenu}>
            <RxHamburgerMenu />
          </BurgerBtn>
        )}
      </Container>
      <BurgerMenu isOpen={openBurgerMenu} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
