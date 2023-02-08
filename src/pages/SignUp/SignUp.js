import { Container} from "@mui/material";
import React from "react";
import { useContext } from "react";
// import { toast } from "react-hot-toast";
import { Link, useNavigate} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../context/UserContext";


const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    btn:{
        backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    div:{
        border:"1px solid gray",
        padding:"20px 40px",
        borderRadius:"5px"
    },
    paragraph:{
        display:"flex",
        justifyContent:"center",
         alignItems:"center"
}
      }
  ));


const SignUp = () => {
  const classes = useStyles();
  const { createUser} = useContext(AuthContext);
  const navigate = useNavigate();

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.valuee;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const name =`${firstName} ${lastName}`


    if (password.length < 6) {
      alert("Please enter at least 6 characters !!");
      return;
    }
    if (password !== confirm) {
    alert("Please enter correct password !!");
      return;
    } else {
      alert("Registration Successful !!!");
    }
 const user ={
    "email": email,
    "fullname":name
 }
 console.log(user);

    createUser(email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              form.reset();
            })
             .then(() => {navigate("/");})
              
            .catch((error) =>
              alert(`${error}.Please  valid Email/Password`)
            );

        }


  return (
    <div>
      
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={[classes.paper,classes.div].join(" ")}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>



            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm"
                label="Confirm Password"
                type="password"
                id="confirm"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept all the terms and condition"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={[classes.submit,classes.btn].join(" ")}
          >
            Sign Up
          </Button>
          <Grid container className={classes.paragraph}>
           <Grid item>
               <Link style={{textDecoration:"none"}} href="/login" variant="body2">
                Already have an account? Login here.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}>
        <MadeWithLove />
      </Box> */}
    </Container>
        
    </div>
  );
};

export default SignUp;
