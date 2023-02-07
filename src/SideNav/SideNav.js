import { Grid, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: props => props.color,
    color: "black",
    "&:hover": {
      background: "#0069d9",
      color: "white",
      textAlign: 'start',
    }
  },
  pad: {
    marginTop: "16px",
    marginBottom: "16px"
  },
  btn:{
width:'300px'
   
  }
});

const SideNav = () => {
    const [color, setColor] = useState("#fff");
    const classes = useStyles({ color });
    return (
      <div>

<div></div>

        {/* lg */}
        <div style={{padding:'15px'}}>
              <Grid container direction="column" alignItems='flex-start' >
        <Grid item xs={9}>
       <Link style={{textDecoration:'none'}} to='/addstudent'>
       <Button  fullWidth variant="text"
      className={[classes.root,classes.btn].join(" ")}
      onClick={() => setColor("#0069d9")}  >
    Add a student
      </Button>
       </Link>
        </Grid>
     
        <Grid  item xs={9}>
          <Link style={{textDecoration:'none'}}  to='/'>
          <Button variant="text"fullWidth
      className={[classes.root, classes.pad,classes.btn].join(" ")}
      onClick={() => setColor("#0069d9")} >
        Manage Student
      </Button>
       </Link>

      
      </Grid>
        <Grid className={classes.btn} fullWidth  item xs={9}>

        <Button  fullWidth   variant="text" 
      className={[classes.root, classes.btn].join(" ")}
      onClick={() => setColor("#0069d9")} >
        Log out
      </Button>

      
      </Grid>
      </Grid>
    </div>
      </div>
    );
};

export default SideNav;