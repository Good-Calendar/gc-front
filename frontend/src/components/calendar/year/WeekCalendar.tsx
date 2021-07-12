import styled from "styled-components";
import Date from "./Date";
import { Moment } from "../custom-hook/useWeeksOfMonth"

type WeekProps = {
    week: Moment[];
}

const WeekCalendar = ({ week }: WeekProps) => {
    return (
        <>
            <TrWeek>
                {
                    week.map((currentMoment: Moment, idx: number) =>
                        <Date key={idx} currentMoment={currentMoment} />)
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

