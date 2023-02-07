import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@mui/material';

const useStyles = makeStyles({
    container: {
       
        paddingTop:'10px',
        paddingBottom:'10px'
    }
  });

const TopNav = () => {
    const classes = useStyles();
    return (
        <div  className={classes.container}>
<Grid container direction="row" justifyContent="space-evenly"  alignItems="center">
          <Grid >
        <Typography variant='h4'>Logo</Typography>
          </Grid>
        <Grid >
        <Typography variant='h4'>Logo</Typography>
        </Grid>
     
      </Grid>
            
        </div>
        // stuStore
      // HWXbBwy4ur9dpNzc
    );
};

export default TopNav;