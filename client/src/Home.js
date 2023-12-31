import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

import { Link } from "react-router-dom";

export default function Home(props) {

  const [article, setArticle] = useState([{}]);


  const fetctInfo = ()=>{
    return axios.get("api/alljournal")
          .then((response)=>setArticle(response.data))
          .then(article.reverse());


  }

  useEffect(()=>{
    fetctInfo();
  },[])



   

    return (
        
      <div className="App">
        <div className="">
          <nav className=' h-20 p-5 flex justify-between bg-yellow-400'>
            <div className='flex-1 flex justify-center mr-32'>
              <a href="/#">APNA BLOG</a>
            </div>
            <div className='mx-32'>
  
            </div>
            <div className='flex-1 flex justify-center ml-auto space-x-5 '>
              <ul><Link to={"/"}>HOME</Link></ul>
              <ul><Link to={"/about"} >ABOUT US</Link></ul>
              <ul><Link to={"/contact"}>CONTACT</Link></ul>
            </div>
          </nav>
          <div className="overflow-auto overflow-x-hidden  ">
          <div className='ml-60 mt-8 w-3/4'>
            {console.log(props.title)}
            <h1 className='text-2xl font-medium'>{props.title}</h1>
            <p className='mt-2'>Welcome to ApnaBlog. here you can create your own Blog</p>
          </div>
          <div className=' ml-60 mt-10 mb-14 w-3/4 space-y-3'>

          {article.slice().reverse().map((data,i) => 

          // <{var d = data.date()}/>
          
            
            <div  key={i} className="bg-gray-100 mt-4" >
          <h1 className='text-2xl font-medium ml-2'>{data.title}</h1>
          <p className="ml-2">{moment(data.date).format(`dddd, MMMM Do YYYY`)}</p>
          {/* <p>{data.date}</p> */}
          <p  className='mt-1 ml-2'>{data.description}</p>
          </div>
            )}
          </div>
          </div>

          
        <footer className='w-screen bg-teal-400 h-12 fixed bottom-0 left-0 flex justify-center items-center '>
          <p className='flex justify-center '>Baljit Singh</p>
        </footer>
        </div>
      
      </div>
      
    );
    
  }

