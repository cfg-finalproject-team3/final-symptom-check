import React from "react";
import "./Login.css";
import Axios from "axios";

import { useState, useEffect } from "react";

import paperStyle from "./loginStyles";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom'
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Link,
  Button,
} from "@material-ui/core";
import { useAuthState } from "../../context/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const classes = paperStyle();
  const { setAuth } = useAuthState();

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [msg, setMsg] = useState(null);

  const [emailLoginVal, setEmailLoginVal] = useState("");
  const [passwordLoginVal, setPasswordLoginVal] = useState("");

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
        setAuth({
          authenticated: true,
        });
       navigate('/account')
      }
    });
  };

  useEffect(() => {
    login();
  }, []);

  React.useEffect(() => {
    setAuth({ authenticated: false });
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
                          setEmailLoginVal(e.target.value);
                        }}
                        required
                        error={emailLoginVal === ""}
                        helperText={
                          emailLoginVal === "" ? "This field is required" : " "
                        }
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
                          setPasswordLoginVal(e.target.value);
                        }}
                        required
                        error={passwordLoginVal.length < 8}
                        helperText={
                          passwordLoginVal === ""
                            ? "Password must be 8+ characters"
                            : " "
                        }
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
