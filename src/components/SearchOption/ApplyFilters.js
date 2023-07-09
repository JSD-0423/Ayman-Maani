import { fetchWebTopicsData } from "../API/API";
import { sortData } from "./Sort.js";

export const applyFilter = async (selectRef,setWebTopicsData,setSearchAPIArray,searchAPIArray,inputRef,allFilters,setAllFilters,webTopicsData,sortRef,unsortedArry,setUnsortedArry)=>{
  console.log("applyfilter fucntion has been called");
  if(selectRef.current.value!=="Default"){
    customFilter(selectRef,setWebTopicsData,setSearchAPIArray,searchAPIArray,inputRef,allFilters,setUnsortedArry);
  }else{
    defaultFilter (setWebTopicsData,setSearchAPIArray,inputRef,allFilters,setAllFilters,setUnsortedArry);
  }
  sortData(sortRef,inputRef,webTopicsData,setWebTopicsData,searchAPIArray,setSearchAPIArray,unsortedArry);
}

const customFilter =(selectRef,setWebTopicsData,setSearchAPIArray,searchAPIArray,inputRef,allFilters,setUnsortedArry)=>{
  let filteredData;
  if(inputRef.current.value===""){
      filteredData = filterActiveArr(allFilters,selectRef,inputRef); 
      setWebTopicsData([...filteredData]);
      setUnsortedArry([...filteredData]);
    }else{
      filteredData = filterActiveArr(searchAPIArray,selectRef,inputRef); 
      setSearchAPIArray([...filteredData]);
      setUnsortedArry([...filteredData]);
    }
}

const defaultFilter = (setWebTopicsData,setSearchAPIArray,inputRef,allFilters,setAllFilters,setUnsortedArry)=>{
  if(inputRef.current.value===""){
      setUnsortedArry([...allFilters]);
      setWebTopicsData([...allFilters]);
    }else{
      fetchWebTopicsData(setWebTopicsData,setSearchAPIArray,inputRef,setAllFilters);
    }
}

const filterActiveArr = (arrayType,selectRef,inputRef)=>{
  if(inputRef.current.value===""){
    return arrayType.filter((card)=> card.category.toLowerCase().includes(selectRef.current.value.toLowerCase()))
  }else{
    return arrayType.filter((card)=> card.category.toLowerCase().includes(selectRef.current.value.toLowerCase()))
                    .filter((card) => card.topic.toLowerCase().includes(inputRef.current.value.toLowerCase()) || card.name.toLowerCase().includes(inputRef.current.value.toLowerCase()));
  }
}


