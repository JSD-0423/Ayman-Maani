const modesButtons = document.querySelectorAll(".modes-buttons");
const currentScreenSize= window.visualViewport.width;
const lastTopic = document.getElementById("last-topic");
console.log(lastTopic)
console.log(window.visualViewport.height)
// const currentScreenSize= window.innerWidth;

// toggle small icons for favorites and dark mode buttons in small screen///////////////////////////////////////////////////////////////
if(currentScreenSize<= 767){
    modesButtons[0].innerHTML=`<span><ion-icon class="moon mode-icon" name="moon-outline"></ion-icon></span>`;
    modesButtons[1].innerHTML=`<span><ion-icon class="heart mode-icon" name="heart-outline"></ion-icon></span>`;
    lastTopic.classList.add("d-none");
}else if(currentScreenSize>=768){
    modesButtons[0].innerHTML=`<span><ion-icon class="moon mode-icon" name="moon-outline"></ion-icon></span> Dark Mode`;
    modesButtons[1].innerHTML=`<span><ion-icon class="heart mode-icon" name="heart-outline"></ion-icon></span> Favourites`;
}

modesButtons[1].addEventListener("mouseover", ()=>{
    modesButtons[1].innerHTML=`<span><ion-icon class="heart mode-icon" name="heart"></ion-icon></span> Favourites`
})

// toggle empty div to rectify the position of web topics in small and big screens, as well as stopping it from affecting the footer distance from main section
if(currentScreenSize>767 && currentScreenSize<1449){
    lastTopic.classList.add("d-none");
}else if (currentScreenSize>=1449){
    lastTopic.classList.remove("d-none");
}


console.log(currentScreenSize);