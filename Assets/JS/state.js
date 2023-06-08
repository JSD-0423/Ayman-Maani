
// EXPORTS------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

export let windowWidthStatus = {currentScreenSize : window.innerWidth} 
export const body = document.body; 

//HEADER EXPORTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export {
    modesButtons, 
    darkModeButton, 
    pageTitle,
    toggleHeaderFavourtiesBtnOn, 
    checkHeaderFavouritesBtnStatus,
    onPageLoadsHeaderfunctions, 
    headerButtonsAdjustmentsOnResize,
    adjustHeaderBtnsSizesAndIconColor, 
    disableHeaderFavouritesHover, 
    toggleHeaderFavouritesHover
} 

//DARKMODE EXPORTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export {DarkModeAdjustments, adjustModesButtonsTitles, toggleDarkMode};

// FAVOURITES EXPORTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export {favouritesSection, ActivateFavouritesSection,toggleFavouritesIsClickedTrue, toggleFavouritesIsClickedFalse}; 

//SEARCH BAR EXPORTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export {searchBar,searchField,searchTimeout,searchSortSelect,searchFilterSelect, searchAPI}

//WEB TOPICS EXPORTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export {numberOfTopics,webTopicsPage,webTopicBox}

//ANIMATION EXPORTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export {mainToDetailsAnimation, adjustPageTitle, disableWebTopicsPage, detailsToMainAnimation, activateMainPageStyle};

// BROWSER HISTORY>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export {handlePopstate};

//DETAILS PAGES EXPORTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export{courseDetailsBoxContainer,detailsPageCardContianer, detailsPage,detailsPageIsActiveStatus, deatilsPageCardAdjustmentOnResize, adjustDetailsPageCardPosition}

//API EXPORTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export {fetchData, printData,checkSearchModes,clearWebTopics,loopOverExtractedAPI};



// HEADER FUCNTIONS---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

//HEADER LOCAL DECLARATIONS..........................................................................................................................................................>

const modesButtons = document.querySelectorAll(".modes-buttons"); 
const darkModeButton = document.getElementById("dark-mode-button"); 
const pageTitle = document.getElementById("page-title"); 
let headerButtonsIsClickedStatus ={ 
    darkModeButtonIsClicked : false,
    favouritesIsClicked : false
};

const removeRedheartLargeScreens = ()=>{ // Function expressions that toggle red heart on and off for the favourites button in header based on screen width.///////////////
    modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon" name="heart-outline"></ion-icon> Favourites`;
}
const addRedHeartLargeScreens = ()=>{
    modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon heart-icon-red-color" name="heart"></ion-icon> Favourites`;
}
const removeRedheartSmallScreens = ()=>{
    modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon" name="heart-outline"></ion-icon>`;  
}
const addRedHeartSmallScreens = ()=>{
    modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon heart-icon-red-color" name="heart"></ion-icon>`;
}

const checkHeaderFavouritesBtnStatus =()=>{
    if(headerButtonsIsClickedStatus.favouritesIsClicked == true){
        if(windowWidthStatus.currentScreenSize>=519){
            addRedHeartLargeScreens();
        }else{
            addRedHeartSmallScreens();
        }
    }else{
        if(windowWidthStatus.currentScreenSize>=519){
            removeRedheartLargeScreens();
        }else{
            removeRedheartSmallScreens();
        }
    }
}

const toggleHeaderFavourtiesBtnOn = ()=>{
    if(windowWidthStatus.currentScreenSize>=519){
        addRedHeartLargeScreens();
    }else{
        addRedHeartSmallScreens();
    }
}

const disableHeaderFavouritesHover = ()=> {
    modesButtons[1].removeEventListener("mouseenter", addRedHeartLargeScreens);
    modesButtons[1].removeEventListener("mouseleave", removeRedheartLargeScreens);
    modesButtons[1].removeEventListener("mouseenter", addRedHeartSmallScreens);
    modesButtons[1].removeEventListener("mouseleave", removeRedheartSmallScreens);
}

// ON PAGE LOAD FUNCTIONS FOR HEADER...........................................................................................................................>

