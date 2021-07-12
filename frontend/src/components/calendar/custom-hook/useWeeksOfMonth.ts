import { useLayoutEffect, useState } from 'react';
import moment from 'moment';

export interface Moment {
    year: number;
    month: number;
    date: number;
}

function initWeeksOfMonth(currentMoment: moment.Moment): Moment[][] {
    const WEEKDAY_1DAY = currentMoment.date(1).day() * -1; // 0(일)-6(월)
    currentMoment.add(WEEKDAY_1DAY - 1, 'd');
    const weeksOfMonth = [];

    for (let week = 0; week < 6; week++) { // 6주
        const daysOfWeek = [];
        for (let day = 0; day < 7; day++) { // 7일
            currentMoment.add(1, 'd');
            const [year, month, date] = currentMoment.format('YYYY MM DD').split(" ").map(Number)
            daysOfWeek.push({ year, month, date } as Moment);
        }
        weeksOfMonth.push(daysOfWeek);
    }
    return weeksOfMonth;
}

export default function useWeeksOfMonth(currentMoment: moment.Moment) {
    const [weeksOfMonth, setWeeksOfMonth] = useState<Moment[][]>([]);
    useLayoutEffect(() => {
        setWeeksOfMonth(initWeeksOfMonth(currentMoment));
    }, [currentMoment])
    return weeksOfMonth;
}