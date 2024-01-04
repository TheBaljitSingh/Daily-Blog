import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { FaRegCircleUser } from "react-icons/fa6";
import Login from "./Login";
import Show from "./Show";

import {Routes, Route,  Link } from "react-router-dom";
import Dashboard from "./Dashboard";





// export default function Home

export default function Home() {


  // const isLoggedIn = false;
//Login Component pe agar user login ho gya to Ye Home component ka State update karke fir se render karna hoga
// to next time Dashboard wala render hoga

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = ()=>{
    setIsUserLoggedIn(true);
  }

  return(
    <div>
      {isUserLoggedIn?(<Dashboard/>):(<Login handleLogin={handleLogin} />)}
    </div>
  )



  // if(isLoggedIn){
  //   return (
  //     <Dashboard {...props} />
        
  //   );
  // }else{
  //   return (
  //     <Login/>
  //   )
  // }
    
  }

