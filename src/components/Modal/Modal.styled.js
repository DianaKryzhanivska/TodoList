import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(29, 30, 33, 0.45);
  z-index: 10;
`;

export const Content = styled.div`
  position: relative;
  padding: 60px 20px 40px;
  width: 320px;
  height: auto;
  overflow-y: auto;
  background: #f7f8fa;
  border-radius: 30px;
  z-index: 100;
`;

export const CloseBtn = styled.button`
  position: absolute;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 10px;

  & svg {
    fill: #000;
    width: 30px;
    height: 30px;
  }
`;
