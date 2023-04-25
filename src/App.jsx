import './App.css';
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { getApp } from './utils/helpers';

const App: React.FC = () => {
  const CurrentApp = getApp();
  return (
      <div className="App">
        <BrowserRouter>
          <CurrentApp />
        </BrowserRouter>
      </div>
  );
}

export default App
