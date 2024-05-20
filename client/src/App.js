import React from "react";
import { Route, Routes } from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login";
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
