window.onload = function () {

    var btnRed = document.getElementById("red-button");
    var btnGray = document.getElementById("gray-button");
    var mainContent = document.getElementById("start");
    var redChoice = document.getElementById("red-choice");
    var grayChoice = document.getElementById("gray-choice");
    var homeReset = document.getElementById("logo");


    btnRed.onclick = function() {
        btnRed.style.animationPlayState = "running";
        btnRed.addEventListener("animationend", function(){
            mainContent.style.display = "none";
            redChoice.style.display = "flex";   
        })
    }

    btnGray.onclick = function() {
        btnGray.style.animationPlayState = "running";
        btnGray.addEventListener("animationend", function(){
            mainContent.style.display = "none";
            grayChoice.style.display = "flex";
        })
    }

    homeReset.onclick = function() {
        window.location.reload()
    }
}