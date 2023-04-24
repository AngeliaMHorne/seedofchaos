import './App.css';
import React from 'react'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Nav />
       <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App
