import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(false);
    const contextValue = {
        darkMode,
        setDarkMode,
    };
    return <DarkModeContext.Provider value ={contextValue}>{children}</DarkModeContext.Provider>
}


