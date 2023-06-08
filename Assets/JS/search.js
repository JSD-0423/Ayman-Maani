// IMPORTS----------------------------------------------------------------------------------------------------------->

import{searchField, searchAPI, printData, clearWebTopics,webTopicBox,loopOverExtractedAPI} from './state.js'


searchField.addEventListener("keyup", (e)=>{
    searchAPI(e,printData,clearWebTopics,webTopicBox,loopOverExtractedAPI);
});

// searchFilterSelect.addEventListener("change", ()=>{
//     searchAPI();
// });

// searchSortSelect.addEventListener("change", ()=>{
//     searchAPI();
// });


