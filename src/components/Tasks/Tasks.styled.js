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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

  & svg {
    width: 25px;
    height: 25px;
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
