import {fetchWebTopicsData} from '../API/API.js';
    
  export const createFilterOptions = (webTopicsData,setFilterCategory,searchAPIArray,inputRef,allFilters)=>{
    let categoryData; 
    if(inputRef.current.value!==""){
      categoryData = inputRef.current.value!=="" && searchAPIArray.length===0 ? webTopicsData.map((card) => card.category): searchAPIArray.map((card) => card.category)
        
    }else{
      categoryData = allFilters.map((card) => card.category);
    }
    categoryData= new Set(categoryData);
    setFilterCategory([...categoryData]);
  }

  export const filterWithSearchInput = async(e,selectRef,setSearchAPIArray,inputRef,setAllFilters)=>{
    let filteredData;
     console.log("search bar is not empty");
     if(selectRef.current.value!=="Default"){
       const webTopicsData = await fetchWebTopicsData(null,setSearchAPIArray,inputRef,setAllFilters);
       filteredData = webTopicsData.filter((card)=> card.category.toLowerCase().includes(selectRef.current.value.toLowerCase()))
                                   .filter((card) => card.topic.toLowerCase().includes(e.target.value.toLowerCase()) || card.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchAPIArray([...filteredData]);
     }else{
       await fetchWebTopicsData(null,setSearchAPIArray,inputRef,setAllFilters);
     }
   }
 
   export const filterWithoutSearchInput = async(setWebTopicsData,selectRef,allFilters)=>{
    let filteredData;
     console.log("search bar is empty");
     if(selectRef.current.value!=="Default"){
       filteredData =allFilters.filter((card)=> card.category.toLowerCase().includes(selectRef.current.value.toLowerCase()));
       setWebTopicsData([...filteredData]);
     }else{
        setWebTopicsData([...allFilters]);
     }
   }
 