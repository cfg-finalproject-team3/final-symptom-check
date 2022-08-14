import React, { useState, useEffect } from "react";
import Axios from "axios";
import './Test.css'

function Test() {

  const [ testRes, setTestRes ] = useState("");
  const [ testVal, setTestVal ] = useState("");

  const [ testList, setTestList ] = useState([]);


  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
       setTestList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      testRes: testRes,
      testVal, setTestVal,

    });
  };

  return (
    <div className="test-container">
     <span className="test-title">Tests</span>

     <div className="testbox">
     <label className="test-title1">Test Name:</label>
     <input type="text" onChange={(event) => {
      setTestRes(event.target.value);
    }}/>
     <label className="test-title2">Test value:</label>
     <input type="text" onChange={(event) => {
      setTestVal(event.target.value);
    }}/>
    </div>

     <button className="addlistbtn" onClick={addToList}>Add to List</button>

     <h1 classname="test-title3">Test List</h1>

     {testList.map((val, key) => {
        return (
        <div key={key}>  <h1>{val.testres}</h1>  <h1>{val.testvalue}</h1> 
        </div>
        );
     })}
    </div>
  );
}

export default Test;

