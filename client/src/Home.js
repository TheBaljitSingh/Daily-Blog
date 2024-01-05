import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { FaRegCircleUser } from "react-icons/fa6";
import Login from "./Login";
import Show from "./Show";

import { useDispatch, useSelector } from 'react-redux';
import store from "./store";
import Dashboard from "./Dashboard";







export default function Home() {

  const dispatch = useDispatch();
  const {isLogin} = useSelector(state=>state.custom);

  const loginBtn = ()=>{
    store.dispatch({
      type:"checkLogin",
      payload: false,
    })
  };
  

  
  // useEffect(()=>{
  //   loginBtn();
  // },[])


  // const isLoggedIn = false;
//Login Component pe agar <user></user> login ho gya to Ye Home component ka State update karke fir se render karna hoga
// nahi to next time Dashboard wala render hoga

  

  return(
    <div>
      {/* {console.log({isLogin})}; */}
      {isLogin?(<Dashboard/>):(<Login/>)}
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

