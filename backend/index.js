// const express = require("express");

// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cors());

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "usersdb",
// });

// // app.get("/select", (req, res) => {
// //   const userEmail = "another@t.com";
// //   const password = 456;

// //   db.query("SELECT * FROM usersdb.users", (err, result) => {
// //     if (err) {
// //       console.log(err);
// //     }
// //     res.send(result);
// //   });
// // });

// app.post("/register", (req, res) => {
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.username;
//   const password = req.body.username;

//   db.query(
//     "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)",
//     [firstName, lastName, email, password],

//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     }
//   );
// });

// app.listen(3001, () => {
//   console.log("Server running");
// });
