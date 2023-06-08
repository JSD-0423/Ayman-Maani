// IMPORTS----------------------------------------------------------------------------------------------------------->

import {
ActivateFavouritesSection,
modesButtons,
disableHeaderFavouritesHover,
toggleHeaderFavourtiesBtnOn,
toggleFavouritesIsClickedTrue,
toggleFavouritesIsClickedFalse
} from './state.js';
// EXPORTS---------------------------------------------------------------------------------------------------------->

//LOCAL DECLARATIONS-------------------------------------------------------------------------------------------------->

modesButtons[1].addEventListener("click", ()=>{
    ActivateFavouritesSection(toggleHeaderFavourtiesBtnOn , disableHeaderFavouritesHover,toggleFavouritesIsClickedTrue, toggleFavouritesIsClickedFalse)
});


// ON PAGE LOAD------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>



