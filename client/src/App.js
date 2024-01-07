

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compose from "./Compose";
import Contact from "./Contact";
import Login from "./Login";

import About from "./About";
import Home from "./Home"
import React from 'react';
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import MyBlog from "./MyBlog";

import {ProtectedRoute, ProtectedLogin} from "./ProtectedRoute/ProtectedRoute"



export default function App(){

  const {isAuthenticated} = useSelector(state=>state.custom);

  



  return (
    <BrowserRouter>
       <Routes>
         {/* <Route  path="/" element={<Home title="HOME" />} />  */}
         <Route path="/" element={<Home/>} />
         <Route path="*" element={<div>404</div>} />
         <Route  path="/about" element={<About title="ABOUT" />} />
         <Route  path="/contact" element={<Contact title="CONTACT" />} />
         <Route path="/Dashboard " element={<Dashboard/>} />

         {/* <Route path="/Dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} >
          <Dashboard/>
         </ProtectedRoute>}  /> */}


         <Route  element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Dashboard/compose" element={<Compose/>} />

         </Route>

         <Route
         path="/myblog"
         element={<ProtectedRoute isAuthenticated={isAuthenticated} ><MyBlog/></ProtectedRoute>}
         />
         <Route
         path="/login"
         element={<ProtectedLogin isAuthenticated={isAuthenticated} ><Login/> </ProtectedLogin>}

         />


         
         
         


       </Routes>
     </BrowserRouter>
  )
}
