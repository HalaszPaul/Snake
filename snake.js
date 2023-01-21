const blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;

let sankeX = blockSize * 5;
let snakeY = blockSize * 5;

let velocityX = 0;
let velocityY = 0;

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;

window.onload = function() {
    board = document.querySelector("#board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection)
    setInterval(update, 1000/10);
}

function update() {
    if(gameOver) {
        return;
    }
    
}