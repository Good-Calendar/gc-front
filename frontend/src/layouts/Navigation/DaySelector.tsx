import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { CategoryContext } from "../../components/useCategory";
import { useEffect, useContext } from "react";
import moment from "moment";

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
  const { criteria, setCriteria } = useContext(CategoryContext);

  useEffect(() => {
    console.log("DaySelector criteria : ", criteria.format());
  }, [criteria]);

  return (
    <>
      <BtnArrow
        onClick={() => {
          setCriteria(criteria.clone().subtract(1, "M"));
        }}
      >
        <BiChevronLeft size={20} />
      </BtnArrow>
      <BtnToday
        onClick={() => {
          setCriteria(moment().startOf("month"));
        }}
      >
        Today
      </BtnToday>
      <BtnArrow
        onClick={() => {
          setCriteria(criteria.clone().add(1, "M"));
        }}
      >
        <BiChevronRight size={20} />
      </BtnArrow>
    </>
  );
};

export default DaySelector;
