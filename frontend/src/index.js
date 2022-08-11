import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Account from "./components/Account/Account";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthProvider";

const Routing = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact us</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="register">Registration</Link>
            </li>
            <li>
              <Link to="account">Account</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Routing />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
