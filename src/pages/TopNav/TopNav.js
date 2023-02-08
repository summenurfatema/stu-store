import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@mui/material';
import { AuthContext } from '../../context/UserContext';

const useStyles = makeStyles({
    container: {
       
        paddingTop:'10px',
        paddingBottom:'40px'
    }
  });

const TopNav = () => {
  const{user}=useContext(AuthContext)
    const classes = useStyles();
    return (
        <div  className={classes.container}>
<Grid container direction="row" justifyContent="space-evenly"  alignItems="center">
          <Grid >
        <Typography variant='h4'>Stu-Store</Typography>
          </Grid>
        <Grid >
        <Typography xs={12} sm={6} variant='h6'>Welcome- {user?.email}!!</Typography>
       
        </Grid>
     
      </Grid>
            
        </div>
    
    );
};

export default TopNav;