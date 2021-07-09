import { useEffect, useState } from 'react';
import moment from 'moment';


function initWeeksOfMonth(DATE: moment.Moment): moment.Moment[][] {
    DATE = DATE.date(1);
    const WEEKDAY_1DAY = moment(DATE).day(); // 0(일)-6(월)

    const WEEKS_OF_MONTH = [];
    let dayPointer = WEEKDAY_1DAY * -1;
    for (let week = 0; week < 6; week++) { // 6주
        const WEEK = [];
        for (let day = 0; day < 7; day++) { // 7일
            WEEK.push(moment(DATE).add(dayPointer++, 'd'));
        }
        WEEKS_OF_MONTH.push(WEEK);
    }
    return WEEKS_OF_MONTH;
}

export default function useWeeksOfMonth(DATE: moment.Moment) {
    const [WEEKS_OF_MONTH, setWeeksOfMonth] = useState<moment.Moment[][]>([]);
    useEffect(() => {
        setWeeksOfMonth(initWeeksOfMonth(DATE));
    }, [DATE])
    return WEEKS_OF_MONTH;
}