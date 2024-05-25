import React, { useContext } from 'react';
import { ContentContext } from './context/ContentContext'; // Ensure correct import path

const ContentPage = () => {
  const { selectContent } = useContext(ContentContext); // Ensure correct context variable name

  return (
    <div className="bg-slate-50 min-h-screen w-[75%] p-4 absolute right-0">
      {selectContent ? (
        <div>
          <h2 className="text-black text-4xl">{selectContent.heading}</h2>
          <p className="text-lg mt-4">{selectContent.description}</p>
          <div className="text-md mt-2">{selectContent.details}</div>
        </div>
      ) :
       (
        <h2 className="text-black text-4xl">Please select a topic.</h2>
      )}
    </div>
  );
};

export default ContentPage;