const toggleHeaderFavouritesHover = ()=>{// Toggles hover for the favourites button that adds red heart when necessary for both small icons and large ones. 
    if(headerButtonsIsClickedStatus.favouritesIsClicked == false){
        if(windowWidthStatus.currentScreenSize >= 519){
            modesButtons[1].addEventListener("mouseenter", addRedHeartLargeScreens);
            modesButtons[1].addEventListener("mouseleave", removeRedheartLargeScreens);
        }else{
            modesButtons[1].addEventListener("mouseenter", addRedHeartSmallScreens);
            modesButtons[1].addEventListener("mouseleave", removeRedheartSmallScreens);
        }
    }
}

const adjustHeaderBtnsSizesAndIconColor = ()=>{ // checks window's width to determine the appropriate size of header buttons both on page load and every time the window gets resized. 
    windowWidthStatus.currentScreenSize= window.innerWidth;
    if(windowWidthStatus.currentScreenSize>= 519){
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon> Dark Mode`;
        modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon" name="heart-outline"></ion-icon> Favourites`;
    }else{
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon>`;
        modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon" name="heart-outline"></ion-icon>`;
    }
    checkHeaderFavouritesBtnStatus(); // if the favourite btn is active durign window resize, then toggle red heart based on the screen width 
}

const onPageLoadsHeaderfunctions = (toggleHeaderFavouritesHover,adjustHeaderBtnsSizesAndIconColor)=> {
    toggleHeaderFavouritesHover();
    adjustHeaderBtnsSizesAndIconColor();
}

// TOGGLE ON AND OFF SMALL ICONS FOR BUTTONS IN HEADER, TOGGLE RED HEART HOVER FOR THE HEADER FAVOURITES BUTTON BASED ON THE WIDTH OF THE CURRENT SCREEN ..................................................................................................................>

const headerButtonsAdjustmentsOnResize = (disableHeaderFavouritesHover, toggleHeaderFavouritesHover, adjustHeaderBtnsSizesAndIconColor)=>{
    disableHeaderFavouritesHover(); // We disable javaScript hover becuase everytime the window gets resized the same event listeners get called again. In other words, we prevent "mouseenter" and "mouseleave" event listeners from being called twice.
    toggleHeaderFavouritesHover(); // adjust hover for the favourite btn based on the screen width 
    adjustHeaderBtnsSizesAndIconColor();
}

//FAVOURITES FUCNTIONS---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// FAVOURITES LOCAL DECLARATIONS..............................................................................................................................................................................................>
const favouritesSection = document.getElementById("favourites-section");

// toggle favourites section + hover for the favourites button on and off.....................................................................................................................................................>

const toggleFavouritesIsClickedTrue = () => { // toggle favouritesIsClicked TRUE and terminate eventListener "animationend" associated with it.
    headerButtonsIsClickedStatus.favouritesIsClicked =true;
    favouritesSection.removeEventListener("animationend", toggleFavouritesIsClickedTrue);
}

const toggleFavouritesIsClickedFalse = ()=>{
    headerButtonsIsClickedStatus.favouritesIsClicked =false;
    adjustHeaderBtnsSizesAndIconColor();
    toggleHeaderFavouritesHover();
    favouritesSection.removeEventListener("animationend",toggleFavouritesIsClickedFalse);
}



const ActivateFavouritesSection = (disableHeaderFavouritesHover, toggleHeaderFavourtiesBtnOn, toggleFavouritesIsClickedTrue, toggleFavouritesIsClickedFalse)=>{
    if(headerButtonsIsClickedStatus.favouritesIsClicked ==false){
        disableHeaderFavouritesHover(); // We disable the hover eventlistners to make sure the favourites button stays highlighted as long as the favourites section is active
        toggleHeaderFavourtiesBtnOn(); // To make sure the favourites button stays highlighted after the second time it gets clicked, even if the mouse didin't move to reactivate the eventListeners of "mouseenter".
        favouritesSection.classList.remove("favourites-animation-reverse");
        favouritesSection.classList.add("favourites-animation-forward");
        favouritesSection.addEventListener("animationend", toggleFavouritesIsClickedTrue);
    }else{
        favouritesSection.classList.remove("favourites-animation-forward");
        favouritesSection.classList.add("favourites-animation-reverse");
        favouritesSection.addEventListener("animationend", toggleFavouritesIsClickedFalse);
    }
}

//DARKMODE FUNCTIONS------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>

