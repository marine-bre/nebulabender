let difficulty = document.getElementById("difficulty");
let playLink = document.getElementById("playLink");
let playButton = document.getElementById("playButton");

playButton.addEventListener('click', selection);

function selection(){
    if(difficulty.value==="easy") {
        playLink.href="easy.html";

    }
    if(difficulty.value==="difficult"){
        playLink.href="difficult.html";
    }
}

