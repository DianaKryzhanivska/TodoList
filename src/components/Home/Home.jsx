import React from "react";
import {
  Container,
  Item,
  List,
  Text,
  TextBox,
  Title,
  Wrapper,
} from "./Home.styled";
import { MdDoneOutline } from "react-icons/md";
import homeImg from "../../images/home.png";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <>
      <section>
        <Container>
          <Title>
            Welcome to <span>TodoList</span> App!
          </Title>
          <Wrapper>
            <TextBox>
              <Text>Here you can:</Text>
              <List>
                <Item>
                  <MdDoneOutline />
                  Log in and use your own account
                </Item>
                <Item>
                  <MdDoneOutline />
                  View the task list
                </Item>
                <Item>
                  <MdDoneOutline />
                  Add new assignments
                </Item>
                <Item>
                  <MdDoneOutline />
                  Mark tasks as completed
                </Item>
                <Item>
                  <MdDoneOutline />
                  Edit the task text
                </Item>
                <Item>
                  <MdDoneOutline />
                  Change the order of tasks by dragging
                </Item>
              </List>
            </TextBox>
            {isDesktop && <img src={homeImg} alt="illustration" />}
          </Wrapper>
        </Container>
      </section>
    </>
  );
};

export default Home;
