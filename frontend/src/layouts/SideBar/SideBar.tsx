import styled from "styled-components";
import { BsPlusSquareFill } from "react-icons/bs";
import { useContext } from "react";
import { CategoryContext } from "../../components/useCategory";
import { useEffect } from "react";

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 300px;
  background-color: black;
  color: white;
`;

const AddEvent = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Subject = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

const Item = styled.div<{ color: string }>`
  color: ${props => props.color};
  font-size: 2.5rem;
`;

const SideBar = () => {
  const { criteria } = useContext(CategoryContext);

  return (
    <Container>
      <AddEvent className="addevent">
        <BsPlusSquareFill size={30} style={{ marginRight: "10px" }} />
      </AddEvent>
      <Subject className="subject">
        <Item color="red">{criteria.year()}년</Item>
        &emsp;
        <Item color="white">{criteria.month() + 1}월</Item>
      </Subject>
    </Container>
  );
};

export default SideBar;
