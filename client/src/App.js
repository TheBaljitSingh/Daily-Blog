
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <nav className=' h-20 p-5 flex justify-between bg-yellow-400'>
//           <div className='flex-1 flex justify-center mr-32'>
//             <a href="/#">DAILY JOURNAL</a>
//           </div>
//           <div className='mx-32'>

//           </div>
//           <div className='flex-1 flex justify-center ml-auto space-x-5 '>
//             <ul>HOME</ul>
//             <ul>ABOUT US</ul>
//             <ul>CONTACT US</ul>
//           </div>
//         </nav>
//         <div className='ml-60 mt-16 w-3/4'>
//           <h1 className='text-2xl font-medium'>HOME</h1>
//           <p className='mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum repellendus fugit magni! Optio ad dolorum quos iusto obcaecati voluptas nam distinctio quod praesentium consequuntur sint eligendi aut facilis expedita, porro voluptatem. Provident voluptatem dolore debitis ratione, repudiandae perspiciatis quasi vel fuga illum iusto, ullam delectus, nostrum magni facilis. Ea.</p>

//         </div>
//         <div className='ml-60 mt-16 w-3/4 space-y-3'>
//         <div>
//           <h1 className='text-2xl font-medium'>Title</h1>
//           <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, mollitia. Vel at itaque eveniet nostrum adipisci a quidem beatae, cum rem necessitatibus minus sint ipsam ullam magnam laboriosam dolorem placeat!</p>
//         </div>
//         <div>
//           <h1 className='text-2xl font-medium'>Learning HTML</h1>
//           <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, mollitia. Vel at itaque eveniet nostrum adipisci a quidem beatae, cum rem necessitatibus minus sint ipsam ullam magnam laboriosam dolorem placeat!</p>
//         </div>
//         </div>
        
//       <footer className='w-screen bg-teal-400 h-12 fixed bottom-0 left-0 flex justify-center items-center '>
//         <p className='flex justify-center '>Baljit Singh</p>
//       </footer>
//       </div>
    
//     </div>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compose from "./Compose";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import React from 'react';


export default function App(){
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home title="HOME" />} /> 
         <Route path="*" element={<div>404</div>} />
         <Route path="/compose" Component={<Compose/>} />
         <Route path="/about" element={<About title="ABOUT" />} />
         <Route path="/contact" element={<Contact title="CONTACT" />} />


       </Routes>
     </BrowserRouter>
  )
}
