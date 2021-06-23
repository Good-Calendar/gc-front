import DaySelector from './DaySelector';
import CategorySelector from './CategorySelector';
import { Grid } from '@material-ui/core';
import { BiBell } from 'react-icons/bi';
import { BiWrench } from 'react-icons/bi';

const style = {background: "red", height: "50px"};

const Nav = (props: any) => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <DaySelector />
                </Grid>
                <Grid item xs={8}>
                    <CategorySelector onChange={props.onChange} category={props.category}/>
                </Grid>
                <Grid item xs={1}>
                    <BiBell size={30} />
                    <BiWrench size={30} />
                </Grid>
            </Grid>
        </div>
    );
};

export default Nav;