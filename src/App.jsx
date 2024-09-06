
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Services from './Services/Services.jsx';
import CyberSecurity from './CyberSecurity/CyberSecurity.jsx';
import Blog from './Blog/Blog.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import Contact from './Contact/Contact.jsx';
import Big2 from './Big2/Big2.jsx';
import Digimar from './Digimar/Digimar.jsx';
import HireDev from './HireDev/HireDev.jsx';
import MobDev from './MobDev/MobDev.jsx';
import WebDev from './WebDev/WebDev.jsx';
import Sharecare from './Share&care/Sharecare.jsx';
import Hangry from './Hangry/Hangry.jsx';
import Pointse from './Pointse/Pointse.jsx';


export default function App() {
return (
  <>
   
         
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} /> 
          <Route path="/Contact" element={<Contact />} />
           <Route path="/Portfolio" element={<Portfolio />} />
           <Route path="/Portfolio/Big2" element={<Big2 />} />  
           <Route path="/CyberSecurity" element={<CyberSecurity />} />  
           <Route path="/HireDev" element={<HireDev />} />  
           <Route path="/MobDev" element={<MobDev />} />  
           <Route path="/WebDev" element={<WebDev />} />  
           <Route path="/Portfolio/Pointse" element={<Pointse />} />  
           <Route path="/Digimar" element={<Digimar />} />  
           <Route path="/Portfolio/Hangry" element={<Hangry />} />  
           <Route path="/Portfolio/Sharecare" element={<Sharecare />} />  
          //  {/* Add more routes as needed */}/
         </Routes>

  </>
)
}
