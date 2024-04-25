import React, { useState } from "react";
import { Btn } from "./AddTaskBtn.styled";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "components/Modal/Modal";
import AddTaskForm from "components/AddTaskForm/AddTaskForm";

const AddTaskBtn = () => {
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  return (
    <>
      <Btn type="button" onClick={handleOpenAddModal}>
        Add task
        <IoIosAddCircleOutline />
      </Btn>
      <Modal isOpen={openAddModal} onClose={handleCloseAddModal}>
        <AddTaskForm onClose={handleCloseAddModal} />
      </Modal>
    </>
  );
};

export default AddTaskBtn;
