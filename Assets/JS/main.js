// GLOBAL VARIABLES DECLARATIONS AND ASSIGNMENTS -------------------------------------------------------------------------------------------------------------------->

// const currentScreenSize= window.innerWidth;
const currentScreenSize= window.visualViewport.width;
const modesButtons = document.querySelectorAll(".modes-buttons");
const pageTitle = document.getElementById("page-title");
let favouritesIsClicked = false;
let detailsPageIsActive = false;

// function expressions that toggle red heart on and off for the favourite button in header. They are for Event Listneres/////////////////////////
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

console.log(window.visualViewport.width)


// TOGGLE ON AND OFF SMALL ICONS FOR FAVORITES BUTTONS IN HEADER ----------------------------------------------------------------------------------------------------->

if(currentScreenSize>=768){
    modesButtons[1].addEventListener("mouseover",addRedHeartLargeScreens);
    modesButtons[1].addEventListener("mouseleave", removeRedheartLargeScreens);
}else{
    modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon>`;
    modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon" name="heart-outline"></ion-icon>`;
    modesButtons[1].addEventListener("mouseover", addRedHeartSmallScreens);
    modesButtons[1].addEventListener("mouseleave", removeRedheartSmallScreens);
}

// TOGGLE DARK TEHEME ON AND OFF---------------------------------------------------------------------------------------------------------------------------------------------> 

const checkboxInput = document.getElementById("checkbox-input");
const themeLinkMainPage = document.getElementById("theme-link-main-page");
const themeLinkDetailsPage = document.getElementById("theme-link-details-page");
const adjustModesButtons = ()=>{ //This function adjust modes buttons for light mode and dark mode. From swapping bewteen "light mode" and "dark mode" words as needed to hold favourites button from resetting.
    if(currentScreenSize>= 768 && checkboxInput.checked==true){
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon> Light Mode`;
        if(favouritesIsClicked == true){ //to prevent favourite button from resetting (changing color) when toggling dark mode on and off
            modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon heart-icon-red-color" name="heart"></ion-icon> Favourites`;
        }
    }else if(currentScreenSize>= 768 && checkboxInput.checked==false){ //swap between "light mode" and "dark mode" words as needed, when the dark mode on or off
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon> Dark Mode`;
    }else{// for small screens 
        modesButtons[0].innerHTML=`<ion-icon id="moon" class="moon mode-icon" name="moon-outline"></ion-icon>`;
        if(favouritesIsClicked == true){ //to prevent favourite button from resetting (changing color) when toggling dark mode on and off
            modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon heart-icon-red-color" name="heart"></ion-icon>`;
        }
    }
}

checkboxInput.addEventListener("change", ()=>{
    if(checkboxInput.checked==true && detailsPageIsActive==false){
        themeLinkMainPage.setAttribute("href", "Assets/CSS/dark-theme-main-page.css");
    }else if(checkboxInput.checked==true && detailsPageIsActive==true){
        themeLinkDetailsPage.setAttribute("href", "Assets/CSS/dark-theme-details-page.css");
        themeLinkMainPage.setAttribute("href", ""); //disable main page styles so it doesn't mix up with the dark theme style
    }else if(checkboxInput.checked==false && detailsPageIsActive==true){
        themeLinkDetailsPage.setAttribute("href", "Assets/CSS/details-page.css");
        themeLinkMainPage.setAttribute("href", "Assets/CSS/custom.css");
    }else{
        themeLinkMainPage.setAttribute("href", "Assets/CSS/custom.css");
    }
    adjustModesButtons();
})

// toggle favourites section + hover for the favourite button on and off//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const favouritesSection = document.getElementById("favourites-section");
const toggleFavouritesIsClickedTrue = () => { //toggle favouritesIsClicked TRUE and terminate eventListener "animationend" down below
    favouritesIsClicked =true;
    modesButtons[1].removeEventListener("mouseleave", removeRedheartLargeScreens);
}

