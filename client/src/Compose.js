import axios from "axios";
import {useState } from "react";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import Nav from "./Nav";


function Compose(){

    

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [display, setDisplay] = useState("")

  console.log(display);


    const handleSubmit = (e)=>{
        e.preventDefault();
        setTitle("");
        setDescription("");
        setDisplay("");        
        // now making axios post request
        axios.post("/api/compose",{title, description, display})
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

            <Nav/>

            <div className="ml-60 mt-16 w-3/4 ">
                <form onSubmit={handleSubmit}>
                    <p>Heading</p>
                    <input onChange={(e) =>setTitle(e.target.value)} value={title}   id="title" type="text" className="rounded-lg border border-gray-300 w-full h-10 bg-gray-50 p-2 mt-1 " placeholder="Write your Title here..." />
                    <p className="mt-2" >Descricption</p>
                    <textarea onChange={e =>setDescription(e.target.value)} value={description} id="Descricption" rows="10" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your Descricption here..."></textarea>
                    
                    <div className="flex flex-row space-x-5 mt-2">
                    <div class="flex items-center ">
                        <input  id="default-radio-1"  onClick={(e)=>setDisplay("public")} type="radio" value={display} name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                        <label for="default-radio-1"  class="ms-2 text-sm font-medium text-gray-900 ">Public</label>
                    </div>
                    <div class="flex items-center">
                        <input  id="default-radio-2" type="radio" onClick={(e)=>setDisplay("private")}  value={display} name="default-radio" class="w-4 h-4 text-blue-600 bg-blue-100 border-gray-300 "/>
                        <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900">Private</label>
                    </div>
                    </div>

                    <button type="submit" className="rounded-lg border-2 border-gray-300 w-20 h-12 mt-2 " >Publish</button>
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