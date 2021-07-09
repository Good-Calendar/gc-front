import styled from "styled-components";
import { getDates } from "./Dates";
import { useContext } from "react";
import { CategoryContext } from "../../components/useCategory";

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

const media: { [key: string]: any } = {
  xs: (styles: string) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `
};

export const Col = styled.div<{ key: number; size: number; collapse?: string }>`
  flex: ${props => props.size};
  border: 1px solid lightgray;
  height: 14vh;

  ${props =>
    props.collapse &&
    media[props.collapse](`
    display: none;
  `)}
`;

const Month = () => {
  const { criteria } = useContext(CategoryContext);
  const dates = getDates(criteria);

  return (
    <Grid className="Month">
      {dates.map(arr => (
        <Row>
          {arr.map((obj, idx) => (
            <Col key={idx} size={1}>
              {obj.date}
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  );
};

export default Month;
