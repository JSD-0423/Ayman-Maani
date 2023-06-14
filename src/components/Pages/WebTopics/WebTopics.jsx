import React, { useContext, useEffect, useState } from 'react'
import style from './CSS/WebTopics.module.css';
import {fetchWebTopicsData} from '../../API/API.js';
import {displayFethcedData} from './JS/WebTopics.js';
import { SearchContext } from '../../Context/SearchContext';
import Search from '../../Search/Search.jsx';


export default function WebTopics() {
    const {webTopicsData, setWebTopicsData} = useContext(SearchContext);
    const {SearchBarIsActive, setSearchBarIsActive} = useContext(SearchContext);
    const [dataIsDisplayed, setDataIsDisplayed] = useState(false);
    useEffect(()=>{
        if(dataIsDisplayed===false){
            setDataIsDisplayed(true);
            fetchWebTopicsData(setWebTopicsData);
        }else{
            setSearchBarIsActive(true);
            // do the search
            // Then display data
        }
    },[SearchBarIsActive,dataIsDisplayed,setSearchBarIsActive,setDataIsDisplayed,setWebTopicsData]);
  return (
    <main className={style.mainSection}>
        <section id="web-topics-page" className={style.webTopicsPage}>
            <Search />
            <div className={`container ${style.mainCustomContainer}`}>
                <h3 id="number-of-topics-found">{`"${webTopicsData.length}" Web Topics Found`}</h3>
                <div className={style.webTopicsBoxParent}>
                    <div id="web-topics" className={style.webTopics}>
                        {displayFethcedData(webTopicsData)}
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
