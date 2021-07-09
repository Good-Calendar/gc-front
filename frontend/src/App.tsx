import useCategory, { CategoryContext } from "./components/useCategory";
import SideBar from "./layouts/SideBar/SideBar";
import styled, { createGlobalStyle } from "styled-components";
import Section from "./layouts/Section/Section";
import { useState } from "react";
import moment from "moment";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
  }
	body {
		padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  padding-top: 56px;
  height: 100%;
  padding-left: 300px;
`;

function App() {
  const [selectedCategory, handlerCategory] = useCategory();
  const [today, setToday] = useState(moment());
  const [now, setNow] = useState(moment());
  const [criteria, setCriteria] = useState(moment().startOf("month"));
  const props = { selectedCategory, handlerCategory, today, setToday, now, setNow, criteria, setCriteria };
  const CategoryProvider = CategoryContext.Provider;

  return (
    <Container>
      <CategoryProvider value={props}>
        <GlobalStyle />
        <SideBar />
        <Section />
      </CategoryProvider>
    </Container>
  );
}

export default App;
