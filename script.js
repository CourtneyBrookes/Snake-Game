const gameContainer = document.getElementById("game-container");
const snake = document.getElementById("snake");
const food = document.getElementById("food");

let snakeX = 10;
let snakeY = 10;
let foodX = 0;
let foodY = 0;
let score = 0;
let isMoving = false;

function updateFoodPosition() {
  foodX = Math.floor(Math.random() * 29) * 10;
  foodY = Math.floor(Math.random() * 29) * 10;
  food.style.left = foodX + "px";
  food.style.top = foodY + "px";
}

function checkCollision() {
  if (
    snakeX >= 0 &&
    snakeX <= 290 &&
    snakeY >= 0 &&
    snakeY <= 290 &&
    snakeX !== foodX &&
    snakeY !== foodY
  ) {
    return false;
  }
  return true;
}

function gameLoop() {
  if (!isMoving) return;

  snakeX += 10;
  snake.style.left = snakeX + "px";
  snake.style.top = snakeY + "px";

  if (checkCollision()) {
    alert("Game Over! Your Score: " + score);
    snakeX = 10;
    snakeY = 10;
    score = 0;
  }

  if (snakeX === foodX && snakeY === foodY) {
    updateFoodPosition();
    score += 10;
  }

  requestAnimationFrame(gameLoop);
}

updateFoodPosition();

// Event listeners for control buttons
document.getElementById("up").addEventListener("click", () => {
  if (!isMoving || snakeY > 0) {
    isMoving = true;
    snakeY -= 10;
    gameLoop();
  }
});

document.getElementById("left").addEventListener("click", () => {
  if (!isMoving || snakeX > 0) {
    isMoving = true;
    snakeX -= 10;
    gameLoop();
  }
});

document.getElementById("down").addEventListener("click", () => {
  if (!isMoving || snakeY < 290) {
    isMoving = true;
    snakeY += 10;
    gameLoop();
  }
});

document.getElementById("right").addEventListener("click", () => {
  if (!isMoving || snakeX < 290) {
    isMoving = true;
    snakeX += 10;
    gameLoop();
  }
});
