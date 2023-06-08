// IMPORTS----------------------------------------------------------------------------------------------------------->

import {mainToDetailsAnimation, webTopicBox, adjustPageTitle, disableWebTopicsPage,pageTitle,detailsToMainAnimation,activateMainPageStyle} from './state.js';

// EXPORTS---------------------------------------------------------------------------------------------------------->


//ANIMATIONS AND FUNCTIONS RELATED TO SWITCHING TO DETAILS PAGE---------------------------------------------------------------------------------------------------------->

webTopicBox.addEventListener("click",(e)=>{//This controls the animation to switch to the details page.
    mainToDetailsAnimation(e,adjustPageTitle,disableWebTopicsPage);
})



//ANIMATIONS AND FUNCTIONS RELATED TO SWITCH TO THE MAIN PAGE------------------------------------------------------------------------------------------------------------------------>

pageTitle.addEventListener("click",()=>{//this is for switching back to the main page
    detailsToMainAnimation(activateMainPageStyle);
});

