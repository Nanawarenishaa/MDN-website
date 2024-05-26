

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Button = ({ text }) => {
  const { themeChange } = useContext(ThemeContext);


  const bgColor = themeChange === "light" ? "bg-slate-100" : "bg-gray-800";

  const textColor = themeChange === "light" ? "text-slate-900" : "text-white ";
 
  const hoverBgColor = themeChange === "light" ? "hover:bg-indigo-600 "  : "hover:bg-indigo-600";

  return (
    <button
      className={`rounded-md py-2 px-6 text-xl focus:ring-4 hover:text-white focus:outline-none focus:ring-indigo-300 ${bgColor} ${textColor} ${hoverBgColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
