import { Link } from "react-router-dom";


export default function Contact(props){

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
            {console.log(props.title)}
            <h1 className='text-2xl font-medium'>{props.title}</h1>
          </div>

          <div className="ml-60 mt-8 w-3/4">

            <form action="">
                <label htmlFor="">Your name</label>
                <input className="bg-gray-200" type="text" />

            </form>

          </div>


          <footer className='w-screen bg-teal-400 h-12 fixed bottom-0 left-0 flex justify-center items-center '>
          <p className='flex justify-center '>Baljit Singh</p>
        </footer>
        </div>
    </div>
    )
   
}

