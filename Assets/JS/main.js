// GLOBAL VARIABLES DECLARATIONS AND ASSIGNMENTS -------------------------------------------------------------------------------------------------------------------->
const mainPageLink = window.location.origin;
console.log(mainPageLink);
let currentScreenSize= window.innerWidth;
// let currentScreenSize= window.visualViewport.width;
const body = document.body;
const modesButtons = document.querySelectorAll(".modes-buttons");
const darkModeButton = document.getElementById("dark-mode-button");
const headerHeartButton = document.getElementById("header-heart-button");
const pageTitle = document.getElementById("page-title");
const detailsPage = document.getElementById("details-page");
const detailsPageCardContianer = document.getElementById("details-page-card-contianer");
const courseDetailsBoxContainer = document.getElementById("course-details-box-container");

let favouritesIsClicked = false;
let detailsPageIsActive = false;
let darkModeButtonIsClicked = false;

// ON PAGE LOAD FUNCTIONS-------------------------------------------------------------------------------------------------------------------------------------------->

const adjustHeaderbtnsSizes = ()=>{ // checks window size to determine the appropriate size of header buttons both on page load and every time the window gets resized. 
    if(currentScreenSize>= 519){
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon> Dark Mode`;
        modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon" name="heart-outline"></ion-icon> Favourites`;
    }else{
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon>`;
        modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon" name="heart-outline"></ion-icon>`;
    }
}

adjustHeaderbtnsSizes();

