import React from 'react';
import {Grid} from '@mui/material'
import SideNav from '../pages/SideNav/SideNav';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import TopNav from '../pages/TopNav/TopNav';


const useStyles = makeStyles({
    container: {
      margin: 1
    },
    forms :{
padding:10
    }
  });

const Main = () => {
    const classes = useStyles();
    return (
        <Grid container direction="row"  className={classes.container}>

          <Grid item xs={12}>
            <TopNav/>
          </Grid>


        <Grid item xs={12} sm={12} md={3} lg={3}>
          <SideNav/>
        </Grid>


        <Grid className={classes.forms} item xs={12}  sm={12} md={9} lg={9}>
          <Outlet />
        </Grid>
        
      </Grid>
    );
};

export default Main;