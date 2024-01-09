import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import store from "./store";
import { useDispatch, useSelector } from 'react-redux';
import Nav from "./Nav";


export default function Dashboard(props){

    const [isDropdown, setisDropdown] = useState(true);
    const [article, setArticle] = useState([{}]);
    // const [data, isData] = useState(false);
  
    // important! jab api call hoga logout ke liyea tab response ke hisab se loginBtn state ko update karna hai. tab jake page render hoga home page ke liyea.
    const dispatch = useDispatch();
    const {isLogin} = useSelector(state=>state.custom);
  
    const logoutBtn = ()=>{
      axios.get("api/logout")
      .then(res=>{
        if(res.status==200){
          console.log("server se logout hua");
          Swal.fire({
            title:"ok!",
            text:"successfully Sign Out",
            icon:"success"
        });

        }
      })


      store.dispatch({
        type: "checkLogout",
        payload:false,
      })
    }
  

    
    const handleClick = ()=>{
        setisDropdown(!isDropdown);
    }

    // const setView = ()=>{
    //   isData(!data);
    // }
  
    const fetctInfo = async ()=>{
      await axios.get("api/userJournal")
            .then(res=>{
              if(res.status==200){
                console.log("user ka blog hai");
                console.log(res.data);
                setArticle(res.data.allUserData);
                // setView();
              }
              if(res.status==201){
                // isData(false);
                console.log("blog ka data nahi hai to block dikhna nahi chiyea");
              }
            // console.log(response.data[2].author),
            //agar author ne kuch compose hi na kiya ho to kya yaha pr authr ka data fetch hoga [0] ue kar rahe hai
            // console.log(response);

            
            // setArticle(response.data)
          })
            
    }

    article.reverse()

  
  
    
  
    useEffect(()=>{
      fetctInfo();
      handleClick();
      // setView();
      
    },[])



    return(

        <div className="App">
        
        <div>
          <Nav/>
          
          

          <div className="overflow-auto overflow-x-hidden   absolute ">
          <div className='ml-52 mt-8 w-3/4 '>
           
            <h1 className='text-2xl font-medium'>{props.title}</h1>
            <p className='mt-2'>Welcome to ApnaBlog. here you can create and Manage your Dashboard</p>
            
          </div>
          </div>
          {/* profile wala main div */}
          <div className=" relative hover:cursor-pointer ">
          <div className="absolute top-1 right-1  " >
          {/* <  FaRegCircleUser className="cursor-pointer" size={30} /> */}
          
            <button onClick={handleClick}  id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className=" z-50 ml-4 flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full  hover:cursor-pointer hover:text-gray-600 focus:ring-gray-100" type="button">
            <span class="sr-only">Open user menu</span>
              <div>
              <FaRegCircleUser  size={30} />
              </div>
            <div className="ml-2" >Baljit Singh</div>
            <svg class=" w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            
            
            {isDropdown==true? <div id="dropdownAvatarName" class="z-52   bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                <div class="px-4 py-3 text-sm text-gray-900 ">
                  <div class="font-medium ">User Role</div>
                  <div class="truncate">name@user.com</div>
                </div>
                <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100  ">Posts</a>
                  </li>
                  <li>
                    {/* <a href="/Compose" class="block px-4 py-2 hover:bg-gray-100  ">Compose</a> */}
                    <Link to="/Dashboard/compose" > <a href="" class="block px-4 py-2 hover:bg-gray-100">Compose</a></Link>
                  </li>
                  
                </ul>
                <div class="py-2">
                  <a onClick={logoutBtn} href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
                </div>
            </div>:null }
            <div>
            </div>

          </div>
          </div>

   

          <div className=' ml-52 mt-20 mb-14 w-3/4 space-y-10 '>

            <h2 className="text-xl font-medium bg-gray-600 hover:bg-gray-700 rounded-sm text-white w-28 p-2 hover:cursor-pointer" >Your Posts</h2>
            

          {/* main content starts here */}


        {/* {isData == true?   */}
          {/* <div>      */}
          {article.slice().reverse().map((data,i)=>

        <div key={i} className=" hover:cursor-pointer flex flex-row  w-7/3 justify-between items-start p-2 border-solid border-2 border-gray-300 ">

        <div  className=" "> 
        <h1 className="h-8 truncate  font-semibold ">
          {data.title}
        </h1>
        <p className="mt-2 line-clamp-2 ">
          {data.description}
        </p>
        <p>{data.date}</p>
        </div>

         <div className="hover:cursor-default p-1 w-16 h-17 text-white text-center shrink-0 bg-purple-500">
          <p class="text-sm">JAN</p>
          <p class="text-3xl leading-none font-bold">09</p>
          <p className="text-sm font-light" >2024</p>
        </div>
        </div>
         )} 
         {/* </div>:
         null} */}


      </div>
      
    



    
        
          

          
        <footer className='w-screen bg-teal-400 h-12 fixed bottom-0 left-0 flex justify-center items-center '>
          <p className='flex justify-center '>Baljit Singh</p>
        </footer>

        </div>
          

      </div>

    )
}