import { useState } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    width: 5rem;
    background: lightgray;
    border-radius: 8px;
`;



const clicked = {
    color: "white",
    background: "red"
};

const CategorySelector = (props: any) => {
    const BtnDay = styled.button`
        width: 5rem;
        color: ${props.category.DAY ? "white" : "black"};
        background-color: ${props.category.DAY ? "red" : "white"};
        border-radius: 8px;
    `;

    const BtnWeek = styled.button`
        width: 5rem;
        color: ${props.category.WEEK ? "white" : "black"};
        background-color: ${props.category.WEEK ? "red" : "white"};
        border-radius: 8px;
    `;

    const BtnMonth = styled.button`
        width: 5rem;
        color: ${props.category.MONTH ? "white" : "black"};
        background-color: ${props.category.MONTH ? "red" : "white"};
        border-radius: 8px;
    `;

    const BtnYear = styled.button`
        width: 5rem;
        color: ${props.category.YEAR ? "white" : "black"};
        background-color: ${props.category.YEAR ? "red" : "white"};
        border-radius: 8px;
    `;
    
    console.log("CategorySelector props : ", props)

    const [target, setTarget] = useState("MONTH");
    console.log("target : " + target);

    return (
        <>
            <BtnDay onClick={(e) => { props.onChange(e); setTarget("DAY"); }} value="DAY" className={props.category.DAY ? "clicked" : ""}>DAY</BtnDay>
            <BtnWeek onClick={(e) => { props.onChange(e); setTarget("WEEK"); }} value="WEEK" className={props.category.WEEK ? "clicked" : ""}>WEEK</BtnWeek>
            <BtnMonth onClick={(e) => { props.onChange(e); setTarget("MONTH"); }} value="MONTH" className={props.category.MONTH ? "clicked" : ""}>MONTH</BtnMonth>
            <BtnYear onClick={(e) => { props.onChange(e); setTarget("YEAR"); }} value="YEAR" className={props.category.YEAR ? "clicked" : ""}>YEAR</BtnYear>
        </>
    );
};

export default CategorySelector;