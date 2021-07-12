import styled from "styled-components";
import moment from "moment";
import { Moment, CurrentMonthContext } from "../custom-hook/useWeeksOfMonth"
import { useContext } from "react";

type DateProps = {
    currentMoment: Moment;
}
const TODAY = moment();
const Date = ({ currentMoment }: DateProps) => {
    const { year, month, date } = currentMoment;
    const currentMonth = useContext(CurrentMonthContext);
    const isCurrentMonth = month === (currentMonth || 12);
    const isToday = `${year}-${month}-${date}` === TODAY.format('YYYY-M-DD');

    return (
        <TdDay
            isCurrentMonth={isCurrentMonth}
            isToday={isToday}
            className={isToday ? "today" : "not-today"}
        >{date}</TdDay>
    )
}

type TdDayProps = {
    isCurrentMonth?: boolean,
    isToday?: boolean
}
const TdDay = styled.td`
    text-align: center;
    vertical-align: middle;
    padding:3px 10px;
    font-size: 16px;
    border-radius: 5px;
    color: '#696969';

    background: 'white';
    
    ${({ isCurrentMonth, isToday }: TdDayProps) =>
        isToday && isCurrentMonth && { background: '#2A9D8F', color: 'white' }};

    ${({ isCurrentMonth }: TdDayProps) =>
        !isCurrentMonth && { pointerEvents: "none", color: 'lightgrey' }};
`;

export default Date;