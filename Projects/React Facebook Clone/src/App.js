import React from 'react';
import './App.css';

import Footer from './Footer/Footer';
import Login from './LogIn/Login';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import LandingPage from './LandingPage/LandingPage';

import {useNavigate, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LogIn" element={<Login />} /> 
        <Route path="/ForgotPassword" element={<ForgotPassword />} />    
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
