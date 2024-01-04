import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { FaRegCircleUser } from "react-icons/fa6";
import Login from "./Login";
import Show from "./Show";

import {Routes, Route,  Link } from "react-router-dom";
import Dashboard from "./Dashboard";





export default function Home(props) {

  // const [islogin, set]

  const isLoggedIn = false;




  if(isLoggedIn){
    return (
      <Dashboard {...props} />
        
    );
  }else{
    return (
      <Login/>
    )
  }
    
  }

