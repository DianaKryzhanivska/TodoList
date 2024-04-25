import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 40px;
  padding-bottom: 140px;

  @media only screen and (min-width: 1440px) {
    padding-top: 80px;
  }
`;

export const Wrapper = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & img {
      width: 700px;
      height: auto;
    }
  }
`;

export const TextBox = styled.div`
  @media only screen and (min-width: 1440px) {
    width: 700px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 60px;
  font-size: 28px;
  text-align: center;

  & span {
    color: ${({ theme }) => theme.colors.light};
    font-style: italic;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
  margin-left: 45px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 18px;
  background: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};

  & svg {
    width: 20px;
    height: 20px;
  }
`;
