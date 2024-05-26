import { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Login from "./Components/Login";
import ContentPage from "./Components/ContentPage";
import { ContentProvider } from "./Components/context/ContentContext";
import { ThemeProvider, ThemeContext } from "./Components/context/ThemeContext";

function App() {
  const [isOpenSideBar, setIsOpenSidebar] = useState(true);

  const toggleSideBar = () => {
    setIsOpenSidebar(!isOpenSideBar);
  };

  return (
    <ThemeProvider>
      <ContentProvider>
        <ThemedAppContent toggleSideBar={toggleSideBar} isOpenSideBar={isOpenSideBar} />
      </ContentProvider>
    </ThemeProvider>
  );
}

const ThemedAppContent = ({ toggleSideBar, isOpenSideBar }) => {
  const { themeChange } = useContext(ThemeContext);

  return (
    <div className={`w-full min-h-screen ${themeChange === 'light' ? 'bg-slate-50' : 'bg-slate-800'}`}>
      <Router>
        <Header toggleSideBar={toggleSideBar} />
        {isOpenSideBar && <SideBar closeSideBar={toggleSideBar} />}
        <Routes>
          <Route path="/" element={<ContentPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
