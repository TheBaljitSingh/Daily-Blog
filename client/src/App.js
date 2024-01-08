

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compose from "./Compose";
import Contact from "./Contact";
import Login from "./Login";

import About from "./About";
import Home from "./Home"
import React from 'react';
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import Blog from "./Blog";
import {ProtectedRoute, ProtectedLogin} from "./ProtectedRoute/ProtectedRoute"
import View from "./View";



export default function App(){

  const {isAuthenticated} = useSelector(state=>state.custom);
  const {title, description} = useSelector(state=>state.custom).data;

  



  return (
    <BrowserRouter>
       <Routes>
         {/* <Route  path="/" element={<Home title="HOME" />} />  */}
         <Route path="/" element={<Home/>} />
         <Route path="*" element={<div>404</div>} />
         <Route  path="/about" element={<About title="ABOUT" />} />
         <Route path="/Blog" element={<Blog title="BLOG" />} />
         <Route  path="/contact" element={<Contact title="CONTACT TO ADMIN" />} />
         <Route path="/Dashboard " element={<Dashboard/>} />
         <Route path="/posts" element={<View title={title} description={description} />} />

         {/* <Route path="/Dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} >
          <Dashboard/>
         </ProtectedRoute>}  /> */}


         <Route  element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Dashboard/compose" element={<Compose/>} />

         </Route>

         
         <Route
         path="/login"
         element={<ProtectedLogin isAuthenticated={isAuthenticated} ><Login/> </ProtectedLogin>}

         />


         
         
         


       </Routes>
     </BrowserRouter>
  )
}
