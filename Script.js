const board = document.querySelector('.board');
const blockdHeight = 50;
const blockWidth = 50; 

const cols = Math.floor(board.clientHeight / blockdHeight);
const rows = Math.floor(board.clientWidth / blockWidth);

const blocks = []
const snake = [
    {x: 1, y: 3},
     {
        x: 1, y: 4
     }, 
     {
        x: 1, y: 5
     }]

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++){
    const block = document.createElement('div');
    block.classList.add("block");
    board.appendChild(block);
    block.innerText = `${row}-${col}`;
    block[ `${row}-${col}`] = block;
}
}

function render(){
   snake.forEach(segement => {
      console.log(segement);
      
   })
}