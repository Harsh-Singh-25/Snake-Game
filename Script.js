const board = document.querySelector(".board");
const blockdHeight = 50;
const blockWidth = 50;

const rows = Math.floor(board.clientHeight / blockdHeight);
const cols = Math.floor(board.clientWidth / blockWidth);
let direction = 'right'

const blocks = [];
const snake = [{x: 1, y: 3 },{x: 1, y: 4 },{x: 1, y: 5 }]

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    block.innerText = `${row}-${col}`;
    blocks[`${row}-${col}`] = block;
  }
}

function render() {
  // clear previous positions safely
  snake.forEach((segment) => {
    const block = blocks[`${segment.y}-${segment.x}`];
    if (block) block.classList.remove("fill");
  });

  // draw current positions
  snake.forEach((segment) => {
    const block = blocks[`${segment.y}-${segment.x}`];
    if (block) block.classList.add("fill");
  });
}



const startGame = () => {
  const intervalId = setInterval(() => {
    let head = null;

    if (direction === 'left') {
      head = { x: snake[0].x, y: snake[0].y - 1 };
    } else if (direction === 'right') {
      head = { x: snake[0].x, y: snake[0].y + 1 };
    } else if (direction === 'up') {
      head = { x: snake[0].x - 1, y: snake[0].y };
    } else if (direction === 'down') {
      head = { x: snake[0].x + 1, y: snake[0].y };
    }

    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
      clearInterval(intervalId);
      console.log("Game over: hit wall");
      return;
    }

    snake.unshift(head);
    snake.pop();
    render();
  }, 400);
};

startGame();



addEventListener("keydown", (event) => {
   if(event.key == "Arrowup"){
    direction = "up";
   }
   else if (event.key == "Arrowdown"){
    direction = "down";
   }
   else if (event.key == "Arrowright"){
    direction = "right";
   }
   else if (event.key == "Arrowleft"){
    direction = "left";
   }
})