// Function expressions that toggle red heart on and off for the favourites button in header. They are for Event Listneres inside the "toggleHeaderRedHeart" expression function//////
const removeRedheartLargeScreens = ()=>{
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

const toggleHeaderRedHeart = ()=>{// Toggles hover for the favourites button that adds red heart when necessary for both small icons and large ones. 
    if(currentScreenSize >= 519){
        modesButtons[1].addEventListener("mouseenter", addRedHeartLargeScreens);
        modesButtons[1].addEventListener("mouseleave", removeRedheartLargeScreens);
    }else{

        modesButtons[1].addEventListener("mouseenter", addRedHeartSmallScreens);
        modesButtons[1].addEventListener("mouseleave", removeRedheartSmallScreens);
    }
}

toggleHeaderRedHeart();


const adjustDetailsPageCardPosition = ()=>{//To adjust details page card position on both small screen and large screens.
    if(currentScreenSize<= 799){ 
        detailsPage.appendChild(detailsPageCardContianer);// THIS PUTS THE DETAILS' PAGE CARD AS THE LAST CHILD OF THE DETAILS PAGE.
    }else{
        courseDetailsBoxContainer.appendChild(detailsPageCardContianer);// THIS APPLIES ON LARGE SCREENS, WHICH PUTS DETAILS PAGE CARD BACK TO ITS ORIGINAL PLACE. 
    }
}

adjustDetailsPageCardPosition();


console.log(window.visualViewport.width)


// TOGGLE ON AND OFF SMALL ICONS FOR BUTTONS IN HEADER, TOGGLE RED HEART HOVER FOR THE HEADER FAVOURITES BUTTON AND ADJUSTS DETAILS' PAGE CARD BASED ON THE WIDTH OF THE CURRENT SCREEN ----------------------------------------------------------------------------------------------------->

const disableHeaderBtnsHover = ()=>{// We disable javaScript hover becuase everytime the window gets resized the same event listeners get called again. In other words, we prevent "mouseenter" and "mouseleave" event listeners from being called twice.
    modesButtons[1].removeEventListener("mouseenter", addRedHeartLargeScreens);
    modesButtons[1].removeEventListener("mouseleave", removeRedheartLargeScreens);
    modesButtons[1].removeEventListener("mouseenter", addRedHeartSmallScreens);
    modesButtons[1].removeEventListener("mouseleave", removeRedheartSmallScreens);
}



const elementsAdjustmentsOnResize = ()=>{
    disableHeaderBtnsHover();
    currentScreenSize= window.innerWidth;
    toggleHeaderRedHeart();
    adjustHeaderbtnsSizes();
    adjustDetailsPageCardPosition();
}

window.addEventListener("resize",elementsAdjustmentsOnResize);

// TOGGLE DARK TEHEME ON AND OFF FOR BOTH PAGES---------------------------------------------------------------------------------------------------------------------------------------------> 

// Main page elemnts-----------------------------------------------------------------------------------------------------------------------------------------------------------
const searchBarIcon = document.getElementById("search-icon");
const searchSortLabel = document.getElementById("search-sort-label");
const searchFilterLabel = document.getElementById("search-filter-label");
const searchSortSelect = document.getElementById("search-sort-select");
const searchFilterSelect = document.getElementById("search-filter-select");
const mainPageCardThumbnailImg = document.getElementsByClassName("main-page-card-thumbnail-img"); //this creates an HTML collection of all the thumbnail images in the main page.
const mainPageCardThumbnailImgArray = [...mainPageCardThumbnailImg]; // This coverts the HTML collection of all the thumbnail images in the main page to an array of them.
const myCustomStyleSheet= document.styleSheets[2]; //To access my custom style sheet file (custom.css).
const myCustomStyleSheetRules = myCustomStyleSheet.cssRules;// To have access to all the styles written in that file. 
// Details' page elemnts-----------------------------------------------------------------------------------------------------------------------------------------------------------
const courseDetailsBox = document.getElementById("course-details-box");
const courseDetailsH5 = document.querySelector(".course-details h5");
const courseDetailsPara = document.getElementById("course-details-para");
const detailsPageStarColorFill =document.getElementById("details-page-star-color-fill");
const detailsPageCard = document.getElementById("details-page-card");
const detailsPageCustomCardH4= document.querySelector(".details-page-card-custom-container h4");
const detailsPageCustomCardH4Span= document.querySelector(".details-page-card-custom-container h4 span");
const addToFavouritesBox =document.getElementById("add-to-favourites-box");
const courseSubTopics = document.getElementById("course-sub-topics");


const toggleDarkMode = ()=>{ // This function makes the necessary color and background-color changes for the dark mode in the main page.
    body.classList.toggle("dark-mode");
    darkModeButton.style.color = "var(--body-text)";
    for(let rule of myCustomStyleSheetRules){ //We iterate over the CSS rules from the (custom.css) file in order to look for hover style so we can modify it.
        if(rule.selectorText ==='#dark-mode-button:hover'){
            rule.style.backgroundColor="var(--body-text)";
            break;
        }
    }
    headerHeartButton.style.color="var(--body-text)";
    searchBarIcon.style.color = "var(--body-text)";
    searchSortLabel.style.backgroundColor="var(--bg_default)";
    searchSortLabel.style.color="var(--body-text)";
    searchFilterLabel.style.backgroundColor="var(--bg_default)";
    searchFilterLabel.style.color="var(--body-text)";
    searchSortSelect.style.backgroundColor="var(--bg_default)";
    searchSortSelect.style.color="var(--body-text)";
    searchFilterSelect.style.backgroundColor="var(--bg_default)";
    searchFilterSelect.style.color="var(--body-text)";
    mainPageCardThumbnailImgArray.forEach(img => img.style.backgroundColor="var(--body-text)");
    // Details page elemnts----------------------------------------------------------------------
    courseDetailsBox.style.backgroundColor="var(--bg_body)";
    courseDetailsH5.style.color="var(--body-text)";
    courseDetailsPara.style.color="var(--body-text)";
    detailsPageStarColorFill.style.backgroundColor="var(--bg_body)";
    detailsPageCard.style.backgroundColor ="var(--body-text)";
    detailsPageCustomCardH4.style.color="var(--lines-color)";
    detailsPageCustomCardH4Span.style.color="var(--lines-color)";
    addToFavouritesBox.style.borderColor="#DDDDDD";
    detailsPageSubTopicsContainer.style.backgroundColor="var(--bg_default)";
    if(darkModeButtonIsClicked==true && detailsPageIsActive==true){
        body.style.backgroundColor="var(--bg_default)";
    }

}

const disableDarkMode = ()=>{
    body.classList.toggle("dark-mode");
    darkModeButton.style.removeProperty("color");
    headerHeartButton.style.removeProperty("color");
    searchBarIcon.style.removeProperty("color"); 
    searchSortLabel.style.removeProperty("background-color"); 
    searchSortLabel.style.removeProperty("color"); 
    searchFilterLabel.style.removeProperty("background-color"); 
    searchFilterLabel.style.removeProperty("color"); 
    searchSortSelect.style.removeProperty("background-color"); 
    searchSortSelect.style.removeProperty("color"); 
    searchFilterSelect.style.removeProperty("background-color"); 
    searchFilterSelect.style.removeProperty("color");
    mainPageCardThumbnailImgArray.forEach(img => img.style.removeProperty("background-color"));
    // details page elemnts----------------------------------------------------------------------
    courseDetailsBox.style.removeProperty("background-color");
    courseDetailsH5.style.removeProperty("color");
    courseDetailsPara.style.removeProperty("color");
    detailsPageStarColorFill.style.removeProperty("background-color");
    detailsPageCard.style.removeProperty("background-color");
    detailsPageCustomCardH4.style.removeProperty("color");
    detailsPageCustomCardH4Span.style.removeProperty("color");
    addToFavouritesBox.style.removeProperty("border-color");
    detailsPageSubTopicsContainer.style.removeProperty("background-color");
    body.style.removeProperty("background-color");
}

const adjustModesButtonsTitles = ()=>{ //This function adjusts the title of the header buttons for light mode and dark mode. From swapping bewteen "light mode" and "dark mode" words as needed to hold favourites button from resetting.
    if(currentScreenSize>= 519 && darkModeButtonIsClicked==true){
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon> Light Mode`;
        if(favouritesIsClicked == true){ //to prevent favourites button from resetting (changing color) when toggling dark mode on and off
            modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon heart-icon-red-color" name="heart"></ion-icon> Favourites`;
        }
    }else if(currentScreenSize>= 519 && darkModeButtonIsClicked==false){ //swap between "light mode" and "dark mode" words as needed, when the dark mode is on or off
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon> Dark Mode`;
    }else{// for small screens 
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon>`;
        if(favouritesIsClicked == true){ //to prevent favourites button from resetting (changing color) when toggling dark mode on and off
            modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon heart-icon-red-color" name="heart"></ion-icon>`;
        }
    }
}


