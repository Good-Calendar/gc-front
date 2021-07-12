import moment from 'moment';
import MonthCalendar from './MonthCalendar';
import Grid from '@material-ui/core/Grid';

type YearCalendarProps = {
    year: number;
}
const MONTH_LIST = Array.from(Array(12), (_, idx) => idx);
const YearCalendar = ({ year }: YearCalendarProps) => {
    return (
        <div>
            <h2>{year}</h2>
            <Grid container spacing={2}>
                {MONTH_LIST.map((month, idx) =>
                    <Grid item xs={3} key={idx}>
                        <MonthCalendar currentMoment={moment().year(year).month(month)} />
                    </Grid>
                )}
            </Grid>
        </div>
    );
};
export default YearCalendar;

