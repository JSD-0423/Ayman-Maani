// IMPORTS----------------------------------------------------------------------------------------------------------->
import {
onPageLoadsHeaderfunctions,
headerButtonsAdjustmentsOnResize,
disableHeaderFavouritesHover,
toggleHeaderFavouritesHover,
adjustHeaderBtnsSizesAndIconColor
} from './state.js';


// ON PAGE LOAD FUNCTIONS------------------------------------------------------------------------------------------------------------------------------------>

onPageLoadsHeaderfunctions(toggleHeaderFavouritesHover,adjustHeaderBtnsSizesAndIconColor);

window.addEventListener("resize", ()=>{
    headerButtonsAdjustmentsOnResize(disableHeaderFavouritesHover, toggleHeaderFavouritesHover, adjustHeaderBtnsSizesAndIconColor);
});

