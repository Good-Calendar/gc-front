import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

const BtnArrow = styled.button`
  width: 2rem;
  height: 2rem;
  background: lightgray;
  margin: 0;
  padding: 0;
`;

const BtnToday = styled.button`
  width: 4rem;
  height: 2rem;
  background: lightgray;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const DaySelector = () => {
  return (
    <>
      <BtnArrow><BiChevronLeft size={20} /></BtnArrow>
      <BtnToday>Today</BtnToday>
      <BtnArrow><BiChevronRight size={20} /></BtnArrow>
    </>
  );
};

export default DaySelector;
