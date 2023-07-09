// import React, { useEffect } from 'react';
import {createOptions} from './CreateOptions.js';
import {applyFilter} from './ApplyFilters.js'



export default function SearchOption({setWebTopicsData,labelId,selectId,labelTitle,selectName,options,selectRef,searchAPIArray, setSearchAPIArray,inputRef,allFilters,setAllFilters,webTopicsData,sortRef,optionType,unsortedArry,setUnsortedArry}) {

  return (
    <>
      <label id={labelId} htmlFor={selectId}>{labelTitle}</label>
      <select ref={optionType} onChange={()=> applyFilter(selectRef,setWebTopicsData,setSearchAPIArray,searchAPIArray,inputRef,allFilters,setAllFilters,webTopicsData,sortRef,unsortedArry,setUnsortedArry)}  id={selectId} name={selectName}>
      <option value="Default">Default</option>
          {createOptions(options)}
      </select>
    </>
  )
}
