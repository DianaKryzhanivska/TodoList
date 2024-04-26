import React, { useState } from "react";
import { Btn, Text } from "./AddTaskBtn.styled";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "components/Modal/Modal";
import AddTaskForm from "components/AddTaskForm/AddTaskForm";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

const AddTaskBtn = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  const handleOpenAuthModal = () => {
    setOpenAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setOpenAuthModal(false);
  };

  const handleAddClick = () => {
    if (!isLoggedIn) {
      handleOpenAuthModal();
    } else {
      handleOpenAddModal();
    }
  };

  return (
    <>
      <Btn type="button" onClick={handleAddClick}>
        Add task
        <IoIosAddCircleOutline />
      </Btn>
      <Modal isOpen={openAddModal} onClose={handleCloseAddModal}>
        <AddTaskForm onClose={handleCloseAddModal} />
      </Modal>
      <Modal isOpen={openAuthModal} onClose={handleCloseAuthModal}>
        <Text>
          <NavLink to="/login">Log In</NavLink> to add tasks
        </Text>
      </Modal>
    </>
  );
};

export default AddTaskBtn;
