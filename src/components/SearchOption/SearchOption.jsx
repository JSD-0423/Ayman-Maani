import React from 'react';
import {createOptions} from './CreateOptions.js';
import {applyFilter} from './ApplyFilters.js'



export default function SearchOption({setWebTopicsData,labelId,selectId,labelTitle,selectName,options,selectRef,searchAPIArray, setSearchAPIArray,inputRef,allFilters,setAllFilters,webTopicsData,sortRef}) {
  return (
    <>
      <label id={labelId} htmlFor={selectId}>{labelTitle}</label>
      <select ref={labelTitle==="Sort by:"? sortRef : selectRef } onChange={()=> applyFilter(selectRef,setWebTopicsData,setSearchAPIArray,searchAPIArray,inputRef,allFilters,setAllFilters,inputRef,webTopicsData,sortRef,labelTitle)}  id={selectId} name={selectName}>
      <option value="Default">Default</option>
          {createOptions(options)}
      </select>
    </>
  )
}
