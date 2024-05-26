
import React, { useContext } from 'react';
import { ContentContext } from './context/ContentContext';
import { ThemeContext } from './context/ThemeContext';

const ContentPage = () => {
  const { selectContent } = useContext(ContentContext);
  const { themeChange } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen w-[75%] p-4 absolute right-0 ${themeChange === 'light' ? 'bg-slate-50 text-black' : 'bg-gray-900 text-white'}`}>
      {selectContent ? (
        <div>
          <h2 className="text-4xl">{selectContent.heading}</h2>
          <p className="text-lg mt-4">{selectContent.description}</p>
          <div className="text-md mt-2">{selectContent.details}</div>
        </div>
      ) : (
        <h2 className="text-4xl">Please select a topic.</h2>
      )}
    </div>
  );
};

export default ContentPage;


