import React from "react";
import { Route, Routes } from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Users from "./components/Users";
import Home from "./components/Home";
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
