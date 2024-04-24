import React from "react";
import {
  LogOutBtn,
  LoginLink,
  NavList,
  RegisterLink,
  Wrapper,
} from "./AuthLinks.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { logoutThunk } from "../../../redux/auth/operations";

const AuthLinks = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <>
      <Wrapper>
        {!isLoggedIn ? (
          <NavList>
            <li>
              <RegisterLink to="/register">Register</RegisterLink>
            </li>
            <li>
              <LoginLink to="/login">Login</LoginLink>
            </li>
          </NavList>
        ) : (
          <LogOutBtn type="button" onClick={handleLogOut}>
            Log out
          </LogOutBtn>
        )}
      </Wrapper>
    </>
  );
};

export default AuthLinks;
