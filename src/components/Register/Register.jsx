import React from "react";
import {
  Container,
  ImgFormBox,
  InputBox,
  LinkBtn,
  Logo,
  SubmitBtn,
  Wrapper,
} from "./Register.styled";
import logo from "../../images/logo.png";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { registerThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "schemas/yupSchemas";
import authImg from "../../images/auth-image.png";
import { useMediaQuery } from "react-responsive";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(registerThunk(values)).then(() => {
        navigate("/login");
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
          <ImgFormBox>
            {isDesktop && <img src={authImg} alt="illustration" />}
            <Wrapper>
              <h2>Registration</h2>
              <p>
                Thank you for your interest in our platform! In order to
                register, we need some information
              </p>
              <form onSubmit={formik.handleSubmit}>
                <InputBox>
                  <label htmlFor="name">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <span>{formik.errors.name}</span>
                    ) : null}
                  </label>
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
                <SubmitBtn type="submit">Sign Up</SubmitBtn>
                <LinkBtn to="/login">Already have an account?</LinkBtn>
              </form>
            </Wrapper>
          </ImgFormBox>
        </Container>
      </section>
    </>
  );
};

export default Register;
