import React, { useCallback, useEffect } from "react";
import { CloseBtn, Container, Content, Overlay } from "./BurgerMenu.styled";
import { MdOutlineClose } from "react-icons/md";
import NavLinks from "../NavLinks/NavLinks";

const BurgerMenu = ({ isOpen, onClose }) => {
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
          <Container>
            <CloseBtn type="button" onClick={onClose}>
              <MdOutlineClose />
            </CloseBtn>
            <NavLinks />
          </Container>
        </Content>
      </Overlay>
    </>
  );
};

export default BurgerMenu;
