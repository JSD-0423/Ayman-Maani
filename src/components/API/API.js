export async function fetchWebTopicsData(setWebTopicsData,setSearchAPIArray,inputRef,setAllFilters){
    
if(inputRef.current.value===""){
    return getApiData(setWebTopicsData,setAllFilters);
}else{
    return getApiDataWithSearch(setSearchAPIArray,inputRef);
}
}

const getApiData = async(setWebTopicsData,setAllFilters)=>{
    try{
        let data = await fetch('https://tap-web-1.herokuapp.com/topics/list');
        if (!data.ok) {
            throw new Error('Error fetching data');
        }else{
            let webTopicsData =  await data.json();
            setWebTopicsData([...webTopicsData]);
            setAllFilters([...webTopicsData])
            return webTopicsData;
        }
    } catch (error){
        alert(`An error occurred while fetching data: ${error.message}`);
    }
}


const  getApiDataWithSearch = async(setSearchAPIArray,inputRef)=>{
    try{
        let data = await fetch(`https://tap-web-1.herokuapp.com/topics/list?phrase=${inputRef.current.value}`);
        if (!data.ok) {
            throw new Error('Error fetching data');
        }else{
            let webTopicsData =  await data.json();
            setSearchAPIArray([...webTopicsData]);
            return webTopicsData;
        }
    } catch (error){
        alert(`An error occurred while fetching data: ${error.message}`);
    }
}