import React from "react";
import {
  Container,
  InputBox,
  LinkBtn,
  Logo,
  SubmitBtn,
  Wrapper,
} from "../Register/Register.styled";
import logo from "../../images/logo.png";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { loginSchema } from "schemas/yupSchemas";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginThunk(values)).then(() => {
        navigate("/tasks");
      });
    },
  });
  return (
    <>
      <section>
        <Container>
          <Logo to="/">
            <img src={logo} alt="logo" />
            <p>TodoList</p>
          </Logo>
          <Wrapper>
            <h2>Log in to your account</h2>
            <p>Please login to your account before continuing</p>
            <form onSubmit={formik.handleSubmit}>
              <InputBox>
                <label htmlFor="email">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <span>{formik.errors.email}</span>
                  ) : null}
                </label>
                <label htmlFor="password">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <span>{formik.errors.password}</span>
                  ) : null}
                </label>
              </InputBox>
              <SubmitBtn type="submit">Sign In</SubmitBtn>
              <LinkBtn to="/register">Don't have an account?</LinkBtn>
            </form>
          </Wrapper>
        </Container>
      </section>
    </>
  );
};

export default Login;
