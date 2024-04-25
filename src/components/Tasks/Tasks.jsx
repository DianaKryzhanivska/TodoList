import React, { useState } from "react";
import { AddTaskBtn, Container } from "./Tasks.styled";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "components/Modal/Modal";

const Tasks = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <section>
        <Container>
          <AddTaskBtn type="button" onClick={handleOpenModal}>
            Add task
            <IoIosAddCircleOutline />
          </AddTaskBtn>
          <ul>
            <li>task 1</li>
            <li>task 2</li>
            <li>task 3</li>
          </ul>
        </Container>
      </section>
      <Modal isOpen={openModal} onClose={handleCloseModal}></Modal>
    </>
  );
};

export default Tasks;
