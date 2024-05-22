
import { RxCross2 } from "react-icons/rx";
const SideBar = () => {
  return (
    <div className="w-[25%] min-h-screen bg-white fixed top-13 shadow-sm z-10 left-0  pt-10 px-4">
      <h2 className="text-3xl text-slate-900 ">SQL Tutorial </h2>
    <div className=" pt-6 flex flex-col gap-4">
    <RxCross2 className="absolute top-4 right-6 text-3xl" />
        <h2 className="text-xl font-semibold text-white bg-indigo-700  rounded-md py-2 px-4 "> DATABASE BASIC</h2>
        <div className="flex flex-col gap-2 pl-6">
        <span className="font-semibold text-xl  hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 ">What is data?</span>
        <span className="font-semibold text-xl  hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 ">Source of Data</span>
        <span className="font-semibold text-xl  hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 ">Defination of DBMS </span>
        <span className="font-semibold text-xl  hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 ">Types of DBMS</span>
        <span className="font-semibold text-xl  hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 ">DBMS</span>
        <span className="font-semibold text-xl  hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 ">Defination of DBMS </span>
        <span className="font-semibold text-xl  hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 ">Types of DBMS</span>
        <span className="font-semibold text-xl  hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 ">Source of Data</span>
        <span className="font-semibold text-xl  hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 ">Defination of DBMS </span>
        <span className="font-semibold text-xl  hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 ">Types of DBMS</span>
       
       
       
        </div>
    </div>
  


    </div>
  )
}

export default SideBar
