import React, { useState } from "react";
import logo from "../../images/logo.png";
import {
  AuthBurgerBox,
  AuthWrapper,
  BurgerBtn,
  Container,
  Logo,
} from "./Header.styled";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import NavLinks from "./NavLinks/NavLinks";
import AuthLinks from "./AuthLinks/AuthLinks";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

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
        {isDesktop && <NavLinks />}
        <AuthBurgerBox>
          <AuthWrapper>
            {isLoggedIn && <p>{user?.name}</p>}
            {isDesktop && <AuthLinks />}
          </AuthWrapper>
          {!isDesktop && (
            <BurgerBtn type="button" onClick={handleOpenMenu}>
              <RxHamburgerMenu />
            </BurgerBtn>
          )}
        </AuthBurgerBox>
      </Container>
      <BurgerMenu isOpen={openBurgerMenu} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
