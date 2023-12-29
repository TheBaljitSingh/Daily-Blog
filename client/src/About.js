import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";



export default function About(props){

    return(
        <div>
        <div>
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

          <div className='ml-60 mt-8 w-3/4'>
            <h1 className='text-2xl font-medium'>{props.title}</h1>

          </div>

          <div className="ml-60 mr-48 mt-8 ">
            <p>Hi, My Name is Baljit Singh.i'm a Full Stack Web Developer. persuing my engineering in Information and Technology.</p>
            <p>Currently exploring my Technical Skills to solve the Problems which we are facing in our daily life.</p>
            <p>Feel free to contact me for any collaboration for solving a particular problem.I also worked with Tech projects of my friends. for more checkout my Linkdin </p>
            <div className=" flex-row inline-flex">
                <div className="flex-row" ><p>thebaljitsingh - </p></div>
                <div className=""> <a className="hover:to-blue-500"  href="https://www.linkedin.com/in/thebaljitsingh/"><  FaLinkedin size={24}  /></a></div> 
                
            </div>
            <p> </p>
          </div>


          <footer className='w-screen bg-teal-400 h-12 fixed bottom-0 left-0 flex justify-center items-center '>
          <p className='flex justify-center '>Baljit Singh</p>
        </footer>
        </div>
    </div>
    )
   
}

