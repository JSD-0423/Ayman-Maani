// imports----------------------------------------------------------------------------------------------------------->
import{
DarkModeAdjustments, 
darkModeButton, 
adjustModesButtonsTitles, 
toggleDarkMode
} from './state.js'



// EXPORTS---------------------------------------------------------------------------------------------------------->

// TOGGLE DARK TEHEME ON AND OFF FOR BOTH PAGES---------------------------------------------------------------------------------------------------------------------------------------------> 

darkModeButton.addEventListener("click", ()=>{// This toggles the dark mode for both pages 
    DarkModeAdjustments(adjustModesButtonsTitles,toggleDarkMode);
}); 