// TOGGLE DARK TEHEME ON AND OFF FOR BOTH PAGES..............................................................................................................................................................................................> 

const toggleDarkMode = ()=>{
    body.classList.toggle("dark-mode");
}

const adjustModesButtonsTitles = ()=>{ //This function adjusts the title of the header buttons for light mode and dark mode. From swapping bewteen "light mode" and "dark mode" words as needed to hold favourites button from resetting.
    if(windowWidthStatus.currentScreenSize>= 519 && headerButtonsIsClickedStatus.darkModeButtonIsClicked==true){
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon> Light Mode`;
        if(headerButtonsIsClickedStatus.favouritesIsClicked == true){ //to prevent favourites button from resetting (changing color) when toggling dark mode on and off
            modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon heart-icon-red-color" name="heart"></ion-icon> Favourites`;
        }
    }else if(windowWidthStatus.currentScreenSize>= 519 && headerButtonsIsClickedStatus.darkModeButtonIsClicked==false){ //swap between "light mode" and "dark mode" words as needed, when the dark mode is on or off
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon> Dark Mode`;
    }else{// for small screens 
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon>`;
        if(headerButtonsIsClickedStatus.favouritesIsClicked == true){ //to prevent favourites button from resetting (changing color) when toggling dark mode on and off
            modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon heart-icon-red-color" name="heart"></ion-icon>`;
        }
    }
}

const DarkModeAdjustments =(toggleDarkMode, adjustModesButtonsTitles) =>{
    headerButtonsIsClickedStatus.darkModeButtonIsClicked = !headerButtonsIsClickedStatus.darkModeButtonIsClicked;
    toggleDarkMode();
    adjustModesButtonsTitles();
}


// SEARCH BAR FUCNTIONS-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// SEARCH BAR LOCAL DECLARATIONS.................................................................................................................>
const searchBar = document.getElementById("search-bar-section"); 
let searchField = document.getElementById("SearchField");
let searchSortSelect = document.getElementById("search-sort-select");
let searchFilterSelect = document.getElementById("search-filter-select");
let searchTimeout;

// SEARCH FUCNTION FOR WEBTOPICS ---------------------------------------------------------------------------------------------------->
    

//ANIMATION FUNCTIONS------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

//ANIMATIONS AND FUNCTIONS RELATED TO SWITCHING TO DETAILS PAGE..........................................................................................................................>

let updateURLForDetailsPage = ()=>{
    const secondPageURL = "/Assets/pages/details.html";
    const pageURLTitle = "Details Page";
    const updatedURL = new URL(secondPageURL, window.location.href).href 
    history.pushState({},pageURLTitle,updatedURL);
}


const disableWebTopicsPage = ()=>{
    detailsPageIsActiveStatus.detailsPageIsActive = true;
    updateURLForDetailsPage();
    webTopicsPage.removeEventListener("transitionend", disableWebTopicsPage);
}

const adjustPageTitle = ()=>{
    if(windowWidthStatus.currentScreenSize<= 767 && detailsPageIsActiveStatus.detailsPageIsActive == true){
        pageTitle.style.fontSize="0.94rem";
    }else{
        pageTitle.style.fontSize=`1.5rem`;
        pageTitle.style.fontWeight=`700`;
    }
}

const mainToDetailsAnimation = (e,adjustPageTitle, disableWebTopicsPage)=>{
    if(e.target.closest(".web-topic-card")){
        e.preventDefault();//Disabling the anchors to prevent anchors from editing the URL.
        webTopicsPage.style.marginLeft = `-100%`;
        webTopicsPage.style.height= `${detailsPage.clientHeight}px`;
        webTopicsPage.style.opacity = "0";
        searchBar.style.marginLeft = `-100%`;
        searchBar.style.opacity = "0";
        detailsPage.style.marginRight= `0`;
        detailsPage.style.opacity=`1`;
        adjustPageTitle();
        webTopicsPage.addEventListener("transitionend", disableWebTopicsPage);
    }else{
        return;
    }
}

//ANIMATIONS AND FUNCTIONS RELATED TO SWITCH TO THE MAIN PAGE....................................................................................................................>

