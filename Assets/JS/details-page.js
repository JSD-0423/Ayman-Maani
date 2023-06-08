// IMPORTS----------------------------------------------------------------------------------------------------------->
import {adjustDetailsPageCardPosition, deatilsPageCardAdjustmentOnResize} from './state.js'


// ON PAGE LOAD FUNCTIONS......................................................................................................................>

adjustDetailsPageCardPosition();

window.addEventListener("resize", ()=>{
    deatilsPageCardAdjustmentOnResize(adjustDetailsPageCardPosition);
});