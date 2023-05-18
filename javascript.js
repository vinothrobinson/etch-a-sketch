const DEFAULT_SIZE = 16; // This is the default size of the grid, 16 x 16
let current_size = DEFAULT_SIZE // This variable keeps track of the current grid size, it is used in the clearGrid function
let container = document.querySelector(".etching-grid");
let isMouseDown = false; // This boolean value is used to create the event "click and hold the mouse"
function createGrid(dimension){
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`; // CSS Grid method to create the grid
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    let max = dimension * dimension

    for (let i = 0; i < max; i++){
        let grid = document.createElement("div");
        grid.classList.add("grid");
            grid.addEventListener('mousedown', () => { // Conditions to achieve the listening event desired
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

function hoverState(object){ // Colors the square black when the mouse is over it
    object.style.backgroundColor = "black";
}

const newGrid = document.querySelector('button');
newGrid.addEventListener('click', createNewGrid);

function createNewGrid(){ // Used to create new grids of different sizes
    let dimension = prompt("Choose how big you want the grid to be, the max size is 100: ");
    while (dimension > 100 || dimension < 2){ // Prevents users from entering grid sizes that are too small or large
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

function clearGrid(){ // Used to clear the grid without making the user click the "Create New Grid" button
    container.replaceChildren();
    createGrid(current_size);
}