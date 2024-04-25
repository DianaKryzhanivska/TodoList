import React from "react";
import { CancelBtn, Form, SubmitBtn } from "../AddTaskForm/AddTaskForm.styled";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/todos/slice";

const EditTaskForm = ({ task, onClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      task: task.task,
    },
    onSubmit: (values) => {
      dispatch(
        editTask({
          id: task.id,
          newData: values.task,
        })
      );
      onClose();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <h2>Edit task</h2>
        <textarea
          name="task"
          onChange={formik.handleChange}
          value={formik.values.task}
        />
        <SubmitBtn type="submit">Edit</SubmitBtn>
        <CancelBtn type="button" onClick={onClose}>
          Cancel
        </CancelBtn>
      </Form>
    </>
  );
};

export default EditTaskForm;
