import useWeeksOfMonth from "../custom-hook/useWeeksOfMonth";
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
        <>
            {
                <div>
                    <h3>{currentMoment.month() || 12}월</h3>
                    < table >
                        <thead>
                            <WeekDaysTitle />
                        </thead>
                        <tbody>
                            {
                                weeksOfMonth.map((week: Moment[], idx: number) =>
                                    <WeekCalendar key={idx} week={week} currentMonth={currentMoment.month()} />
                                )
                            }
                        </tbody>
                    </table>
                </div >
            }
        </>
    );
};



export default memo(MonthCalendar);

