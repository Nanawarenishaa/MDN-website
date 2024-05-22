import { CiMenuKebab } from "react-icons/ci";
import Button from "./Button";
import { CiBrightnessUp } from "react-icons/ci";
const Header = () => {
  return (
    <div className="w-full p-2 bg-slate-50 shadow-sm text-black place-content-center flex justify-between items-center">
      <CiMenuKebab className="text-4xl" />
      <div className="flex gap-12 items-center ">
        <Button text={"Login"} />
        <CiBrightnessUp className="text-4xl p-1 rounded-md  hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 hover:text-white " />
      </div>
    </div>
  );
};

export default Header;
