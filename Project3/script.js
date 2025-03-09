const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");
const positionSlider = document.getElementById("positionSlider");
const bgRadios = document.getElementsByName("bg");
const itemCheckboxes = [
    document.getElementById("item1"),
    document.getElementById("item2"),
    document.getElementById("item3")
];
const sounds = {
    sound1: new Audio("./audio/gond-sound.mp3"),
    sound2: new Audio("./audio/horror-sound.mp3"),
    sound3: new Audio("./audio/monster-sound.mp3")
};

// Load images properly
const characterImage = new Image();
characterImage.src = "./images/pixel-character.png";

const dragonImage = new Image();
dragonImage.src = "./images/pixel-dragon.png";

const moonImage = new Image();
moonImage.src = "./images/pixel-moon.png";

const castleImage = new Image();
castleImage.src = "./images/pixel-castle.png";

// Ensure all images load before first draw
let imagesLoaded = 0;
const images = [characterImage, dragonImage, moonImage, castleImage];

images.forEach(img => {
    img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            drawScene();  // Only draw after all images are loaded
        }
    };
});

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background Selection
    let bgColor = "lightblue";
    for (let radio of bgRadios) {
        if (radio.checked) {
            bgColor = radio.value === "bg1" ? "lightblue" : radio.value === "bg2" ? "lightgreen" : "lightgray";
        }
    }
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Character
    let characterX = positionSlider.value;
    ctx.drawImage(characterImage, characterX, 200, 30, 30);
    
    // Items
    if (itemCheckboxes[0].checked) ctx.drawImage(dragonImage, 50, 180, 50, 50);
    if (itemCheckboxes[1].checked) ctx.drawImage(moonImage, 200, 50, 50, 50);
    if (itemCheckboxes[2].checked) ctx.drawImage(castleImage, 200, 200, 100, 100);
}

function playSound(soundId) {
    sounds[soundId].play();
}

// Redraw scene whenever inputs change
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", drawScene);
});
