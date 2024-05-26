
import React, { useContext } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from './context/ThemeContext';

const ThemeBtn = () => {
  const { themeChange, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {themeChange === 'light' ? (
        <MdDarkMode className="text-4xl text-slate-800" />
     
      ) : (
        <MdLightMode className="text-4xl text-yellow-500"/>
       
      )}
    </button>
  );
};

export default ThemeBtn;
