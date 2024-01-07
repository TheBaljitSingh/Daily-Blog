import Dashboard from "./Dashboard";
import Login from "./Login";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import {background} from "../"

export default function Home() {

  // const {isAuthenticated} = useSelector(state=>state.custom);


  // console.log(isAuthenticated);

  

    return(
      

      // isAuthenticated ?<Dashboard/>:<Login/>
      <div   >
        <Nav/>
        <div className="flex flex-row justify-between">

          <div className=" ml-52 mt-28 ">
            <div className="ml-24 mt-24">
              <div>
                <h1 className="text-4xl font-serif font-extrabold">Start Blogging <br></br>Journey Now!</h1>
              </div>
            </div>
            <div className="ml-44 mt-2">
            <Link to="/login" onClick={()=>{console.log("clicked")}} > <button   type="button" class=" text-white bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 outline-none"  >Login</button>   </Link>

            </div>

          </div>

            <div className="mr-72 mt-28">
              <img  className=" opacity-80 rounded-xl " width={500} src="https://thesavvycouple.com/wp-content/uploads/2018/09/Best-Stock-Photo-Sites.jpg" alt="" />
            </div>

        </div>

      </div>
      
    )


  


   

  }

