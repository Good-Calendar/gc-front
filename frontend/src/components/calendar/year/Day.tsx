import styled from "styled-components";
import moment from "moment";
type DayProps = {
    DATE: moment.Moment;
    CURRENT_MONTH: number;
}
const TODAY = moment();
const Day = ({ DATE, CURRENT_MONTH }: DayProps) => {
    const isCurrentMonth = DATE.month() === CURRENT_MONTH;
    const isToday = DATE.format('YYYY-MM-DD') === TODAY.format('YYYY-MM-DD');
    return (
        <TdDay
            isCurrentMonth={isCurrentMonth}
            isToday={isToday}
            className={isToday ? "today" : "not-today"}
        >{DATE.date()}</TdDay>
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

export default Day;