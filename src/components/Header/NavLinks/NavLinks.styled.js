import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & a {
    display: block;
    color: #fff;
    padding: 8px 20px;
    border: 1px solid #fff;
    border-radius: 20px;
    font-size: 16px;
    transition: 0.3s ease;
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
      color: #1e4776;
      border: 1px solid #1e4776;

      &:hover {
        color: #6aafe6;
        border: 1px solid #6aafe6;
      }
    }

    & a.active {
      background: #1e4776;
      color: #fff;
      border: 1px solid #fff;
    }
  }
`;
