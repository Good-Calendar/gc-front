import useWeeksOfMonth from "../custom-hook/useWeeksOfMonth";
import styled from "styled-components";
import moment from "moment";
import Week from "./Week";

type MonthProps = {
    DATE: moment.Moment;
}
const MonthContainer = ({ DATE }: MonthProps) => {
    const WEEKS_OF_MONTH = useWeeksOfMonth(DATE);
    return (
        <div>
            <h3>{DATE.month() + 1}월</h3>
            <table>
                <thead>
                    <WeekDays />
                </thead>
                <tbody>
                    <Week WEEKS_OF_MONTH={WEEKS_OF_MONTH} CURRENT_MONTH={DATE.month()} />
                </tbody>
            </table>
        </div >
    );
};

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];
const WeekDays = () => {
    return (
        <tr>
            {
                WEEKDAYS.map((weekday, idx) =>
                    <ThWeekDay key={idx}>{weekday}</ThWeekDay>)
            }
        </tr>
    )
}

const ThWeekDay = styled.th`
    font-size:12px;
    color:grey;
`


export default MonthContainer;

