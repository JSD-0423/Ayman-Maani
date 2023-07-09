
export const sortData = (sortRef,inputRef,webTopicsData,setWebTopicsData,searchAPIArray,setSearchAPIArray,unsortedArry)=>{
    if(sortRef.current.value==="Topic Title"){
        sortByTopicTitle(inputRef,webTopicsData,setWebTopicsData,searchAPIArray,setSearchAPIArray);
      }else if(sortRef.current.value==="Author Name"){
        sortByAuthorName(inputRef,webTopicsData,setWebTopicsData,searchAPIArray,setSearchAPIArray);
      }else{
        if(inputRef.current.value===""){
          console.log("default sort activated, this is the value of unsortedArry", unsortedArry);
          console.log("default sort activated this is the valuye of webTopicsData", webTopicsData);
          setWebTopicsData([...unsortedArry]);
        }else{
          setSearchAPIArray([...unsortedArry]);
        }
      }
}

const sortByTopicTitle=(inputRef,webTopicsData,setWebTopicsData,searchAPIArray,setSearchAPIArray)=>{
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
    console.log("custom sort activated")
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
  
const sortByAuthorName = (inputRef,webTopicsData,setWebTopicsData,searchAPIArray,setSearchAPIArray)=>{
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