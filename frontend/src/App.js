import { useEffect, useState } from "react";
import axios from "axios";
import Test from "./components/About/Test"
import './App.css';
import './components/About/Test.css'
import Box from "@mui/material/Box";
import { Grid, Container } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import * as React from 'react';
// // import paperStyle from "./loginStyles";
// import { Paper} from "@material-ui/core";
// import { styled } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Close } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Chip from '@mui/material/Chip';







function App() {







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








    //Fetch all symptoms from API
    const getSymptoms = () => {
        axios({
            url: "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms",
            method: "get",
            headers: {
                "App-Id": "d6eb2a75",
                "App-Key": "845fffac15msh4e2ce739ee27ae3p175c72jsnfc0f72331198",
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
            // localStorage.setItem(
            //     "conditions",
            //     JSON.stringify(res.data.conditions)
            // );
            const allResults = JSON.parse(localStorage.getItem('conditions'))
            if (allResults === null)
                allResults = []
            allResults.push
                (res.data.conditions);
            localStorage.setItem("conditions",
                JSON.stringify(allResults))
            setConditions(res.data.conditions)
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
                : [
                    ...patientSymptoms,
                    { id: symptom[0].id, name: symptom[0].name },
                ]
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
                    backgroundImage:
                        "url(https://res.cloudinary.com/dl6pfjd5w/image/upload/v1660085941/symptom%20checker/background-1_kptzse.png)",
                }}
            >
                <div className="App">
                    <div>
                        <Box
                            justifyContent="center"
                            alignContent="center"
                            style={{
                                paddingTop: 70,
                                paddingBottom: 20,
                                maxWidth: 1000,
                                spacing:0,
                                direction:"column",
                                // minHeight:"10vh"
                            }}>

                            <Typography margin={3} marginTop={10} marginBottom={5} alignContent="center" justifyContent="center" variant="h3" fontFamily="Montserrat" fontWeight={500}>
                                How are you feeling today?</Typography>



                            <Alert severity="info" backgroundPosition="sticky" > 
                                <AlertTitle>Info</AlertTitle>
                                The symptom checker results show a list of possible conditions, not an actual diagnosis. <br></br> Consult your doctor if you are concerned.
                                Enter more symptoms and test results for more accurate results, starting with your most severe symptom


                            </Alert>

                        </Box>

                        <Grid justifyContent="center" alignContent="center" >


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

                            <button className="addbtn" onClick={addSymptomHandler}> Add Symptom</button>

                            <div className="symptom-container">
                                {/* list every symptom input ID: {item.id}*/}

                                <ul>

                                    <Stack direction="row" spacing={2}>
                                        <li className="tag"><span className='tag-title'>Runny Nose</span><btn className='tag-close-icon'>x</btn></li>
                                        <li className="tag"><span className='tag-title'>Tight Chest</span><i className='tag-close-icon'>x</i></li>
                                        <li className="tag"><span className='tag-title'>Coughing</span><i className='tag-close-icon'>x</i></li>
                                        <li className="tag"><span className='tag-title'>Dummy Text Delete</span><i className='tag-close-icon'>x</i></li>

                                    </Stack>

                                    {/* <Stack direction="row" spacing={1}>
                                        <Chip label="Deletable" />
                                        <Chip label="Deletable" variant="outlined" />
                                    </Stack> */} 

                                    {patientSymptoms.map((item) => {
                                        return (
                                            <li key={item.id}>
                                                {item.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                        </Grid>







                        <Grid>

                            <div className="personalinfo"><span>Personal Information</span></div>
                            <div className="genderbox">
                                <div className="gendertitle">
                                    <span>Gender</span>
                                </div >



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

                                <span className="agetitle">Age :</span>
                                <input
                                    className="age"
                                    type="number"
                                    value={age === 0 ? "" : age}
                                    onChange={(e) => {
                                        setAge(e.target.value);
                                    }}
                                />
                            </div>

                        </Grid>


                        <Test />




                        <Grid>
                            <div className="btncontainer">
                                <button className="diagnosebtn" onClick={getDiagnosis}>Diagnose</button>
                            </div>








                            <div className="diagnoseresults-container">
                                <Typography variant="h3">Diagnosis :</Typography>
                                <ul className="diagnoseresults">
                                    {conditions.map((condition) => {
                                        return <li key={condition.id}>{condition.name}</li>;
                                    })}
                                </ul>
                            </div>
                        </Grid>

                    </div>


                </div>

            </Box>
        </>




    );
}

export default App;

