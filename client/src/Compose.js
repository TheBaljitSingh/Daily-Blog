import axios from "axios";
import {useState } from "react";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


function Compose(){

    

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();
        setTitle("");
        setDescription("");        
        // now making axios post request
        axios.post("/api/compose",{title, description})
    .then(res =>{
        if(res.data.post){
            // alert("Form is saved");
            Swal.fire({
                title: "Good job!",
                text: "Your Journal is saved",
                icon: "success"
              });
        }
        
    })
    .catch(error =>{
        console.log(error);
    })


    }

   
    



    return (
        <div>
            <div>

            <nav className=' h-20 p-5 flex justify-between bg-sky-400'>
            <div className='flex-1 flex justify-center mr-32'>
                <a href="/#">DAILY JOURNAL</a>
            </div>
            <div className='mx-32'>

            </div>
            <div className='flex-1 flex justify-center ml-auto space-x-5 '>
            <ul><Link to={"/"}>HOME</Link></ul>
              <ul><Link to={"/about"} >ABOUT US</Link></ul>
              <ul><Link to={"/contact"}>CONTACT</Link></ul>
            </div>
            </nav>

            <div className="ml-60 mt-16 w-3/4 ">
                <form onSubmit={handleSubmit}>
                    <p>Heading</p>
                    <input onChange={(e) =>setTitle(e.target.value)} value={title}   id="title" type="text" className="rounded-lg border border-gray-300 w-full h-10 bg-gray-50 p-2 mt-1 " placeholder="Write your Title here..." />
                    <p className="mt-2" >Descricption</p>
                    <textarea onChange={e =>setDescription(e.target.value)} value={description} id="Descricption" rows="10" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your Descricption here..."></textarea>
                    <button type="submit" className="rounded-lg border-2 border-gray-300 w-20 h-12 mt-2 " >Create</button>
                </form>
            </div>

            <footer className='w-screen bg-teal-400 h-12 fixed bottom-0 left-0 flex justify-center items-center '>
            <p className='flex justify-center '>Created By Baljit Singh</p>
        </footer>

            </div>

        
                
        </div>
    )
}

export default Compose;