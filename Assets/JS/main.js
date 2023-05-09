const modesButtons = document.querySelectorAll(".modes-buttons");
const currentScreenSize= window.visualViewport.width;
const lastTopic = document.getElementById("last-topic");
console.log(lastTopic)
// const currentScreenSize= window.innerWidth;

if(currentScreenSize<= 767){
    modesButtons[0].innerHTML=`<span><ion-icon class="moon mode-icon" name="moon-outline"></ion-icon></span>`;
    modesButtons[1].innerHTML=`<span><ion-icon class="heart mode-icon" name="heart-outline"></ion-icon></span>`;
    lastTopic.classList.add("d-none");
}else if(currentScreenSize>=768){
    modesButtons[0].innerHTML=`<span><ion-icon class="moon mode-icon" name="moon-outline"></ion-icon></span> Dark Mode`;
    modesButtons[1].innerHTML=`<span><ion-icon class="heart mode-icon" name="heart-outline"></ion-icon></span> Favourites`;
}

if(currentScreenSize>767 && currentScreenSize<1449){
    lastTopic.classList.add("d-none");
}else if (currentScreenSize>=1449){
    lastTopic.classList.remove("d-none");
}


console.log(currentScreenSize);