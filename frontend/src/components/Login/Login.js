import React from "react";
import "./Login.css";
import Axios from "axios";

import { useState, useEffect } from "react";

import paperStyle from "./loginStyles";
import Box from "@mui/material/Box";

import {
  Paper,
  Grid,
  Typography,
  TextField,
  Link,
  Button,
} from "@material-ui/core";

function Login() {
  const classes = paperStyle();

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [msg, setMsg] = useState(null);

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: emailLogin,
        password: passwordLogin,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      setMsg(res.data);
      if (res.data === "Login Successful") {
        window.location.href = "/account";
      }
    });
  };

  useEffect(() => {
    login();
  }, []);

  if (!msg) return null;

  return (
    <>

<Box
        sx={{
          minHeight: "100%",
          backgroundPosition: "top left",
          backgroundImage:
            "url(https://res.cloudinary.com/dl6pfjd5w/image/upload/v1660085941/symptom%20checker/background-1_kptzse.png)",
        }}
      >
        <Grid
          container
          justifyContent="center"
          style={{
            paddingTop: 200,
            paddingBottom: 200,
          }}
        >
          <Grid item xs={10} md={5}>

    
      <section className={classes.container}>
        <Grid>
          <Paper elevation={10} className={classes.paper}>
            <section>
              <Grid align="center">
                <h1>Login</h1>

                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className={classes.typography}
                >
                  Don't have an account already?
                  <span className="line">
                    {/* Router link here */}
                    <Link href="#" className={classes.formLink}>
                      Register
                    </Link>
                  </span>
                </Typography>
              </Grid>

              <form>
                <TextField
                  label="Email address"
                  variant="outlined"
                  type="email"
                  autoComplete="off"
                  fullWidth
                  margin="normal"
                  size="small"
                  className={classes.textField}
                  onChange={(e) => {
                    setEmailLogin(e.target.value);
                  }}
                  required
                />

                <TextField
                  variant="outlined"
                  type="password"
                  label="Password (8+ characters)"
                  fullWidth
                  margin="normal"
                  size="small"
                  className={classes.textField}
                  onChange={(e) => {
                    setPasswordLogin(e.target.value);
                  }}
                  required
                />
                <Typography variant="subtitle2" gutterBottom>
                  <span className="line">
                    {/* Router link here */}
                    <Link href="#" className={classes.formLink}>
                      Forgot password?
                    </Link>
                  </span>
                </Typography>
                <br />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.btnStyle}
                  onClick={login}
                >
                  Login
                </Button>

                <Grid align="center">
                  <section>
                    <p>{msg}</p>
                  </section>
                </Grid>
              </form>
            </section>
          </Paper>
        </Grid>
      </section> 
      </Grid>
      </Grid>
      </Box>
    </>
  );
}

export default Login;
