import { Container } from "@mui/material";
import React from "react";
import { useContext } from "react";
// import { toast } from "react-hot-toast";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


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
      width: "100%", // Fix IE 11 issue.
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


const Login = () => {
  const classes = useStyles();
  const { signIn, } = useContext(AuthContext);
  const navigate = useNavigate();

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  
// login
signIn(email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              form.reset();
            })
             .then(() => {
              
              alert("Login Successful !!!");
              navigate("/manage-student")
            })
              
            .catch((error) =>
              alert(`${error} Please enter valid Email/Password`)
            );

        }


  return (
 
          <Container component="main" maxWidth="xs">
             <CssBaseline />
      <div className={[classes.paper,classes.div].join(" ")}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
    Login Here
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>

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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={[classes.submit,classes.btn].join(" ")}
          >
            Login
          </Button>
          <Grid container className={classes.paragraph}>
           <Grid item>
               <Link style={{textDecoration:"none"}} to="/signup" variant="body2">
                Don't have an account? Sign up here
              </Link>
            </Grid>
          </Grid>
          </Grid>
        </form>
        </div>
    </Container>
        
    
  );
};

export default Login;

