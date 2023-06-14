import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({children}) =>{
    const [webTopicsData, setWebTopicsData] = useState([]);
    const [SearchBarIsActive, setSearchBarIsActive] = useState(false);

    const contextValue = {
        webTopicsData,
        setWebTopicsData,
        SearchBarIsActive,
        setSearchBarIsActive,
    };
    return <SearchContext.Provider value ={contextValue}>{children}</SearchContext.Provider>
  }


