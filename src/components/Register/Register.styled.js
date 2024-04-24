import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Container = styled(CommonContainer)`
  padding-top: 20px;
  padding-bottom: 200px;
  background: #f7f8fa;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 100px;

  & img {
    width: 40px;
    height: 40px;
  }

  & p {
    font-size: 24px;
    transition: 0.3s ease;

    &:hover {
      color: #6aafe6;
    }
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const ImgFormBox = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & img {
      width: 600px;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h2 {
    text-align: center;
    font-size: 28px;
  }

  & p {
    color: #6a6a6f;
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;

  & input {
    width: 100%;
    border: 1px solid rgba(29, 30, 33, 0.1);
    padding: 12px 18px;
    background: #fff;
    border-radius: 20px;
  }

  & label {
    position: relative;
  }

  & span {
    position: absolute;
    left: 18px;
    bottom: -13px;
    font-size: 14px;
    color: #e85050;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 12px 18px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  background: #1e4776;
  color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;
  transition: 0.3s ease;

  &:hover {
    background: #6aafe6;
  }
`;

export const LinkBtn = styled(NavLink)`
  display: block;
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    color: #6aafe6;
  }
`;
