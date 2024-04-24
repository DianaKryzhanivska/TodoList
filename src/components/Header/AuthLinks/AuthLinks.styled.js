import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;

  @media only screen and (min-width: 768px) {
    gap: 30px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const RegisterLink = styled(NavLink)`
  color: #fff;
  padding: 8px 18px;
  border: 1px solid #fff;
  border-radius: 20px;
  font-size: 16px;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }

  @media only screen and (min-width: 768px) {
    padding: 8px 40px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.dark};

    &:hover {
      background: none;
      color: ${({ theme }) => theme.colors.light};
      border: 1px solid ${({ theme }) => theme.colors.light};
    }
  }
`;

export const LoginLink = styled(NavLink)`
  color: #fff;
  font-size: 16px;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }

  @media only screen and (min-width: 1440px) {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.dark};

    &:hover {
      background: none;
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;

export const LogOutBtn = styled.button`
  color: #fff;
  padding: 8px 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  font-size: 16px;
  background: ${({ theme }) => theme.colors.dark};
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }

  @media only screen and (min-width: 768px) {
    padding: 8px 40px;
  }

  @media only screen and (min-width: 1440px) {
    background: none;
    color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.light};

    &:hover {
      color: #fff;
      border: 1px solid #fff;
    }
  }
`;
