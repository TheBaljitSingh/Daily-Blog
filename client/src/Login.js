import axios from "axios";
import { useEffect, useState } from "react";
import {Routes, Route,  Link, useNavigate, Switch } from "react-router-dom";
import Swal from 'sweetalert2';
import { redirect } from "react-router-dom";







export default function Login(){


    const navigate = useNavigate();



    const [loginPage, setLoginPage] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    console.log(email,password, cpassword);


    const handleview = ()=>{
       setLoginPage(!loginPage);
    }
    

    useEffect(()=>{
      handleview();
  

    },[])
    
    // const redirect = ()=>{
    //     const timeoutId = setTimeout(()=>{
    //         console.log("Executed");
    //         // navigate('/Dashboard');
    //     },3000);

    //     return ()=> clearTimeout(timeoutId);

    // }

    // useEffect(()=>{
    //     redirect();
        
    // },[navigate])

    
    
    const loginSubmit =  async (e)=>{
        e.preventDefault();
        setEmail("");
        setPassword("");
        console.log("logged in successfully");

        await axios.post("api/login",{email, password})
        .then(res =>{
            if(res.status==200){
                console.log("login hua");
                Swal.fire({
                    title:"wow!",
                    text:"successfully Logged In",
                    icon:"success"
                });

                const redirect = async ()=>{
                    console.log("Redirected");

                    await redirect("/login");

                }

               redirect();        

            }
        })
        .catch(error =>{
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })


    }

    const signupSubmit = async (e)=>{
        e.preventDefault()

        if(cpassword!=password){
            alert("Password don't match");
        }
       
        else{
            setName("");
            setEmail("");
            setPassword("");
            setCpassword("");
            // console.log("signup successfully");

            
            await axios.post("api/register",{name,email, password})
            .then(res=>{
                console.log(res);
                if(res.status==201){
                    console.log("Register hus");
                    handleview();
                    Swal.fire({
                        title:"wow!",
                        text:"successfully Registered",
                        icon:"success"
                    });

                    

                }
            })
            .catch(err=>{
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                
            })

        }
        

        }
        
    


    return (
        <div>

        <nav className=' h-20 p-5 flex justify-between bg-sky-400'>
            <div className='flex-1 flex justify-center mr-32'>
              <a href="/#">APNA BLOG </a>
            </div>
            <div className='mx-32'>
  
            </div>
            <div className='flex-1 flex justify-center ml-auto space-x-5 '>
            <ul><Link to={"/"}>HOME</Link></ul>
              <ul><Link to={"/about"} >ABOUT US</Link></ul>
              <ul><Link to={"/contact"}>CONTACT</Link></ul>
            </div>
          </nav>


        {loginPage?<section class="bg-gray-50 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Login to your account
              </h1>
              <form class="space-y-4 md:space-y-6" method="post" onSubmit={loginSubmit} >
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input required  type="email" value={email} onChange={(e) => setEmail(e.target.value)}  id="email" class="bg-gray-50 border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)}  name="password" id="password" placeholder="••••••••" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-primary-600 block w-full p-2.5 " />
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3  " required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 ">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 bg-slate-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
                  <p class="text-sm font-light text-gray-500 ">
                      Don’t have an account yet? <a href="#" onClick={handleview} class="font-medium text-primary-600 hover:underline ">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>:
<section class="bg-gray-50 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" method="post" onSubmit={signupSubmit}>
                 <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none " placeholder="your name" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none " placeholder="name@gmail.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password"  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full outline-none p-2.5 " required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                      <input type="confirm-password" id="cpassword" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}  name="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 outline-none block w-full p-2.5 " required=""/>
                  </div>
                  <div class="flex items-start">
                      
                      
                  </div>
                  <button type="submit" class="w-full text-white bg-gray-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                  <p class="text-sm font-light text-gray-500 ">
                      Already have an account? <a onClick={handleview} href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>}


        </div>
    )
}

