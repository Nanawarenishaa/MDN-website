import { CiMenuKebab } from "react-icons/ci";
import Button from "./Button";
import { CiBrightnessUp } from "react-icons/ci";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({toggleSideBar}) => {
  return (

    <div className="w-full p-2 bg-white shadow-sm text-black  place-content-center flex justify-between items-center">
      <CiMenuKebab className="text-4xl" onClick={toggleSideBar} />
      <div className="flex gap-12 items-center ">
    <Link to="/login">
       <Button text={"Login"}  />
    </Link>
        <CiBrightnessUp className="text-4xl p-1 rounded-md  hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 hover:text-white "  />
      </div>
    </div>
  );
};

export default Header;
