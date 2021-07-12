import styled from "styled-components";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];
const WeekDaysTitle = () => {
    return (
        <tr>
            {
                WEEKDAYS.map((day, idx) =>
                    <ThWeekDay key={idx}>{day}</ThWeekDay>)
            }
        </tr>
    )
}

const ThWeekDay = styled.th`
    font-size:12px;
    color:grey;
`

export default WeekDaysTitle;