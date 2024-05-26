
import React, { useState, useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import ArrayData from './ArrayData';
import { ContentContext } from './context/ContentContext'; 
import { ThemeContext } from './context/ThemeContext';

const SideBar = ({ closeSideBar }) => {
  const { setSelectContent } = useContext(ContentContext);
  const { themeChange } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(null);

  const toggleSubPoints = (MainPoint) => {
    setIsOpen(isOpen === MainPoint ? null : MainPoint);
  };

  return (
    <div className={`w-[25%] min-h-screen fixed top-13 shadow-lg z-10 left-0 pt-10 px-4 ${themeChange === 'light' ? 'bg-white text-slate-900' : 'bg-slate-800 text-white'}`}>
      <h2 className="text-3xl">SQL Tutorial</h2>
      <div className="pt-6 flex flex-col gap-4">
        <RxCross2 className="absolute top-4 right-6 text-3xl cursor-pointer" onClick={closeSideBar} />
        {ArrayData.map((data, index) => (
          <div key={index}>
            <h2
              className="text-xl font-semibold text-white bg-indigo-600 rounded-md py-2 px-4 cursor-pointer"
              onClick={() => toggleSubPoints(data.mainPoint)}
            >
              {data.mainPoint}
            </h2>
            {isOpen === data.mainPoint && (
              <div className="flex flex-col gap-2 pt-4 pl-6">
                {data.subPoints.map((subPoint, subIndex) => (
                  <span
                    key={subIndex}
                    className="text-xl hover:text-indigo-800 hover:bg-indigo-100 rounded-md py-2 px-4 cursor-pointer"
                    onClick={() => setSelectContent(subPoint.content)}
                  >
                    {subPoint.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
