const DEFAULT_SIZE = 16;
let current_size = DEFAULT_SIZE
let container = document.querySelector(".etching-grid");
let isMouseDown = false;
function createGrid(dimension){
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    let max = dimension * dimension

    for (let i = 0; i < max; i++){
        let grid = document.createElement("div");
        grid.classList.add("grid");
            grid.addEventListener('mousedown', () => {
                isMouseDown = true;
            });
            grid.addEventListener('mouseup', () => {
                isMouseDown = false;
            });
            grid.addEventListener('mousemove', (event) => {
                if (isMouseDown) {
                    hoverState(grid);
                }
            });
        container.insertAdjacentElement('beforeend', grid);
    }
}

createGrid(DEFAULT_SIZE);

function hoverState(object){
    object.style.backgroundColor = "black";
}

const newGrid = document.querySelector('button');
newGrid.addEventListener('click', createNewGrid);

function createNewGrid(){
    let dimension = prompt("Choose how big you want the grid to be, the max size is 100: ");
    while (dimension > 100){
        dimension = prompt("The number you chose was too big, please choose a number between 2 and 100: ");
    }
    if (dimension !== ""){
        current_size = dimension;
        container.replaceChildren();
        createGrid(dimension);
    }
    else return;
}

const clear = document.querySelector('#clear-grid');
clear.addEventListener('click', clearGrid);

function clearGrid(){
    container.replaceChildren();
    createGrid(current_size);
}