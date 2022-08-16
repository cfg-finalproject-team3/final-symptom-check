import { useEffect, useState } from "react";
import axios from "axios";
import Test from "./components/About/Test";
import "./App.css";
import "./components/About/Test.css";
import Box from "@mui/material/Box";
import { Grid, Container, Button, Paper } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import * as React from "react";
// // import paperStyle from "./loginStyles";
// import { Paper} from "@material-ui/core";
// import { styled } from '@mui/system';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Close } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";

import paperStyle from "./AppStyles";

function App() {





    
  const classes = paperStyle();

  //All symptoms available
  const [symptoms, setSymptoms] = useState([]);

  //Entered patient symptom
  const [patientSymptom, setPatientSymptom] = useState("");

  //All symptoms entries of patient
  const [patientSymptoms, setPatientSymptoms] = useState([]);

  //Possible conditions
  const [conditions, setConditions] = useState([]);

  //Gender
  const [gender, setGender] = useState("");

  //Age
  const [age, setAge] = useState(0);

   //fetch all symptoms
   const getSymptoms = () => {
    axios({
        url: "https://api.infermedica.com/v3/concepts?types=symptom",
        method: "get",
        headers: {
            "App-Id": "d6eb2a75",
            "App-Key": "1d7353f44febd8d14d9626f9219ee475",
            "Content-Type": "application/json",
        },
    }).then((res) => {
        console.log(res.data);
        setSymptoms(res.data);
    });
};
  //Fetch results of diagnosis depending on the three symptoms, age, and gender
  const getDiagnosis = () => {
    axios({
      url: "https://api.infermedica.com/v3/diagnosis",
      method: "post",
      headers: {
        "App-Id": "d6eb2a75",
        "App-Key": "1d7353f44febd8d14d9626f9219ee475",
        "Content-Type": "application/json",
      },
      data: {
        sex: `${gender}`,
        age: {
          value: `${age}`,
        },
        evidence: [
          {
            id: `${patientSymptoms[0]?.id}`,
            choice_id: "present",
            source: "initial",
          },
          {
            id: `${patientSymptoms[1]?.id}`,
            choice_id: "present",
          },
          {
            id: `${patientSymptoms[2]?.id}`,
            choice_id: "present",
          },
        ],
      },
    }).then((res) => {
      console.log(res.data);
      localStorage.setItem(
          "conditions",
          JSON.stringify(res.data.conditions)
      );
      const allResults = JSON.parse(localStorage.getItem("conditions"));
      if (allResults === null) allResults = [];
      allResults.push(res.data.conditions);
      localStorage.setItem("conditions", JSON.stringify(allResults));
      setConditions(res.data.conditions);
    });

    setGender("");
    setAge(0);
  };

  //After selecting a symptom it will add the selected symptom to the patients symptoms
  const addSymptomHandler = () => {
    // Symptom name
    const symptom = symptoms.filter((symptom) => {
      return symptom.name === patientSymptom;
    });

    setPatientSymptoms(
      // PatientSymptoms = [{},{}];
      patientSymptoms.length < 1
        ? [{ id: symptom[0].id, name: symptom[0].name }]
        : [...patientSymptoms, { id: symptom[0].id, name: symptom[0].name }]
    );

    setPatientSymptom("");
  };

  //Run to get all symptoms function every page reload
  useEffect(() => {
    getSymptoms();
  }, []);

  console.log(gender);
  console.log(patientSymptom);

  return (
    <>
      <Box
        sx={{
          minHeight: "100%",
          backgroundPosition: "top left",
          // backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://res.cloudinary.com/dl6pfjd5w/image/upload/v1660085926/symptom%20checker/background-2_x4nrgg.png)",
        }}
      >
        <div className="App">
          <div className="center-test">
            <Box
              justifyContent="center"
              spacing={0}
              direction="column"
              alignItems="center"
              style={{
                paddingTop: 70,
                paddingBottom: 20,
                spacing: 0,
                direction: "column",
                // minHeight:"10vh"
              }}
            >
              <div className="title-center">
                <Typography
                  color="#070C3A"
                  margin={3}
                  marginTop={10}
                  marginBottom={5}
                  alignContent="center"
                  justifyContent="center"
                  variant="h3"
                  fontFamily="Montserrat"
                  fontWeight={500}
                >
                  How are you feeling today?
                </Typography>
              </div>

              <div className="alert-center">
                <Alert
                  severity="info"
                  backgroundposition="sticky"
                  className="alert-center1"
                >
                  <AlertTitle>Info</AlertTitle>
                  The symptom checker results show a list of possible
                  conditions, not an actual diagnosis. <br></br> Consult your
                  doctor if you are concerned. Enter more symptoms and test
                  results for more accurate results, starting with your most
                  severe symptom
                </Alert>
              </div>
            </Box>

            {/* <Grid justifyContent="center" alignContent="center" > */}

            <div className="test-input-btn-center">
              <input
                className="testinput"
                list="symptoms"
                value={patientSymptom}
                placeholder="Please type your symptom here"
                marginBottom={10}
                onChange={(e) => {
                  setPatientSymptom(e.target.value);
                }}
              />

              {/* make a options of symptoms */}
              <datalist id="symptoms">
                {symptoms.map((symptom) => {
                  return <option key={symptom.id} value={symptom.name} />;
                })}
              </datalist>

              <Button
                variant="contained"
                color="primary"
                className={classes.btnStyle}
                marginTop="none"
                onClick={addSymptomHandler}
              >
                Add
              </Button>
            </div>
            <div className="test-input-center">
              <div className="symptom-container">
                {/* list every symptom input ID: {item.id}*/}

                <ul>
                  {/* If Api works delete Stack */}

                  <Stack direction="row" spacing={2}>

                    {/* <li className="tag">
                      <span className="tag-title">Runny Nose</span>
                    </li>
                    <li className="tag">
                      <span className="tag-title">Tight Chest</span>
                    </li>
                    <li className="tag">
                      <span className="tag-title">Coughing</span>
                    </li>
                    <li className="tag">
                      <span className="tag-title">Hedache</span>
                    </li> */}
{patientSymptoms.map((item) => {
                    return <li className="tag" key={item.id}>{item.name}</li>;
                  })}
                  </Stack>

                
                </ul>
              </div>
            </div>



            <div className="personalinfo-center">

            <div className="personalinfo">
              {" "}
              <Typography
                alignContent="center"
                variant="h3"
                fontFamily="Montserrat"
                fontWeight={800}
                fontSize={20}
              >
                Personal Information
              </Typography>
            </div>
            <div className="genderbox">
              <div className="gendertitle">
                <span>Gender</span>
              </div>

              <input
                className="gendertitle"
                type="radio"
                value="male"
                name="gender"
                onClick={(e) => setGender(e.target.value)}
              />
              <span className="gendertitle">Male</span>
              <input
                type="radio"
                value="female"
                name="gender"
                onClick={(e) => setGender(e.target.value)}
              />
              <span className="gendertitle">Female</span>

              <span className="agetitle">Age</span>
              <input
                className="age"
                type="number"
                value={age === 0 ? "" : age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            </div>


            <Grid>
              <Test />
            </Grid>

            <div className="btncontainer">
              <button className="diagnosebtn" onClick={getDiagnosis}>
                Diagnose
              </button>
            </div>

        
            <div className="diagnoseresults-body">
            {/* <div className="diagnoseresults-container">
              <Typography
                margin={3}
                marginTop={10}
                marginBottom={5}
                alignContent="center"
                justifyContent="center"
                variant="h4"
                fontFamily="Montserrat"
                fontWeight={500}
              >
                Take a look at our suggestions...
              </Typography>
            </div> */}
            <div className="results-container">

              <ul className="diagnoseresults">

              {/* <div className="diagnoseresults-container">
                  <Typography
                    margin={3}
                    marginTop={10}
                    marginBottom={5}
                    alignContent="center"
                    justifyContent="center"
                    variant="h4"
                    fontFamily="Montserrat"
                    fontWeight={500}
                  >
                    Take a look at our suggestions...
                  </Typography>
                </div> */}

                {conditions.map((condition) => {
                  return (
                    <>
                  <li className="diagnoseresults-list" key={condition.id}>{condition.name}</li>
                  <Typography
                    margin={3}
                    marginTop={10}
                    marginBottom={5}
                    alignContent="center"
                    justifyContent="center"
                    variant="h4"
                    fontFamily="Montserrat"
                    fontWeight={500}
                  >
                    Take a look at our suggestions...
                  </Typography>
                  
                </>
                  )
                  
                })}
              </ul>
              </div>
            </div>


            {/* </Grid> */}
          </div>
        </div>
      </Box>
    </>
  );
}

export default App;
