import React from 'react';
import {Grid} from '@mui/material'
import SideNav from '../SideNav/SideNav';
import { Outlet } from 'react-router-dom';
import AddStudentForm from '../AddStudent/AddStudent';
import { makeStyles } from '@material-ui/core/styles'
import TopNav from '../TopNav/TopNav';
import NavForSmallDevice from '../TopNav/NavForSmallDevice';

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
            {/* <NavForSmallDevice/> */}
          </Grid>
        <Grid item xs={3}>
          <SideNav/>
        </Grid>
        <Grid className={classes.forms} item xs={9}>
<Outlet />
        </Grid>
      </Grid>
    );
};

export default Main;