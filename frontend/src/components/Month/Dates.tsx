import moment, { now } from "moment";

type Dtype = {
  month: number;
  date: number;
  day: number;
};

export const getDates = (criteria: moment.Moment) => {
  const startDate = criteria.clone();
  const dates: Dtype[][] = new Array(6);

  for (let i = 0; i < dates.length; i++) dates[i] = new Array();

  for (let dayCnt = 1; dayCnt <= startDate.day(); dayCnt++) {
    const now = startDate.clone().subtract(dayCnt, "d");

    dates[0].unshift({
      month: now.month() + 1,
      date: now.date(),
      day: now.day()
    });
  }

  for (let dayCnt = 0, weekCnt = 0; weekCnt < 6; dayCnt++) {
    const now = startDate.clone().add(dayCnt, "d");

    dates[weekCnt].push({
      month: now.month() + 1,
      date: now.date(),
      day: now.weekday()
    });

    if (now.day() == 6) weekCnt++;
  }

  return dates;
};
