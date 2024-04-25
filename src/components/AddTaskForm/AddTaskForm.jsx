import React from "react";
import { CancelBtn, Form, SubmitBtn } from "./AddTaskForm.styled";
import { useFormik } from "formik";

const AddTaskForm = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      task: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
