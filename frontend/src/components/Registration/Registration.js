import React from "react";
import "./Registration.css";
import Axios from "axios";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";


import {
  Paper,
  Grid,
  Typography,
  TextField,
  Link,
  Button,
} from "@material-ui/core";

import paperStyle from "../Login/loginStyles";

function Registration() {
  const classes = paperStyle();

  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [msg, setMsg] = useState(null);

  const [firstNameVal, setFirstNameVal] = useState("");
  const [lastNameVal, setLastNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");

  const register = () => {
    Axios({
      method: "POST",
      data: {
        firstName: firstNameReg,
        lastName: lastNameReg,
        email: emailReg,
        password: passwordReg,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => {
      setMsg(res.data);
      if (res.data === "Registration Successful") {
        window.location.href = "/login";
      }
    });
  };

  useEffect(() => {
    register();
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
        {/* <Grid
          container
          justifyContent="center"
          style={{
            paddingTop: 200,
            paddingBottom: 200,
          }}
        > */}


         

            <section className={classes.container}>
              <Container>
                <Grid
                  container
                  justifyContent="center"
                  style={{
                    paddingTop: 200,
                    paddingBottom: 200,
                  }}
                >
                  <Grid item xs={10} md={6} style={{
                    color: "white",
                    fontSize: "30px",
                    textAlign: "left",
                    paddingRight: 50,
                    paddingTop: 100,
                  }}>

                    Join Symptom <br></br>
                    Checker <br></br>
                    <br></br>


                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "20px",
                      }}>
                      A free symtpom

                      <br></br>
                      Checker App that <br></br>allows you to <br></br>
                      investigate your  <br></br>symptoms and <br></br>
                      test results.
                      <br></br>
                      Sign up today save your <br></br>results and build your medical history
                    </span>


                  </Grid>


                  <Grid item xs={10} md={6}>


                    <Paper elevation={10} className={classes.paper}>
                      <section>
                        <Grid align="center">
                          <h1>Registration</h1>

                          <Typography
                            variant="subtitle2"
                            gutterBottom
                            className={classes.typography}
                          >
                            Already have an account?
                            <span className="line">
                              {/* Router link here */}
                              <Link href="#" className={classes.formLink}>
                                Login
                              </Link>
                            </span>
                          </Typography>
                        </Grid>

                        <form>
                          <TextField
                            label="First Name"
                            variant="outlined"
                            type="text"
                            autoComplete="off"
                            fullWidth
                            margin="normal"
                            size="small"
                            className={classes.textField}
                            onChange={(e) => {
                              setFirstNameReg(e.target.value);
                              setFirstNameVal(e.target.value)
                            }}
                            required
                            error={firstNameVal === ""}
                            helperText={firstNameVal === "" ? "This field is required" : " "}
                          />
                          <TextField
                            label="Last Name"
                            variant="outlined"
                            type="text"
                            autoComplete="off"
                            fullWidth
                            margin="normal"
                            size="small"
                            className={classes.textField}
                            onChange={(e) => {
                              setLastNameReg(e.target.value);
                              setLastNameVal(e.target.value);
                            }}
                            required
                            error={lastNameVal === ""}
                            helperText={lastNameVal === "" ? "This field is required" : " "}
                          />
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
                              setEmailReg(e.target.value);
                              setEmailVal(e.target.value)
                            }}
                            required
                            error={emailVal === ""}
                            helperText={emailVal === "" ? "This field is required" : " "}
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
                              setPasswordReg(e.target.value);
                              setPasswordVal(e.target.value)
                            }}
                            required
                            error={passwordVal.length < 8}
                            helperText={passwordVal === "" ? "Password must be 8+ characters" : " "}
                          />
                          <Typography variant="subtitle1" gutterBottom>
                            <span className="line">
                              Want to stay up to date on the latest? <br />
                              add extra line + buttons
                            </span>
                          </Typography>
                          <br />

                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.btnStyle}
                            onClick={register}
                          >
                            Register
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
                </Grid>
              </Container>
            </section>
          
      </Box>
    </>

  );
}

export default Registration;
