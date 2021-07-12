import styled from "styled-components";
import Date from "./Date";
import { Moment } from "../custom-hook/useWeeksOfMonth"

type WeekProps = {
    week: Moment[];
    currentMonth: number;
}

const WeekCalendar = ({ week, currentMonth }: WeekProps) => {
    return (
        <>
            <TrWeek>
                {
                    week.map((currentMoment: Moment, idx: number) =>
                        <Date key={idx} currentMoment={currentMoment} currentMonth={currentMonth} />)
                }
            </TrWeek>
        </>
    )
}
const TrWeek = styled.tr`
    cursor: pointer;
    & td.not-today:hover {
        background-color: #EEEEEE;
    };
    & td.today:hover {
        background-color: #047769
    };
`;


export default WeekCalendar;

