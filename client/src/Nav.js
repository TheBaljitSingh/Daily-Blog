import { Link } from "react-router-dom";

export default function Nav(){
  return(

  <nav className=' h-20 p-5 flex justify-between bg-sky-400'>
  <div className='flex-1 flex justify-center mr-32'>
    <a className="font-semibold"  href="/#">APNA BLOG </a>
  </div>
  <div className='mx-32'>

  </div>
  <div className='flex-1 flex justify-center ml-auto space-x-5 '>
  <ul className="font-semibold"><Link to={"/"}>HOME</Link></ul>
    <ul className="font-semibold"><Link to={"/about"} >ABOUT US</Link></ul>
    <ul className="font-semibold"><Link to={"/contact"}>CONTACT</Link></ul>
  </div>
</nav>
  )

}

