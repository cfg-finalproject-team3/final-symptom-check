import React from "react";
import "./Account.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import paperStyle from "../Login/loginStyles";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

 
const Account = () => {
  const [data, setData] = useState(null);
  const classes = paperStyle();
 
  // fetch user from the database
 
  const getUser = () => {
    Axios({
      method: "GET",
 
      withCredentials: true,
      url: "http://localhost:4000/account",
    }).then((res) => {
      setData(res.data);
    });
  };
 
  // renders once and shows the user
  useEffect(() => {
    getUser();
  }, []);
 
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
 
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
 
  function createData(name = "string", calories = "string", fat = "string") {
    return { name, calories, fat };
  }
 
  const rows = [
    createData(
      "12/05/2021",
      "runny nose, tight chest, coughing",
      "Common Cold, Influenza"
    ),
    createData(
      "11/03/2019",
      "nightmares , night sweats, asthma",
      "Asthma, Cannabis Abuse, Bronchitis "
    ),
    createData(
      "08/02/2019",
      "dry cough , headaches, sore throat",
      "Covid-19, Influenza, Sinusitis "
    ),
  ];
 
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
        <Grid container
              justifyContent="center"
              style={{
                paddingTop: 200,
                paddingBottom: 200,
              }}>
             
          <Grid
            item
            xs={10}
            md={3}
            style={{
              color: "white",
              fontSize: "16px",
              textAlign: "left",
              paddingRight: 50,
            }}
            >
            <section style={{marginTop: "50px",
            paddingTop: 100,
            textAlign: "center",}}><div>{data ? <h1>Welcome Back {data.firstName}!</h1> : null}</div></section>
            <section>
            <h3 style={{paddingBottom: "20px",

}}
            >Dashboard</h3>
            <img
              src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1660527483/symptom%20checker/profile_jml80p.png"
              alt="user avatar"
            />
 
      
            {data ? (
              <h4>
                {data.firstName} {data.lastName}
              </h4>
            ) : null}
 
 <Link href="/" color="#585858">
          Edit Profile
        </Link><br>
        </br>
            <Link href="/" color="#585858">
          Contact Preferences
        </Link><br></br>
            <Link href="/" color="#ffffff">
          Search history
        </Link><br></br>
        </section>
          </Grid>
 

        <Grid item xs={10} md={9} style={{marginTop: "150px",}}>
        <Paper elevation={10}>
        <section>
          
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 700, backgroundColor: "#ffffff" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell
                    style={{
                      backgroundColor: "#2B6DDF",
                    }}
                  >
                    Date
                  </StyledTableCell>
                  <StyledTableCell
                    style={{
                      backgroundColor: "#2B6DDF",
                    }}
                    align="right"
                  >
                    Search Terms
                  </StyledTableCell>
                  <StyledTableCell
                    style={{
                      backgroundColor: "#2B6DDF",
                    }}
                    align="right"
                  >
                    Search Results
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
        </Paper>
      </Grid>
      </Grid>
      </Container>
      </section>
    </Box>
  );
};
 
export default Account;

