import React from "react";
import { Route, Routes } from 'react-router-dom'
import Signup from "./components/Signup";
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
