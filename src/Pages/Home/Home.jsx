import React, {useEffect} from 'react'
import style from './Home.module.css';
import {fetchWebTopicsData} from '../../components/API/API.js';
import Search from '../../components/Search/Search.jsx';
import {applyFilter} from '../../components/SearchOption/ApplyFilters.js'
import { displayDataWithoutSearch, displaySearchedData } from './DisplayApiData.js';



export default function Home({webTopicsData,setWebTopicsData,selectRef,inputRef,filterCategory,setFilterCategory,searchAPIArray, setSearchAPIArray,allFilters, setAllFilters,sortRef}) {
    useEffect(()=>{
        if(webTopicsData.length===0){
            fetchWebTopicsData(setWebTopicsData,setSearchAPIArray,inputRef,setAllFilters);
        }else{
            applyFilter(selectRef,setWebTopicsData,setSearchAPIArray,searchAPIArray,inputRef,webTopicsData,allFilters);
        }

    },[selectRef.current?.value]);
  return (
    <main className={style.mainSection}>
        <section id="web-topics-page" className={style.webTopicsPage}>
            <Search filterCategory={filterCategory} setFilterCategory={setFilterCategory} webTopicsData = {webTopicsData} setWebTopicsData={setWebTopicsData} selectRef={selectRef} inputRef={inputRef} searchAPIArray={searchAPIArray} setSearchAPIArray={setSearchAPIArray} allFilters={allFilters} setAllFilters={setAllFilters} sortRef={sortRef} />
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
