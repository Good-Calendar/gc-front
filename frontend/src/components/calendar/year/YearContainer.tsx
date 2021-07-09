import moment from 'moment';
import MonthContainer from './MonthContainer';
import Grid from '@material-ui/core/Grid';

type YearProps = {
    YEAR: number;
}
const MONTH_LIST = Array.from(Array(12), (_, idx) => idx);

const YearContainer = ({ YEAR }: YearProps) => {
    return (
        <div>
            <h2>{YEAR}</h2>
            <Grid container spacing={2}>
                {MONTH_LIST.map((MONTH, idx) =>
                    <Grid item xs={3} key={idx}>
                        <MonthContainer DATE={moment().year(YEAR).month(MONTH)} />
                    </Grid>
                )}
            </Grid>
        </div>
    );
};
export default YearContainer;

