import React, { useState } from "react";
import "./App.css";
import { Login, Register, Home, Profile } from "./Routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [canNavigate, setCanNavigate] = useState(true);

  const handleAction = () => {
    // Perform some action here
    setCanNavigate(false); // Disable navigation after the action
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
