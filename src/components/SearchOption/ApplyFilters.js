import { fetchWebTopicsData } from "../API/API";

export const filterActiveArr = (arrayType,selectRef,inputRef)=>{
  if(inputRef.current.value===""){
    return arrayType.filter((card)=> card.category.toLowerCase().includes(selectRef.current.value.toLowerCase()))
  }else{
    return arrayType.filter((card)=> card.category.toLowerCase().includes(selectRef.current.value.toLowerCase()))
                    .filter((card) => card.topic.toLowerCase().includes(inputRef.current.value.toLowerCase()) || card.name.toLowerCase().includes(inputRef.current.value.toLowerCase()));
  }
}


const customFilter =(selectRef,setWebTopicsData,setSearchAPIArray,searchAPIArray,inputRef,allFilters)=>{
    let filteredData;
    if(inputRef.current.value===""){
        filteredData = filterActiveArr(allFilters,selectRef,inputRef); 
        setWebTopicsData([...filteredData]);
      }else{
        filteredData = filterActiveArr(searchAPIArray,selectRef,inputRef); 
        setSearchAPIArray([...filteredData]);
      }
}

const defaultFilter = (selectRef,setWebTopicsData,setSearchAPIArray,inputRef,allFilters,setAllFilters)=>{
    let filteredData;
    if(inputRef.current.value===""){
        filteredData = filterActiveArr(allFilters,selectRef,inputRef);
        setWebTopicsData([...filteredData]);
      }else{
        fetchWebTopicsData(setWebTopicsData,setSearchAPIArray,inputRef,setAllFilters);
      }
}

const sortByTopicTitle=(inputRef,sortRef,webTopicsData,setWebTopicsData,searchAPIArray,setSearchAPIArray)=>{
  if(sortRef.current.value==="Topic Title"){
    if(inputRef.current.value===""){
      let sortedData = webTopicsData.sort((a,b)=>{
        const topicA = a.topic.toLowerCase();
        const topicB = b.topic.toLowerCase();
        if(topicA > topicB){
            return 1
        }
        if(topicA < topicB){
            return -1
        }
        return 0
    })
    setWebTopicsData([...sortedData]);
    }else{
      let sortedData = searchAPIArray.sort((a,b)=>{
        const topicA = a.topic.toLowerCase();
        const topicB = b.topic.toLowerCase();
        if(topicA > topicB){
            return 1
        }
        if(topicA < topicB){
            return -1
        }
        return 0
    })
    setSearchAPIArray([...sortedData]);
    }
  }
}

const sortByAuthorName = (inputRef,sortRef,webTopicsData,setWebTopicsData,searchAPIArray,setSearchAPIArray)=>{
  if(sortRef.current.value==="Author Name"){
    if(inputRef.current.value===""){
      let sortedData = webTopicsData.sort((a,b)=>{
        const topicA = a.name.toLowerCase();
        const topicB = b.name.toLowerCase();
        if(topicA > topicB){
            return 1
        }
        if(topicA < topicB){
            return -1
        }
        return 0
    })
    setWebTopicsData([...sortedData]);
    }else{
      let sortedData = searchAPIArray.sort((a,b)=>{
        const topicA = a.name.toLowerCase();
        const topicB = b.name.toLowerCase();
        if(topicA > topicB){
            return 1
        }
        if(topicA < topicB){
            return -1
        }
        return 0
    })
    setSearchAPIArray([...sortedData]);
    }
  }
}

export const applyFilter = (selectRef,setWebTopicsData,setSearchAPIArray,searchAPIArray,inputRef,allFilters,setAllFilters,webTopicsData,sortRef,labelTitle)=>{
  
    if(labelTitle==="Sort by:"){
      if(sortRef.current.value==="Topic Title"){
        sortByTopicTitle=(inputRef,sortRef,webTopicsData,setWebTopicsData,searchAPIArray,setSearchAPIArray);
      }else if(sortRef.current.value==="Author Name"){
        sortByAuthorName = (inputRef,sortRef,webTopicsData,setWebTopicsData,searchAPIArray,setSearchAPIArray);
      }else{
  
      }
    }else{
      if(selectRef.current.value!=="Default"){
        customFilter(selectRef,setWebTopicsData,setSearchAPIArray,searchAPIArray,inputRef,allFilters);
    }else{
        defaultFilter (selectRef,setWebTopicsData,setSearchAPIArray,inputRef,allFilters,setAllFilters);
    }
    }
  }