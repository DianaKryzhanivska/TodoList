import React, { useCallback, useEffect } from "react";
import { CloseBtn, Content, Overlay } from "./Modal.styled";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ isOpen, onClose }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Overlay onClick={onClose}>
        <Content onClick={(e) => e.stopPropagation()}>
          <CloseBtn type="button" onClick={onClose}>
            <MdOutlineClose />
          </CloseBtn>
        </Content>
      </Overlay>
    </>
  );
};

export default Modal;
