import styled from "styled-components";

export const Btn = styled.button`
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

export const Text = styled.p`
  text-align: center;
  font-size: 18px;

  & a {
    color: ${({ theme }) => theme.colors.light};
    font-weight: 600;
    text-decoration: underline;
  }
`;