darkModeButton.addEventListener("click", ()=>{ // This toggles the dark mode for both pages 
    darkModeButtonIsClicked = (darkModeButtonIsClicked == true)? false : true;
    if(darkModeButtonIsClicked==true && detailsPageIsActive==false){
        toggleDarkMode();
    }else if(darkModeButtonIsClicked==true && detailsPageIsActive==true){
        toggleDarkMode();
    }else if(darkModeButtonIsClicked==false && detailsPageIsActive==true){
        disableDarkMode();
    }else{
        disableDarkMode();
    }
    adjustModesButtonsTitles();
})

// toggle favourites section + hover for the favourites button on and off//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const favouritesSection = document.getElementById("favourites-section");
const toggleFavouritesIsClickedTrue = () => { //toggle favouritesIsClicked TRUE and terminate eventListener "animationend" associated with it.
    favouritesIsClicked =true;
    favouritesSection.removeEventListener("animationend", toggleFavouritesIsClickedTrue);
}

const toggleFavouritesIsClickedFalse = ()=>{
    favouritesIsClicked =false;
    toggleHeaderRedHeart();
    favouritesSection.removeEventListener("animationend",toggleFavouritesIsClickedFalse);
}

modesButtons[1].addEventListener("click", ()=>{
    if(favouritesIsClicked !=true){
        disableHeaderBtnsHover(); // to make sure the favourites button stays highlighted as long as the favourites section is active
        favouritesSection.classList.remove("favourites-animation-reverse");
        favouritesSection.classList.add("favourites-animation-forward");
        favouritesSection.addEventListener("animationend", toggleFavouritesIsClickedTrue);
    }else{
        favouritesSection.classList.remove("favourites-animation-forward");
        favouritesSection.classList.add("favourites-animation-reverse");
        favouritesSection.addEventListener("animationend", toggleFavouritesIsClickedFalse);
    }
})

// CONTROL ANIMATION FOR SWITCHING BACK AND FORTH BETWEEN DETAILS PAGE AND THE MAIN PAGE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

const webTopicBox = document.getElementById("web-topics");
const webTopicCards = document.querySelectorAll(".web-topic-card");
const webTopicsPage = document.getElementById("web-topics-page");
const searchBar = document.getElementById("search-bar-section");
const detailsPageSubTopicsContainer = document.getElementById("details-page-sub-topics-container");


let updateURLForDetailsPage = ()=>{
    const secondPageURL = "Assets/pages/details.html";
    const pageURLTitle = "Details Page";
    const updatedURL = new URL(secondPageURL, window.location.href).href 
    history.pushState({},pageURLTitle,updatedURL);
    window.addEventListener("popstate", handlePopstate);
}

let handlePopstate = ()=>{
    window.location.href="../../index.html";
    location.reload();
}

const disableWebTopicsPage = ()=>{
    detailsPageIsActive = true;
    updateURLForDetailsPage();
    webTopicsPage.removeEventListener("transitionend", disableWebTopicsPage);
}


webTopicBox.addEventListener("click",(e)=>{//This controls the animation to switch to the details page.
    if(e.target.closest(".web-topic-card")){
        e.preventDefault();//To prevent anchors from editing the URL
        webTopicsPage.style.marginLeft = `-100%`;
        webTopicsPage.style.height= `${detailsPage.clientHeight}px`;
        webTopicsPage.style.opacity = "0";
        searchBar.style.marginLeft = `-100%`;
        searchBar.style.opacity = "0";
        detailsPage.style.marginRight= `0`;
        detailsPage.style.opacity=`1`;
        if(currentScreenSize<= 767 && detailsPageIsActive == true){
            pageTitle.style.fontSize="0.94rem";
        }else{
            pageTitle.style.fontSize=`1.5rem`;
            pageTitle.style.fontWeight=`700`;
        }
        webTopicsPage.addEventListener("transitionend", disableWebTopicsPage);
    }else{
        return;
    }
})



// window.addEventListener("popstate", handlePopstate);

let updateURLForMainPage = ()=>{
    const secondPageURL = "../../index.html";
    const pageURLTitle = "main Page";
    const updatedURL = new URL(secondPageURL, window.location.href).href //window.location.origin + "/" + secondPageURL;
    history.pushState({},pageURLTitle,updatedURL);
}



const activateMainPageStyle = ()=>{
    detailsPageIsActive = false;
    updateURLForMainPage();
    detailsPage.removeEventListener("transitionend",activateMainPageStyle);
}

pageTitle.addEventListener("click",()=>{//this is for switching back to the main page
    if(detailsPageIsActive == true){
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
})

