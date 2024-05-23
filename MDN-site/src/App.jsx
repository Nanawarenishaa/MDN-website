import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Login from "./Components/Login";

function App() {
  const [isOpenSideBar, setIsOpenSidebar] = useState(false);

  const toggleSideBar = () => {
    setIsOpenSidebar(!isOpenSideBar);
  };

  return (

    <Router>
      <div className="w-full bg-white">
        <Header toggleSideBar={toggleSideBar} />
        {isOpenSideBar && <SideBar closeSideBar={toggleSideBar} />}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
