import React from "react";
import "./Account.css";
import Axios from "axios";

const Account = () => {
  const getUser = () => {
    Axios({
      method: "GET",

      withCredentials: true,
      url: "http://localhost:4000/account",
    }).then((res) => console.log(res));
  };
  return (
    <div>
      <h1>Account</h1>
      <div>
        <button onClick={getUser}>Go to profile</button>
      </div>
    </div>
  );
};

export default Account;
