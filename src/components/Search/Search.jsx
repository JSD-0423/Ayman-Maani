import React from 'react';
import style from './CSS/Search.module.css';
export default function Search() {
  return (
<section id="search-bar-section" className={style.searchSection}>
  <div className={`container ${style.searchCustomContainer}`}>
    <div className={style.searchBar}>
      <span id="search-icon" className={style.searchIcon}><ion-icon name="search-outline" /></span>
      <input className={style.searchField} type="search" id="SearchField" placeholder="Search the website..." />
      <div className={`${style.searchSortOption} ${style.searchOptions}`}>
        <label id="search-sort-label" htmlFor="search-sort-select">Sort by:</label>
        <select id="search-sort-select" name="sort">
          <option value="Default">Default</option>
          <option value="Default">Topic Title</option>
          <option value="Default">Author Name</option>
        </select>
      </div>
      <div className={`${style.searchFilterOption} ${style.searchOptions}`}>
        <label id="search-filter-label" htmlFor="search-filter-select">Filter by:</label>
        <select id="search-filter-select" name="filter">
          <option value="Default">Default</option>
        </select>
      </div>
    </div>
  </div>
</section>
  )
}