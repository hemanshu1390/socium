import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
    <Navbar/>
      <App />
    </Router>
            </StrictMode>
   
    
     
    
)



