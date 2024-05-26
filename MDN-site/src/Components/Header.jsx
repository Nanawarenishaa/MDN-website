
import { CiMenuKebab } from "react-icons/ci";
import Button from "./Button";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Header = ({ toggleSideBar }) => {

  const {themeChange} = useContext(ThemeContext);
  return (
    <div className={`w-full p-2 bg-white shadow-sm text-blackplace-content-center flex justify-between items-center ${themeChange === 'light' ? 'bg-white text-slate-900' : 'bg-slate-800 text-white'}`}>
      <CiMenuKebab className="text-4xl" onClick={toggleSideBar} />
      <div className="flex gap-12 items-center">
        <Link to="/login">
          <Button text={"Login"} />
        </Link>
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;

