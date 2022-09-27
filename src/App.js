import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/footer/footer";
import NavBar from "./component/navbar/navbar";
import Home from "./component/pages/home";
import Register from "./component/register/register";
import Success from "./component/success/success";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/out-africa" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/register/success" element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
