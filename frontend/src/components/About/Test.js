import { useEffect, useState } from "react";
import axios from "axios";

function Test() {
    const [testName, setTestName] = useState();
    const [testVal, setTestVal] = useState();
    const [testList, setTestList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/get").then((response) => {
            console.log(response.data);
            setTestList(response.data);
            
        });
    }, []);

    const submitTest = () => {
        axios
            .post("http://localhost:3001/insert", {
                testName: testName,
                testVal: testVal,
            })
            .then(
                 (res) => console.log(res)
                // setTestList([
                //     ...testList,
                //     { testName: setTestName, testVal: setTestVal },
                // ])
            );
    };

    const deleteTest = (ID) => {
        axios.delete(`http://localhost:3001/delete/${ID}`);
    };

    return (
        <div>
            <h1>Test</h1>
            <div>
                <label>Enter Test Results:</label>
                <input
                    type="text"
                    name="testName"
                    value={testName || ""}
                    onChange={(e) => setTestName(e.target.value)}
                />
                <label>Enter Values:</label>
                <input
                    type="text"
                    name="testVal"
                    value={testVal || ""}
                    onChange={(e) => setTestVal(e.target.value)}
                />
                <button onClick={submitTest}>Add Test</button>
                <table>
                    <thead>
                        <tr>
                            <th>Test Results</th>
                            <th>Test Values</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {testList.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.testName}</td>
                                    <td>{val.testVal}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                deleteTest(val.id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Test;