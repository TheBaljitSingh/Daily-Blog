import React from 'react'
import Nav from './Nav'
import { useState, useEffect } from 'react';
import axios from "axios";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import About from './About';
import { useSelector,useDispatch } from 'react-redux';
import store from "./store";



<BrowserRouter>
  <Routes>
    <Route path="/new-path" element={<About/>}>   
    </Route>
  </Routes>
</BrowserRouter>


function Blog(props) {

    const [article, setArticle] = useState([{}]);
    const [title, setTitle] = useState("");
    const [ description, setDiscription] = useState("");
    
    console.log(title);
    console.log(description);

    const fetchInfo = async ()=>{
        await axios.get("api/Journal")
              .then((response)=>setArticle(response.data))
              .then(article.reverse())
    } 

    const handleView = (e)=>{
      console.log();


    }
   

    const dispatch = useDispatch();

    const setData = (t,d)=>{
      
      store.dispatch({
        type:"checkValue",
        payload: {
          title: t,
          description: d
        },
      })
    }


    useEffect(()=>{
        fetchInfo();

    },[])

    


  return (
    <div>
        <Nav/>
        <div className="font-sans overflow-auto overflow-x-hidden   absolute ">
          <div className='ml-52 mt-8 w-3/2  '>
           
            <h1 className='text-2xl font-medium'>{props.title}</h1>
            <p className='mt-2'>Welcome to ApnaBlog. Here you can Read Blogs which is publically published by the <span className='font-medium' >Users</span> on Apna Blog</p>
            <p></p>
            
          </div>
          </div>



          <div className=' ml-52 mt-32 mb-14 w-3/4 space-y-10 '>
            

            {/* main content starts here */}
  
  
          
            {article.slice().reverse().map((data,i)=>
          
          <Link className='text-blue-600 hover:cursor-pointer' to={{ pathname:"/posts", search: ("?Title="+data.title).replace(/\s\+/g, '-').toLowerCase()}}> 
          <div key={i} onClick={(e)=>{setData(data.title, data.description)}}  className="hover:cursor-pointer text-black mt-2  flex flex-row  w-7/3 justify-between items-start p-2 border-solid border-2 border-gray-300 ">
  
          <div  className=" h-12 "> 
          <h1  className="h-8  truncate  font-semibold text-lg">
            {data.title}
          </h1>
          <div className='flex-row  '>
          <p className=" line-clamp-1 ">
            {data.description}  
          </p>
          {/* {data.description.length > 110 && <p>lamba hai</p>} */}
{/* 110 se jyada ho tab  */}
              
         <p className=''></p>
          </div>

          

          </div>
  
           <div className="hover:cursor-default p-1 w-16 h-17 text-white text-center shrink-0 bg-purple-500">
            <p class="text-sm">JUN</p>
            <p class="text-3xl leading-none font-bold">05</p>
            <p className="text-sm font-light" >2024</p>
          </div>
          </div>
          </Link>
         
           )}
  
  
        </div>



    </div>
  )
}

export default Blog