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
    background: ${({ theme }) => theme.colors.light};
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
      color: ${({ theme }) => theme.colors.dark};
      border: 1px solid ${({ theme }) => theme.colors.dark};

      &:hover {
        color: ${({ theme }) => theme.colors.light};
        border: 1px solid ${({ theme }) => theme.colors.light};
      }
    }

    & a.active {
      background: ${({ theme }) => theme.colors.dark};
      color: #fff;
      border: 1px solid #fff;
    }
  }
`;
