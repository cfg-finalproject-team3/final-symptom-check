import React from "react";
import "./Account.css";
import Axios from "axios";
import { useState, useEffect } from "react";

const Account = () => {
  const [data, setData] = useState(null);

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

  return (
    <div>
      <h1>Account</h1>

      <div>{data ? <h2>Welcome Back {data.firstName}!</h2> : null}</div>
      <section>
        <h3>Dashboard</h3>
        <img src="" alt="user avatar" />

        {/* gets data from the state */}
        {data ? (
          <h4>
            {data.firstName} {data.lastName}
          </h4>
        ) : null}

        <a href="#">
          <h4>Edit Profile</h4>
        </a>
        <a href="#">
          <h4>Contact Preferences</h4>
        </a>
        <a href="#">
          <h4>Search History</h4>
        </a>
      </section>
    </div>
  );
};

export default Account;
