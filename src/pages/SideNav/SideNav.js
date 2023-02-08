import { Grid, Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from '../../context/UserContext';

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
    backgroundColor:"#F62F76",
    color:"white",
width:'200px'
   
  }
});

const SideNav = () => {
  const classes = useStyles();

  const {logOut} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogOut = () => {
      logOut().then(() => {
        navigate("/login");
      });
    };

    return (
    
        <div  style={{padding:'15px'}}>
              <Grid container direction="column" alignItems='flex-start' >
        <Grid item xs={9}>
       <Link style={{textDecoration:'none'}} to='/add-student'>
       <Button  fullWidth variant="text"
      className={[classes.root,classes.btn].join(" ")}
       >
    Add a student
      </Button>
       </Link>
        </Grid>
     
        <Grid  item xs={9}>
          <Link style={{textDecoration:'none'}}  to='/'>
          <Button variant="text"fullWidth
      className={[classes.root, classes.pad,classes.btn].join(" ")}
      >
        Manage Student
      </Button>
       </Link>

      
      </Grid>
        <Grid className={classes.btn} fullWidth  item xs={9}>

        <Button onClick={handleLogOut} fullWidth   variant="text" 
      className={[classes.root, classes.btn].join(" ")}
      >
        Log out
      </Button>

      
      </Grid>
      </Grid>
</div>
     
    );
};

export default SideNav;