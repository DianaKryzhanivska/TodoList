import styled from "styled-components";
import { CommonContainer } from "styles/GlobalStyles";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: rgba(29, 30, 33, 0.45);
  display: flex;
  justify-content: flex-end;
  z-index: 10;
`;

export const Content = styled.div`
  position: relative;
  width: 200px;
  height: auto;
  overflow-y: auto;
  background: #1e4776;
  z-index: 100;

  @media only screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const Container = styled(CommonContainer)`
  padding-top: 200px;
  padding-bottom: 200px;

  @media only screen and (min-width: 768px) {
    padding-top: 250px;
    padding-bottom: 250px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 20px;

  & svg {
    fill: #fff;
    width: 40px;
    height: 40px;
  }

  @media only screen and (min-width: 768px) {
    right: 40px;
  }
`;
