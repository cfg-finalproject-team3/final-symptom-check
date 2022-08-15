import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Account from "./components/Account/Account";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import reportWebVitals from "./reportWebVitals";

const Routing = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<ErrorPage />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

reportWebVitals();
