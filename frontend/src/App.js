import { useEffect, useState } from "react";
import axios from "axios";
import Test from "./components/About/Test"


function App() {
    //all symptoms available
    const [symtpoms, setSymptoms] = useState([]);

    //Entered patient symptom
    const [patientSymptom, setPatientSymptom] = useState("");

    //All symptoms entries of patient
    const [patientSymptoms, setPatientSymptoms] = useState([]);

    //posible conditions
    const [conditions, setConditions] = useState([]);

    //gender
    const [gender, setGender] = useState("");

    //age
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

    //fetch results of diagnosis depending on the three symptoms, age, and gender
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
                  if(allResults === null) 
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
        // symptom name
        const symptom = symtpoms.filter((symptom) => {
            return symptom.name === patientSymptom;
        });

        setPatientSymptoms(
            // patientSymptoms = [{},{}];
            patientSymptoms.length < 1
                ? [{ id: symptom[0].id, name: symptom[0].name }]
                : [
                      ...patientSymptoms,
                      { id: symptom[0].id, name: symptom[0].name },
                  ]
        );

        setPatientSymptom("");
    };

    //run teh get all symptoms function every page reload
    useEffect(() => {
        getSymptoms();
    }, []);

    console.log(gender);
    console.log(patientSymptom);
    return (
        <div className="App">
            <div>
                <div>
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        onClick={(e) => setGender(e.target.value)}
                    />
                    <span>Male</span>
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        onClick={(e) => setGender(e.target.value)}
                    />
                    <span>Female</span>
                </div>
                <div>
                    <span>Age</span>
                    <input
                        type="number"
                        value={age === 0 ? "" : age}
                        onChange={(e) => {
                            setAge(e.target.value);
                        }}
                    />
                </div>
                <input
                    list="symptoms"
                    value={patientSymptom}
                    onChange={(e) => {
                        setPatientSymptom(e.target.value);
                    }}
                />

                {/* make a options of symptoms */}
                <datalist id="symptoms">
                    {symtpoms.map((symptom) => {
                        return <option key={symptom.id} value={symptom.name} />;
                    })}
                </datalist>

                <button onClick={addSymptomHandler}> Add Symptom</button>

                <div>
                    {/* list every symptom input ID: {item.id}*/}
                    <ul>
                        {patientSymptoms.map((item) => {
                            return (
                                <li key={item.id}>
                                    {item.name} 
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <button onClick={getDiagnosis}>Diagnose</button>

                <div>
                    <h2>Conditions</h2>
                    <ul>
                        {conditions.map((condition) => {
                            return <li key={condition.id}>{condition.name}</li>;
                        })}
                    </ul>
                </div>
            </div>
                <Test />

        </div>
    );
}

export default App;