let updateURLForMainPage = ()=>{//changes the URL to point to the main page insted of the details page
    const secondPageURL = "/index.html";
    const pageURLTitle = "main Page";
    const updatedURL = new URL(secondPageURL, window.location.href).href
    history.pushState({},pageURLTitle,updatedURL);
}

const activateMainPageStyle = ()=>{
    detailsPageIsActiveStatus.detailsPageIsActive = false;
    updateURLForMainPage();
    detailsPage.removeEventListener("transitionend",activateMainPageStyle);
}

const detailsToMainAnimation = (activateMainPageStyle)=>{
    if(detailsPageIsActiveStatus.detailsPageIsActive == true){
        webTopicsPage.style.height=`100%`;
        detailsPage.style.marginRight=`-100%`;
        detailsPage.style.opacity=`0`;
        detailsPage.addEventListener("transitionend",activateMainPageStyle);
        pageTitle.style.fontSize=`0.99rem`;
        pageTitle.style.fontWeight=`600`;
        webTopicsPage.style.marginLeft = `0`;
        webTopicsPage.style.opacity = "1";
        searchBar.style.marginLeft = `0`;
        searchBar.style.opacity = "1";
    }

}

//  HANDELING POPSTAE.................................................................................................................................................>

let handlePopstate = ()=>{
    const currentURL = window.location.pathname;
    console.log(currentURL);
    if(currentURL === "/Assets/pages/details.html"){
        window.location.href=currentURL;
    }else{
        window.location.href ="/index.html";

    }
}


//WEB TOPICS SECTION FUCNTIONS--------------------------------------------------------------------------------------------------------------------------------------------------------------------------->


//WEB TOPICS LOCAL DECLARATIONS...................................................................................................>

let numberOfTopics = document.getElementById("number-of-topics-found");
const webTopicsPage = document.getElementById("web-topics-page"); 
const webTopicBox = document.getElementById("web-topics"); 


//DETAILS PAGE FUNCTIONS-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

//DETAILS PAGE LOCAL DECLARATION...............................................................................................................>

const detailsPage = document.getElementById("details-page"); // to animation.js
const courseDetailsBoxContainer = document.getElementById("course-details-box-container");
const detailsPageCardContianer = document.getElementById("details-page-card-contianer");
let detailsPageIsActiveStatus = {
    detailsPageIsActive : false
} 

// ON PAGE LOAD FUNCTIONS......................................................................................................................>

const adjustDetailsPageCardPosition = ()=>{//To adjust details page card position on both small screen and large screens.
    if(windowWidthStatus.currentScreenSize<= 799){ 
        detailsPage.appendChild(detailsPageCardContianer);// THIS PUTS THE DETAILS' PAGE CARD AS THE LAST CHILD OF THE DETAILS PAGE.
    }else{
        courseDetailsBoxContainer.appendChild(detailsPageCardContianer);// THIS APPLIES ON LARGE SCREENS, WHICH PUTS DETAILS PAGE CARD BACK TO ITS ORIGINAL PLACE. 
    }
}

const deatilsPageCardAdjustmentOnResize = (adjustDetailsPageCardPosition)=>{
    windowWidthStatus.currentScreenSize= window.innerWidth;
    adjustDetailsPageCardPosition();
}

// API FUNCTIIONS------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

// ON PAGE LOAD FUNCTIONS......................................................................................................................>

const setCategories = (webTopicsData,processedData)=>{
    searchFilterSelect.innerHTML="";
    let extractedData = webTopicsData ?  webTopicsData : processedData
    let extractedCategory = extractedData.map((webTopic) => webTopic.category);
    let filteredCategory = new Set(extractedCategory);
    for(let category of filteredCategory){
        searchFilterSelect.innerHTML+= `
        <option value="${category}">${category}</option>
        `
    }
}

