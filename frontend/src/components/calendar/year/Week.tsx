import styled from "styled-components";
import moment from "moment";
import Day from "./Day";

type WeekProps = {
    WEEKS_OF_MONTH: moment.Moment[][];
    CURRENT_MONTH: number;
}

const Week = ({ WEEKS_OF_MONTH, CURRENT_MONTH }: WeekProps) => {
    return (
        <>
            {
                WEEKS_OF_MONTH.map((WEEK: moment.Moment[], idx: number) =>
                    <TrWeek key={idx}>
                        {
                            WEEK.map((DATE: moment.Moment, idx: number) =>
                                <Day key={idx} DATE={DATE} CURRENT_MONTH={CURRENT_MONTH} />)
                        }
                    </TrWeek>
                )
            }
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


export default Week;

