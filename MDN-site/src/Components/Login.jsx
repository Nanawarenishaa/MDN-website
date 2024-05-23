

import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router";



const Login = () => {
    
    const navigate = useNavigate();

  return (
    <div className="w-full h-screen backdrop-blur-sm bg-transparent z-10 absolute top-0 left-0 place-content-center flex items-center " >
      <IoArrowBackOutline className="absolute top-10 left-10 z-10 text-5xl text-slate-800 hover:bg-indigo-100 py-2 rounded-full " onClick={()=> navigate(-1)} />
      <div className="w-[30%] h-[60vh] backdrop-blur-sm bg-transparent shadow-md border flex flex-col gap-2 px-8  p-4 border-indigo-800 rounded-md  ">
<h2 className="text-indigo-900 text-center text-4xl font-semibold underline mt-4 mb-4">Login</h2>
<label htmlFor="" className="font-semibold text-slate-800 mt-6"> ENTER EMIAL OR USERNAME</label>
<input type="email" className="w-full rounded-md py-2 border border-slate-500 pl-4 shadow-sm" placeholder="Enter email or username" />
<label htmlFor="" className="font-semibold text-slate-800 mt-4 "> PASSWORD</label>
<input type="password" className="w-full rounded-md py-2 border border-slate-500 pl-4 shadow-sm" placeholder="Enter Password" />
<label className="text-indigo-800 mt-2 mb-6">Forgot Password ?</label>
<button className="bg-indigo-800 text-white shadow-lg py-2 rounded-md hover:bg-white text-xl border hover:border-indigo-900 hover:text-indigo-900 transform duration-300">Login</button>
      </div> 
    </div>
  )
}

export default Login
