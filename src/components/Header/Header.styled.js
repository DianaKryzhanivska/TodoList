import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 20px;
  padding-bottom: 20px;
  background: #f7f8fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;

  & img {
    width: 40px;
    height: 40px;
  }

  & p {
    font-size: 24px;
    transition: 0.3s ease;

    &:hover {
      color: #6aafe6;
    }
  }
`;

export const AuthBurgerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AuthWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  & p {
    color: #000;
    font-size: 18px;
  }

  @media only screen and (min-width: 1440px) {
    & p {
      color: #6aafe6;
    }
  }
`;

export const BurgerBtn = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 40px;
    height: 40px;
    transition: 0.3s ease;

    &:hover {
      color: #6aafe6;
    }
  }
`;
