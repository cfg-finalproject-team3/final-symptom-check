import React, { useState, useEffect } from "react";
import Axios from "axios";
import './Test.css'
import Typography from '@mui/material/Typography';

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
    <div className="center-test-results">
    <div className="personalinfo1"> <Typography  alignContent="end"  variant="h3" fontFamily="Montserrat" fontWeight={800} fontSize={20}>Tests</Typography></div>

     <div className="testbox">
         <label className="test-title1"></label>
             <input className="test-input-2" 
                    type="text" 
                    placeholder="Test Name"
                    onChange={(event) => {
                     setTestRes(event.target.value);
                     }}/>

         <label className="test-title2"></label>
              <input className="test-input-2" 
                      type="text" 
                      placeholder="Test Results"
                      onChange={(event) => {
                      setTestVal(event.target.value);
                      }}/>
          
           <div className="clearfix1">       
          <button className="addlistbtn" onClick={addToList}>+</button>
          </div>


          {/* <h1 classname="test-title3"><Typography  alignContent="end"  variant="h3" fontFamily="Montserrat" fontWeight={800} fontSize={20}>Test List</Typography></h1> */}

            {testList.map((val, key) => {
                    return (
                  <div key={key}>  
                  <li className="test-results-list">{val.testres}</li>  
                  <li className="test-results-list">{val.testvalue}</li> 
            </div>
            );
            })}
         </div>
                
        <div className="clearfix"></div>

         

    
    </div>
  );
}

export default Test;

