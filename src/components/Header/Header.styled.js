import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 20px;
  padding-bottom: 20px;
  background: #f1f1f1;
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
