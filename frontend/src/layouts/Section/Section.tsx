import styled from "styled-components";
import Month from "../../components/Month/Month";
import useCategory, { CategoryContext } from "../../components/useCategory";
import Nav from "../Navigation/Nav";
import { useContext } from "react";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Section = () => {
  const { selectedCategory } = useContext(CategoryContext);
  console.log("Section selectedCategory : " + selectedCategory);

  return (
    <Container className="container">
      <Nav />
      <Wrapper className="wrapper">{selectedCategory === "MONTH" && <Month />}</Wrapper>
    </Container>
  );
};

export default Section;
