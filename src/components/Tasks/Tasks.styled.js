import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 40px;
  padding-bottom: 40px;
  background: #f7f8fa;

  @media only screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 200px;
  }

  @media only screen and (min-width: 1440px) {
    padding-top: 0;
  }
`;

export const Wrapper = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    & img {
      width: 500px;
      height: 500px;
    }
  }
`;

export const TextBox = styled.div`
  @media only screen and (min-width: 1440px) {
    padding-top: 100px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: 1440px) {
    width: 580px;
    margin-top: 20px;
  }
`;

export const Item = styled.li`
  padding: 10px 20px;
  background: #f7f8fa;
  color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const EditBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  transition: 0.3s ease;

  & svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const DoneBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 5px;
  color: #2e8b57;
  border: 1px solid #2e8b57;
  background: transparent;
  transition: 0.3s ease;

  &:hover {
    background: #2e8b57;
    color: #fff;
  }

  & svg {
    width: 20px;
    height: 20px;
  }
`;
