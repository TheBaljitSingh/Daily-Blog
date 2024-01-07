import Dashboard from "./Dashboard";
import Login from "./Login";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MyBlog() {

  // const {isAuthenticated} = useSelector(state=>state.custom);


  // console.log(isAuthenticated);

  

    return(
      

      // isAuthenticated ?<Dashboard/>:<Login/>
      <div>
        <Nav/>
        <div className="ml-48 mt-12">
          <h1>Welcome to Apna Blog website</h1>
         <div>
            Here you will se only your blogs
         </div>


        </div>
      </div>
      
    )



  }

