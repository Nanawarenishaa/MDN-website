import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Login from "./Components/Login";
import ContentPage from "./Components/ContentPage";
import { ContentProvider } from "./Components/context/ContentContext";

function App() {
  const [isOpenSideBar, setIsOpenSidebar] = useState(true);

  const toggleSideBar = () => {
    setIsOpenSidebar(!isOpenSideBar);
  };

  return (
<ContentProvider>
  <Router>
    <div className="w-full min-h-screen bg-slate-50">
      <Header toggleSideBar={toggleSideBar} />
      {isOpenSideBar && <SideBar closeSideBar={toggleSideBar} />}
        

      <Routes>
      <Route path="/" element={<ContentPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
 

</ContentProvider>
  );
}

export default App;
