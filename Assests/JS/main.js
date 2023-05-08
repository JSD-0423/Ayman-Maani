const modesButtons = document.querySelectorAll(".modes-buttons");
const currentScreenSize= window.visualViewport.width;
// const currentScreenSize= window.innerWidth;




if(currentScreenSize<= 767){
    modesButtons[0].innerHTML=`<span><ion-icon class="moon mode-icon" name="moon-outline"></ion-icon></span>`;
    modesButtons[1].innerHTML=`<span><ion-icon class="heart mode-icon" name="heart-outline"></ion-icon></span>`;
}else if(currentScreenSize>=768){
    modesButtons[0].innerHTML=`<span><ion-icon class="moon mode-icon" name="moon-outline"></ion-icon></span> Dark Mode`;
    modesButtons[1].innerHTML=`<span><ion-icon class="heart mode-icon" name="heart-outline"></ion-icon></span> Favourites`;
}


console.log(currentScreenSize);