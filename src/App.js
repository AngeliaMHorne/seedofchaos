import './App.css';
import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App
