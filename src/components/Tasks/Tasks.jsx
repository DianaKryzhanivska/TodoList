import React, { useState } from "react";
import {
  BtnBox,
  Container,
  DoneBtn,
  EditBtn,
  Item,
  List,
  Wrapper,
} from "./Tasks.styled";
import { MdDone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Modal from "components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../redux/todos/selectors";
import { deleteTask, reorderTasks } from "../../redux/todos/slice";
import { toast } from "react-toastify";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import EditTaskForm from "components/EditTaskForm/EditTaskForm";
import AddTaskBtn from "components/AddTaskBtn/AddTaskBtn";
import { useMediaQuery } from "react-responsive";
import todosImg from "../../images/list.png";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const handleOpenEditModal = (task) => {
    setTaskToEdit(task);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setTaskToEdit(null);
    setOpenEditModal(false);
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
          <Wrapper>
            <div>
              <AddTaskBtn />
              {tasks?.length > 0 ? (
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="tasks">
                    {(provided) => (
                      <List
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
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
                                  <EditBtn
                                    type="button"
                                    onClick={() => handleOpenEditModal(item)}
                                  >
                                    <CiEdit />
                                  </EditBtn>
                                  <DoneBtn
                                    onClick={() => handleDoneClick(item)}
                                  >
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
              ) : (
                <p>Let's add your first task to the list!</p>
              )}
            </div>
            {isDesktop && <img src={todosImg} alt="illustration" />}
          </Wrapper>
        </Container>
      </section>
      <Modal isOpen={openEditModal} onClose={handleCloseEditModal}>
        <EditTaskForm task={taskToEdit} onClose={handleCloseEditModal} />
      </Modal>
    </>
  );
};

export default Tasks;