const loopOverExtractedAPI = (webTopicsData, processedData,setCategories)=>{
    for(let webTopic of webTopicsData ?  webTopicsData : processedData){
        webTopicBox.innerHTML += `
    <a href="#" class="web-topic-card" tabindex="0">
        <div class="card-thumbnail">
            <img class="main-page-card-thumbnail-img" src="Assets/images/topics-thumbnails/${webTopic.image}" alt="${webTopic.category}" >
        </div>
        <div class="card-custom-container">
            <div class="card-details">
                <h4>${webTopic.category}</h4>
                <h5>${webTopic.topic}</h5>
                <div class="star-rating-box">
                    <div class="star-border">
                        <div class="second-level-star">
                        </div>
                    </div>
                    <div class="star-border">
                        <div class="second-level-star">
                        </div>
                    </div>
                    <div class="star-border">
                        <div class="second-level-star">
                        </div>
                    </div>
                    <div class="star-border">
                        <div class="second-level-star">
                        </div>
                    </div>
                    <div class="star-border">
                        <div class="second-level-star">
                            <div class="star-color-fill"></div>
                        </div>
                    </div>
                </div>
                <p>Author: ${webTopic.name}</p>
            </div>
        </div>
    </a>
        `;
    }
    numberOfTopics.innerHTML=`"${webTopicsData.length}" Web Topics Found` ; 
    setCategories(webTopicsData,processedData);
}
const printData = (webTopicsData, processedData, loopOverExtractedAPI)=>{
    loopOverExtractedAPI(webTopicsData, processedData,setCategories);
}


async function fetchData(printData, loopOverExtractedAPI){
    try{
        let data = await fetch('https://tap-web-1.herokuapp.com/topics/list');
        if (!data.ok) {
            throw new Error('Error fetching data');
        }else{
            let webTopicsData =  await data.json();
            printData(webTopicsData,null,loopOverExtractedAPI);
        }
    } catch (error){
        alert(`An error occurred while fetching data: ${error.message}`);
    }
}



// SEARCH THE API.....................................................................................................................................................>

const clearWebTopics = (webTopicBox)=>{
    webTopicBox.innerHTML ="";
}

const SortByTopicTitle = (webTopicsData,printData) =>{
    let processedData = webTopicsData.sort((a,b)=>{
        const topicA = a.topic.toLowerCase();
        const topicB = b.topic.toLowerCase();
        if(topicA > topicB){
            return 1
        }
        if(topicA < topicB){
            return -1
        }
        return 0
    })
    printData(processedData);
}

const sortByAuthorName = (webTopicsData,printData)=>{
    let processedData = webTopicsData.sort((a,b)=>{
        const topicA = a.name.toLowerCase();
        const topicB = b.name.toLowerCase();
        if(topicA > topicB){
            return 1
        }
        if(topicA < topicB){
            return -1
        }
        return 0
    })
    printData(processedData);
}

const checkSearchModes = (webTopicsData,clearWebTopics,printData)=>{
    clearWebTopics();
    if(e.target.value == "Default"){
        printData(webTopicsData);
    }else if (e.target.value == "Topic Title"){
        SortByTopicTitle(webTopicsData,printData);
    }else{
        sortByAuthorName(webTopicsData,printData);
    }
}

// const searchFirst = ()=>{

// }

// const filterByCategory = (webTopicsData)=>{
//     let FilteredData = webTopicsData.filter(webTopic => searchFilterSelect.target.value== webTopic.category)
// }

// const filterfirst = (webTopicsData,printData)=>{
//     clearWebTopics();
//     if(searchFilterSelect.target.value == "Default"){
//         printData(webTopicsData);
//     }else{
        
//     }
// }   

// const sortSearchedData = ()=>{
//     if(e.target.value == "Default"){
//         printData(processedData);
//     }else if (e.target.value == "Topic Title"){
//         SortByTopicTitle();
//     }else{
//         sortByAuthorName();
//     }
// }

async function searchAPI (e,printData, clearWebTopics, webTopicBox, loopOverExtractedAPI){
    let searchData = (webTopicsData,searchTimeout)=>{
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            clearWebTopics(webTopicBox);
            let processedData = webTopicsData.filter( webTopic => webTopic.topic.toLowerCase().includes(e.target.value.toLowerCase()))
            printData(processedData,null, loopOverExtractedAPI);
        }, 300);
    
    }
    
    try{
        let data = await fetch('https://tap-web-1.herokuapp.com/topics/list');
        if (!data.ok) {
            throw new Error('Error fetching data');
        }else{
            let webTopicsData =  await data.json();
            e.target.value == "" ? printData(webTopicsData,null,loopOverExtractedAPI) : searchData(webTopicsData);
        }

    } catch (error){
        alert(`An error occurred while fetching data: ${error.message}`);
    }
}

    
    










