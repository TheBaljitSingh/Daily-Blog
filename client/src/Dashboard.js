import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { FaRegCircleUser } from "react-icons/fa6";
import Show from "./Show";

import {Routes, Route,  Link } from "react-router-dom";

export default function Dashboard(props){

    const [isDropdown, setisDropdown] = useState(true);
    const [article, setArticle] = useState([{}]);
  
    console.log(isDropdown);
  
    const handleClick = ()=>{
        setisDropdown(!isDropdown);

  
    }
  
    const fetctInfo = ()=>{
      return axios.get("api/alljournal")
            .then((response)=>setArticle(response.data))
            .then(article.reverse());
    }
  
  
    
  
    useEffect(()=>{
      fetctInfo();
      handleClick();
      
    },[])



    return(

        <div className="App">
        
        <div >
          <nav className=' h-20 p-5 flex justify-between bg-sky-400'>
            <div className='flex-1 flex justify-center mr-32'>
              <a href="/#">APNA BLOG </a>
            </div>
            <div className='mx-32'>
  
            </div>
            <div className='flex-1 flex justify-center ml-auto space-x-5 '>
            <ul><Link to={"/"}>HOME</Link></ul>
              <ul><Link to={"/about"} >ABOUT US</Link></ul>
              <ul><Link to={"/contact"}>CONTACT</Link></ul>
            </div>
          </nav>
          
          {/* profile wala main div */}
          <div className=" relative hover:cursor-pointer ">
          <div className="absolute top-1 right-1  " >
          {/* <  FaRegCircleUser className="cursor-pointer" size={30} /> */}
          
            <button onClick={handleClick}  id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className=" ml-4 flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full  hover:cursor-pointer hover:text-gray-600 focus:ring-gray-100" type="button">
            <span class="sr-only">Open user menu</span>
              <div>
              < FaRegCircleUser  size={30} />
              </div>
            <div className="ml-2" >Baljit Singh</div>
            <svg class=" w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            
            
            {isDropdown==true? <div id="dropdownAvatarName" class="z-10   bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                <div class="px-4 py-3 text-sm text-gray-900 ">
                  <div class="font-medium ">User Role</div>
                  <div class="truncate">name@user.com</div>
                </div>
                <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100  ">Dashboard</a>
                  </li>
                  <li>
                    <a href="/Compose" class="block px-4 py-2 hover:bg-gray-100  ">Compose</a>
                  </li>
                  
                </ul>
                <div class="py-2">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
                </div>
            </div>:null }
            <div>
            </div>

          </div>
          </div>

          <div className="overflow-auto overflow-x-hidden   absolute ">
          <div className='ml-40 mt-8 w-3/4 '>
           
            <h1 className='text-2xl font-medium'>{props.title}</h1>
            <p className='mt-2'>Welcome to ApnaBlog. here you can create your own Blog</p>
            
          </div>

   


          <div className=' ml-60 mt-10 mb-14 w-3/4 space-y-3'>

          {/* main content starts here */}
          


          </div>
          </div>
          

          
        <footer className='w-screen bg-teal-400 h-12 fixed bottom-0 left-0 flex justify-center items-center '>
          <p className='flex justify-center '>Baljit Singh</p>
        </footer>
        </div>
          

      </div>

    )
}