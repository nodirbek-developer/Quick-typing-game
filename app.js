// elements
const word = document.getElementById('word');
const text = document.getElementById('input_area');
const scoreEl = document.getElementById('score');
const timeel = document.getElementById('time');
const end_game = document.getElementById('end_game');

const words = [
    "time",
    "water",
    "lion",
    "ballon",
    "button",
    "chair",
    "table",
    "melon",
    "watermelon",
    "key",
    "light",
    "wight",
    "leg",
    "watch tv",
    "book",
    "hand",
    "hair",
    "head",
    "cup",
    "rain",
    "bottle",
    "telephone",
    "job",
    "apple",
    "square",
    "about",
    "animal",
    "sun",
    "puple",
    "people",
    "guy",
    "teacher",
    "doctor",
    "wall",
    "flower",
    "friend"
]
let randomword;
let score = 0;
let time = 180;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}
function addToDom() {
    randomword = getRandomWord()
    word.innerHTML = randomword;
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}
function updateTime() {
    time--;
    timeel.innerHTML = time + "s";
    if (time === 0) {
        clearInterval(timeInterval)
        gameOver();
    }
}

const timeInterval = setInterval(updateTime, 1000);

function gameOver() {
    end_game.innerHTML = `
        <h1>Vaqtingiz tugadi<h1/>
        <h3>Natijangiz: ${score}<h3/>
        <button onclick="location.reload()">Yangilash</button>
    `
    end_game.style.display = "flex";
}

addToDom();

text.addEventListener("input", (e) => {
    const typedText = e.target.value;

    if (typedText === randomword) {
        updateScore(); //++1
        addToDom();
        e.target.value = "";
        updateTime()
    }
})
