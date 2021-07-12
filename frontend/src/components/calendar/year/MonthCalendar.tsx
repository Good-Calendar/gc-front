import useWeeksOfMonth, { CurrentMonthContext } from "../custom-hook/useWeeksOfMonth";
import WeekCalendar from "./WeekCalendar";
import WeekDaysTitle from './WeekDaysTitle';
import { Moment } from "../custom-hook/useWeeksOfMonth";

import moment from "moment";
import { memo } from "react";

type MonthCalendarProps = {
    currentMoment: moment.Moment;
}
const MonthCalendar = ({ currentMoment }: MonthCalendarProps) => {
    const weeksOfMonth = useWeeksOfMonth(currentMoment);
    return (
        <CurrentMonthContext.Provider value={currentMoment.month()}>
            <h3>{currentMoment.month() || 12}월</h3>
            < table >
                <thead>
                    <WeekDaysTitle />
                </thead>
                <tbody>
                    {
                        weeksOfMonth.map((week: Moment[], idx: number) =>
                            <WeekCalendar key={idx} week={week} />
                        )
                    }
                </tbody>
            </table>
        </CurrentMonthContext.Provider>
    );
};



export default memo(MonthCalendar);

