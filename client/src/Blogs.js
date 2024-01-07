import React from 'react'
import Nav from './Nav'
import { useState, useEffect } from 'react';
import axios from "axios";
import { Router, Route, Link, BrowserRouter } from 'react-router-dom';
import View from './View';

function Blogs(props) {

    const [article, setArticle] = useState([{}]);

    const fetchInfo = async ()=>{
        await axios.get("api/Journal")
              .then((response)=>setArticle(response.data))
              .then(article.reverse())
    } 

    const handleView = (e)=>{
      console.log("clickd on handle view");


    }


    useEffect(()=>{
        fetchInfo();

    },[])

  return (
    <div>
        <Nav/>
        <div className="overflow-auto overflow-x-hidden   absolute ">
          <div className='ml-52 mt-8 w-3/2  '>
           
            <h1 className='text-2xl font-medium'>{props.title}</h1>
            <p className='mt-2'>Welcome to ApnaBlog. Here you can Read Blogs which is published by the <span className='font-medium' >Users</span> on Apna Blog</p>
            <p></p>
            
          </div>
          </div>



          <div className=' ml-52 mt-32 mb-14 w-3/4 space-y-10 '>
            

            {/* main content starts here */}
  
  
          
            {article.slice().reverse().map((data,i)=>
  
          <div key={i}   className=" hover:cursor-pointer flex flex-row  w-7/3 justify-between items-start p-2 border-solid border-2 border-gray-300 ">
  
          <div onClick={handleView}  className=" "> 
          <h1 className="h-8  truncate  font-semibold ">
            {data.title}
          </h1>
          <p className=" line-clamp-3">
            {data.description}
          </p>
          <p className=''>
            {/* <Routes>
              <Route path={`/public/${data.title}`} element={<View/>} />
            </Routes>
            <Link  to={`/public/${data.title}`} state={{some:"Value"}}  >Read more...</Link>
               */}

            {/* <BrowserRouter>
            <Router>
              <Route path={`/abouts`} element={<View/>} />
            </Router>
            </BrowserRouter>
            <Link  to={`/abouts`} state={{some:"Value"}}  >Read more...</Link> */}
              
          </p>

          </div>
  
           <div className="hover:cursor-default p-1 w-16 h-17 text-white text-center shrink-0 bg-purple-500">
            <p class="text-sm">JUN</p>
            <p class="text-3xl leading-none font-bold">05</p>
            <p className="text-sm font-light" >2024</p>
          </div>
          </div>
           )}
  
  
        </div>



    </div>
  )
}

export default Blogs