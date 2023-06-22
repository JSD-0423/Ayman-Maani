import {fetchWebTopicsData} from '../API/API.js';
// import {applyFilter} from '../SearchOption/SearchOption.js';
import {createFilterOptions,filterWithSearchInput,filterWithoutSearchInput} from './Filter.js';

export const searchWebTopics = (function() {
    let timeout;
  
    return function(e,setWebTopicsData,selectRef,setSearchAPIArray,inputRef,searchAPIArray,webTopicsData,setFilterCategory,allFilters) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        if(e.target.value!==""){
          filterWithSearchInput(e,selectRef,setSearchAPIArray,inputRef);
        }else{
          filterWithoutSearchInput(setWebTopicsData,selectRef,allFilters);
        }
        createFilterOptions(webTopicsData,setFilterCategory,searchAPIArray,inputRef,allFilters);
      }, 300);
    };
  })();


 


