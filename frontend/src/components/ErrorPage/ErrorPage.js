import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const ErrorPage = () => {
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
        <Grid xs={10} md={6} marginTop={200}>
          <div paddingTop="200px" className="not-found">
            <Typography
              color="#070C3A"
              margin={3}
              marginTop={200}
              marginBottom={5}
              alignContent="center"
              justifyContent="center"
              variant="h3"
              fontFamily="Montserrat"
              fontWeight={500}
            >
              <h1 className="title">Uh Oh!</h1>
            </Typography>

            <Typography
              color="#white"
              margin={3}
              marginTop={10}
              marginBottom={5}
              alignContent="center"
              justifyContent="center"
              variant="h3"
              fontFamily="Montserrat"
              fontWeight={200}
            >
              {" "}
              <h2 className="errordesc">
                You have found a page that does not exist!
              </h2>
            </Typography>

            <Typography
              color="white"
              margin={3}
              marginTop={10}
              marginBottom={5}
              alignContent="center"
              justifyContent="center"
              variant="h3"
              fontFamily="Montserrat"
              fontWeight={100}
            >
              <p className="description1">Before continuing about your day,</p>
            </Typography>
            <Link to="/">
              <Button>Go back to the Homepage</Button>
            </Link>
          </div>
        </Grid>
      </Box>
    </>
  );
};

export default ErrorPage;
