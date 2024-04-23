import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & a {
    color: #fff;
    padding: 8px 20px;
    border: 1px solid #fff;
    border-radius: 20px;
    font-size: 16px;
  }

  & a.active {
    background: #6aafe6;
  }

  @media only screen and (min-width: 768px) {
    & a {
      padding: 8px 40px;
    }
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;

    & a {
      font-size: 18px;
      color: #6aafe6;
      border: 1px solid #6aafe6;
    }

    & a.active {
      color: #fff;
      border: 1px solid #fff;
    }
  }
`;
