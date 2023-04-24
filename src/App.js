import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Home} from './components/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Profile from "./components/Profile";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";

function App() {
  return (
    <BrowserRouter> <div>
    <div className="App">
        <header className="header">
          <Profile/>
          <h1>AICHA SAMIH</h1>
          <h2>software enginner</h2>
        </header>
   
      <Header />
      <div className="main-wrapper">
        <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/Contact" element={<Contact/>}/>
         <Route path="/Formation" element={<Formation/>}/>
         <Route path="/Experience" element={<Experience/>}/>
         <Route path="/Certifications" element={<Certifications/>}/>
        </Routes>
        </div>

        </div>

  
        {/* Pied de page */}
        <footer className="footer">
          <p>samihaicha9@gmail.com </p>
        </footer>
       
      </div>
    </BrowserRouter>
);
}


export default App;