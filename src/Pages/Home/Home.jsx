import React, {useEffect, useRef, useState} from 'react'
import style from './Home.module.css';
import {fetchWebTopicsData} from '../../components/API/API.js';
import Search from '../../components/Search/Search.jsx';
import {applyFilter} from '../../components/SearchOption/ApplyFilters.js'
import { displayDataWithoutSearch, displaySearchedData } from './DisplayApiData.js';



export default function Home({webTopicsData,setWebTopicsData}) {
    let apiHasBeenCalled = useRef(false);
    const sortRef = useRef(null);
    const selectRef = useRef(null);
    const inputRef = useRef("");
    const [filterCategory, setFilterCategory] = useState([]);
    const [searchAPIArray, setSearchAPIArray] = useState ([]);
    const [unsortedArry,setUnsortedArry] = useState([]);
    const [allFilters, setAllFilters] = useState([]);

    useEffect(()=>{
        if(apiHasBeenCalled.current=== false){
            apiHasBeenCalled.current = true;
            fetchWebTopicsData(setWebTopicsData,setSearchAPIArray,inputRef,setAllFilters,setUnsortedArry); 
        }else{
            applyFilter(selectRef,setWebTopicsData,setSearchAPIArray,searchAPIArray,inputRef,allFilters,setAllFilters,webTopicsData,sortRef,unsortedArry,setUnsortedArry);
        }

    },[selectRef.current?.value, sortRef.current?.value]);
  return (
    <main className={style.mainSection}>
        <section id="web-topics-page" className={style.webTopicsPage}>
            <Search filterCategory={filterCategory} setFilterCategory={setFilterCategory} webTopicsData = {webTopicsData} setWebTopicsData={setWebTopicsData} selectRef={selectRef} inputRef={inputRef} searchAPIArray={searchAPIArray} setSearchAPIArray={setSearchAPIArray} allFilters={allFilters} setAllFilters={setAllFilters} sortRef={sortRef} unsortedArry={unsortedArry} setUnsortedArry={setUnsortedArry} />
            <div className={`container ${style.mainCustomContainer}`}>
                <h3 id="number-of-topics-found">{`"${inputRef.current?.value===""?webTopicsData.length:searchAPIArray.length}" Web Topics Found`}</h3>
                <div className={style.webTopicsBoxParent}>
                    <div id="web-topics" className={style.webTopics}>
                        {inputRef.current.value==="" ? displayDataWithoutSearch(webTopicsData) : displaySearchedData(searchAPIArray) }
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
