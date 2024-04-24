import React from "react";
import {
  Container,
  InputBox,
  LinkBtn,
  Logo,
  SubmitBtn,
  Wrapper,
} from "./Register.styled";
import logo from "../../images/logo.png";

const Register = () => {
  return (
    <>
      <section>
        <Container>
          <Logo to="/">
            <img src={logo} alt="logo" />
            <p>TodoList</p>
          </Logo>
          <Wrapper>
            <h2>Registration</h2>
            <p>
              Thank you for your interest in our platform! In order to register,
              we need some information.
            </p>
            <form>
              <InputBox>
                <label htmlFor="name">
                  <input type="text" id="name" name="name" placeholder="Name" />
                </label>
                <label htmlFor="email">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </label>
                <label htmlFor="password">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </label>
              </InputBox>
              <SubmitBtn type="submit">Sign Up</SubmitBtn>
              <LinkBtn to="/login">Already have an account?</LinkBtn>
            </form>
          </Wrapper>
        </Container>
      </section>
    </>
  );
};

export default Register;
