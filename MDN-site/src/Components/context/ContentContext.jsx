
import React, { createContext, useState } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const [selectContent, setSelectContent] = useState(null);
    return (
        <ContentContext.Provider value={{ selectContent, setSelectContent }}>
            {children}
        </ContentContext.Provider>
    );
};
