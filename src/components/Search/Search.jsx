import React,{useEffect } from 'react';
import style from './Search.module.css';
import SearchOption from '../SearchOption/SearchOption.jsx';
import {searchWebTopics} from './Search.js';
import {createFilterOptions} from './Filter.js';

export default function Search({webTopicsData,setWebTopicsData,selectRef,inputRef,filterCategory,setFilterCategory,searchAPIArray, setSearchAPIArray,allFilters,setAllFilters,sortRef}) {

  useEffect(()=>{

    createFilterOptions(webTopicsData,setFilterCategory,searchAPIArray,inputRef,allFilters);

  },[webTopicsData.length, searchAPIArray.length])
  return (
<section id="search-bar-section" className={style.searchSection}>
  <div className={`container ${style.searchCustomContainer}`}>
    <div className={style.searchBar}>
      <span id="search-icon" className={style.searchIcon}><ion-icon name="search-outline" /></span>
      <input ref={inputRef} onKeyUp={(e)=>searchWebTopics(e,setWebTopicsData,selectRef,setSearchAPIArray,inputRef,searchAPIArray,webTopicsData,setFilterCategory,allFilters)} className={style.searchField} type="search" id="SearchField" placeholder="Search the website..." />
      <div className={`${style.searchSortOption} ${style.searchOptions}`}>
        <SearchOption webTopicsData={webTopicsData} setWebTopicsData={setWebTopicsData} labelId = "search-sort-label" selectId="search-sort-select" labelTitle="Sort by:" selectName="sort" options={["Topic Title", "Author Name"]} sortRef={sortRef}/>
      </div>
      <div className={`${style.searchFilterOption} ${style.searchOptions}`}>
        <SearchOption inputRef={inputRef}  searchAPIArray={searchAPIArray} setSearchAPIArray={setSearchAPIArray} selectRef={selectRef} setWebTopicsData={setWebTopicsData} allFilters={allFilters}  labelId = "search-filter-label" selectId="search-filter-select" labelTitle="Filter by:" selectName="filter" options={filterCategory} setAllFilters={setAllFilters}/>
      </div>
    </div>
  </div>
</section>
  )
}