modesButtons[1].addEventListener("click", ()=>{
    if(favouritesIsClicked !=true){
        if(currentScreenSize>= 768){
            modesButtons[1].removeEventListener("mouseover", addRedHeartLargeScreens);
            modesButtons[1].removeEventListener("mouseleave", removeRedheartLargeScreens);
            modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon heart-icon-red-color" name="heart"></ion-icon> Favourites`;
        }else{
            modesButtons[1].removeEventListener("mouseover", addRedHeartLargeScreens);
            modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon heart-icon-red-color" name="heart"></ion-icon>`;
        }
        favouritesSection.classList.remove("favourites-animation-reverse");
        favouritesSection.classList.add("favourites-animation-forward");
        favouritesSection.addEventListener("animationend", toggleFavouritesIsClickedTrue);
    }else{
        favouritesSection.classList.remove("favourites-animation-forward");
        favouritesSection.classList.add("favourites-animation-reverse");
        favouritesSection.addEventListener("animationend", ()=>{
            favouritesIsClicked =false;
            if(currentScreenSize>= 768){
                modesButtons[1].addEventListener("mouseover",addRedHeartLargeScreens);
                modesButtons[1].addEventListener("mouseleave", removeRedheartLargeScreens);
            }else{
                modesButtons[1].addEventListener("mouseover", addRedHeartSmallScreens);
                modesButtons[1].addEventListener("mouseleave", removeRedheartSmallScreens);
            }
        })
        favouritesSection.removeEventListener("animationend",toggleFavouritesIsClickedTrue);
        if(currentScreenSize>= 768){
            modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon" name="heart-outline"></ion-icon> Favourites`;
        }else{
            modesButtons[1].innerHTML=`<ion-icon id="heart" class="heart mode-icon" name="heart-outline"></ion-icon>`;
        }
    }
})

// CONTROL ANIMATION FOR SWITCHING BACK AND FORTH BETWEEN DETAILS PAGE AND THE MAIN PAGE-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

const webTopicBox = document.getElementById("web-topics");
const webTopicCards = document.querySelectorAll(".web-topic-card");
const webTopicsPage = document.getElementById("web-topics-page");
const detailsPage = document.getElementById("details-page");
const detailsPageCardContianer = document.getElementById("details-page-card-contianer");
const detailsPageCard = document.getElementById("details-page-card");
const searchBar = document.getElementById("search-bar-section");

if(currentScreenSize<= 767){ //This is to append (course card) in details page once small screens are active.
    detailsPage.appendChild(detailsPageCardContianer);
}

const disableWebTopicsPage = ()=>{
    if(checkboxInput.checked==true){// This ensures that details page is also on dark mode if dark mode was already toggled before switching to the details page.
        themeLinkDetailsPage.setAttribute("href", "Assets/CSS/dark-theme-details-page.css");
        themeLinkMainPage.setAttribute("href", ""); //disable main page styles so it doesn't overlap with the dark theme style.
    }
    webTopicsPage.removeEventListener("transitionend", disableWebTopicsPage);
}

const activateDetailsPage = ()=>{
    detailsPageIsActive = true;
    themeLinkDetailsPage.setAttribute("href", "Assets/CSS/details-page.css");
}

webTopicBox.addEventListener("click",(e)=>{//this is for switching to details page.
    if(e.target.closest(".web-topic-card")){
        activateDetailsPage();
        webTopicsPage.style.marginLeft = `-100%`;
        webTopicsPage.style.height= `${detailsPage.clientHeight}px`;
        webTopicsPage.style.opacity = "0";
        searchBar.style.marginLeft = `-100%`;
        searchBar.style.opacity = "0";
        detailsPage.style.marginRight= `0`;
        detailsPage.style.opacity=`1`;
        if(currentScreenSize<= 767 && detailsPageIsActive == true){
            pageTitle.style.fontSize="0.94rem";
        }else
        {
            pageTitle.style.fontSize=`1.5rem`;
            pageTitle.style.fontWeight=`700`;
        }
        webTopicsPage.addEventListener("transitionend", disableWebTopicsPage);
    }else{
        return;
    }
})

const activateMainPageStyle = ()=>{
    detailsPageIsActive = false;
    if(checkboxInput.checked==true){
        themeLinkMainPage.setAttribute("href", "Assets/CSS/dark-theme-main-page.css");
        themeLinkDetailsPage.setAttribute("href", "Assets/CSS/dark-theme-details-page.css");
    }else{
        themeLinkMainPage.setAttribute("href", "Assets/CSS/custom.css");
    }
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
    }else{
        location.reload();
    }
})
