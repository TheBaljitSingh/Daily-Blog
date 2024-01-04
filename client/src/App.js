

import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import Compose from "./Compose";
import Home from "./Home";
import Contact from "./Contact";

import About from "./About";
import React from 'react';
import Dashboard from "./Dashboard";



export default function App({isUser}){


  return (
    <BrowserRouter>
       <Routes>
         <Route  path="/" element={<Home title="HOME" />} /> 
         <Route path="*" element={<div>404</div>} />
         <Route  path="/compose" element={<Compose/>} />
         <Route  path="/about" element={<About title="ABOUT" />} />
         <Route  path="/contact" element={<Contact title="CONTACT" />} />
         {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
         


       </Routes>
     </BrowserRouter>
  )
}
