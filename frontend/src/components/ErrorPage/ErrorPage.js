import React from "react";
import { Button } from "@material-ui/core";
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
 
      <div className="not-found">
          <h1 className="title">Uh Oh!</h1> 
          <h2 className="errordesc">You have found a page that does not exist!</h2>
          <p className="description1">Before continuing about your day,</p>
          <Link to="/"><Button>Go back to the Homepage</Button></Link>
          </div>

      </Box>
      </>
      )
};

export default ErrorPage;











