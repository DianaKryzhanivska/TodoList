import React, { useState } from "react";
import {
  AddTaskBtn,
  BtnBox,
  Container,
  DoneBtn,
  EditBtn,
  Item,
  List,
} from "./Tasks.styled";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Modal from "components/Modal/Modal";
import AddTaskForm from "components/AddTaskForm/AddTaskForm";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../redux/todos/selectors";
import { deleteTask, reorderTasks } from "../../redux/todos/slice";
import { toast } from "react-toastify";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDoneClick = (task) => {
    dispatch(deleteTask(task));
    toast.success(`Good job! 👍`);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    dispatch(
      reorderTasks({
        startIndex: result.source.index,
        endIndex: result.destination.index,
      })
    );
  };

  return (
    <>
      <section>
        <Container>
          <AddTaskBtn type="button" onClick={handleOpenModal}>
            Add task
            <IoIosAddCircleOutline />
          </AddTaskBtn>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <List ref={provided.innerRef} {...provided.droppableProps}>
                  {tasks?.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <Item
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>{item.task}</p>
                          <BtnBox>
                            <EditBtn type="button">
                              <CiEdit />
                            </EditBtn>
                            <DoneBtn onClick={() => handleDoneClick(item)}>
                              <MdDone />
                            </DoneBtn>
                          </BtnBox>
                        </Item>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              )}
            </Droppable>
          </DragDropContext>
        </Container>
      </section>
      <Modal isOpen={openModal} onClose={handleCloseModal}>
        <AddTaskForm onClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default Tasks;
