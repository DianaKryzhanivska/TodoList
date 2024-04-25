import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 40px;
  padding-bottom: 40px;
  background: #f7f8fa;
`;

export const AddTaskBtn = styled.button`
  color: #fff;
  background: ${({ theme }) => theme.colors.dark};
  padding: 8px 18px;
  border: 1px solid #fff;
  border-radius: 20px;
  font-size: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 40px;
  transition: 0.3s ease;

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }
`;
