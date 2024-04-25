import React from "react";
import { CancelBtn, Form, SubmitBtn } from "./AddTaskForm.styled";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/todos/slice";
import { nanoid } from "nanoid";

const AddTaskForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      task: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        addTask({
          id: nanoid(),
          task: values.task,
        })
      );
      onClose();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <h2>Add new task</h2>
        <textarea
          name="task"
          onChange={formik.handleChange}
          value={formik.values.task}
        />
        <SubmitBtn type="submit">Add</SubmitBtn>
        <CancelBtn type="button" onClick={onClose}>
          Cancel
        </CancelBtn>
      </Form>
    </>
  );
};

export default AddTaskForm;
