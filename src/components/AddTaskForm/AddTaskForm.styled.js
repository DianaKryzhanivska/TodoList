import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h2 {
    text-align: center;
  }

  & textarea {
    width: 100%;
    height: auto;
    min-height: 150px;
    font-size: 16px;
    border: 1px solid rgba(29, 30, 33, 0.1);
    padding: 12px 18px;
    background: #fff;
    border-radius: 15px;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 12px 18px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.dark};
  color: #fff;
  border-radius: 20px;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }
`;

export const CancelBtn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  font-size: 16px;

  &:hover {
    color: ${({ theme }) => theme.colors.light};
  }
`;
