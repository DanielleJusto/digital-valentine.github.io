
var phraseid = 0;
var currentImg = 0;

function switchContent(){
    const phrases = ["Please?", "C'monnnn try againnnn", "plsplspls", "But I want to be ur valentine soo baddd"];
    const images = ["assets/sad-1.png", "assets/sad-2.png", "assets/sad-3.png"];

    if (currentImg>=2){
        currentImg = 0;
    } else {
        currentImg++;
    }

    const faceImg = document.getElementById("sad-face");
    faceImg.src = images[currentImg];

    if (phraseid < phrases.length){
        document.getElementById("plea").textContent = phrases[phraseid++];
    } else {
        document.getElementById("plea").textContent = phrases[phraseid=0];
    }
}

function changeAtInterval() {
    var imageElement = document.getElementById("happy-face");

    if (imageElement.src.includes("happy-1.png")) {
        imageElement.src = "assets/happy-2.png";
    } else {
        imageElement.src = "assets/happy-1.png";
    }
}

setInterval(changeAtInterval, 1000);
