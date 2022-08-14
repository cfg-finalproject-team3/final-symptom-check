import React from "react";
import "./Contact.css";
import Box from "@mui/material/Box";
import paperStyle from "../Login/loginStyles";
import { useState} from "react";
import { Paper, Grid, TextField, Button } from "@material-ui/core";
import { Container } from "@mui/system";

const FORM_ENDPOINT =";"
const ContactUs = () => {
    const classes = paperStyle();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = ()=>{
        setTimeout(()=>{
            setSubmitted(true);
        }, 100);
    };
    if (submitted){
        return(
            <>
             <h2>Thank you for contacting us!</h2>
            </>
        );
    }
  return (
     <Box
        sx={{
          minHeight: "100%",
          backgroundPosition: "top left",
          backgroundImage:
            "url(https://res.cloudinary.com/dl6pfjd5w/image/upload/v1660085941/symptom%20checker/background-1_kptzse.png)",
        }}
      >
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
              <Grid item xs={10} md={6}    style={{
                color: "white",
                fontSize: "26px",
                textAlign:"left",
                paddingRight: 50,
                paddingTop: 100,
              }}>
                Have you checked your <br></br>
                <span 
                style={{color:"#de2f44",
                       fontWeight: "bold"}}>
            Health status today?</span><br></br>
                Do contact us <br></br>If you wish to speak <br></br>
                to us directly and also <br></br>Get guides about our policies.<br></br>
                
                 

              </Grid>
              <Grid item xs={10} md={6}>
                <Paper elevation={10} className={classes.paper}>
                  <section>
                    <h1 style={{textAlign: "center",
                      }}>Contact Us</h1>

                    <form action = {FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="blank">
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
                          setFirstName(e.target.value);
                        }}
                        required
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
                          setLastName(e.target.value);
                        }}
                        required
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
                          setEmail(e.target.value);
                        }}
                        required
                      />

                      <TextField
                        variant="outlined"
                        type="message"
                        label="How can we help?"
                        multiline
                        minRows={8}
                        // maxRows={4}
                        //   value={value}

                        fullWidth
                        margin="normal"
                        size="small"
                        className={classes.textField}
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        required
                      />

                      <br />

                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        className={classes.btnStyle}

                      >
                        Send
                      </Button>
                    </form>
                  </section>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </section>
      </Box>
    
  );
};

export default ContactUs;
