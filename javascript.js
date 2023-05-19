const DEFAULT_SIZE = 16; // This is the default size of the grid, 16 x 16
let current_size = DEFAULT_SIZE // This variable keeps track of the current grid size, it is used in the clearGrid function
let container = document.querySelector(".etching-grid");

// Booleans for drawing and erasing
let isMouseDown = false; // This boolean value is used to create the event "click and hold the mouse"
let isErasing = false;
let isDrawing = true;

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
            grid.addEventListener('mousemove', () => {
                if (isMouseDown && isDrawing) {
                    drawState(grid);
                }
                if (isMouseDown && isErasing) {
                    eraseState(grid)
                }
            });
        container.insertAdjacentElement('beforeend', grid);
    }
}

// This helps determine which mode is being used (erasing)
const eraser = document.querySelector('#eraser-mode');
eraser.addEventListener('click', eraserMode);

function eraserMode() {
    eraser.style.fontWeight = "bold";
    drawing.style.fontWeight = "normal";
    isErasing = true;
    isDrawing = false;
}

function eraseState(object) {
    object.style.backgroundColor = "white";
    object.style.borderColor = "rgb(223, 223, 223)"
}

// This helps determine which mode is being used (drawing)
const drawing = document.querySelector('#draw-mode');
drawing.addEventListener('click', drawMode);

function drawMode() {
    drawing.style.fontWeight = "bold";
    eraser.style.fontWeight = "normal";
    isErasing = false;
    isDrawing = true;
}

function drawState(object){ // Colors the square black when the mouse is over it
    object.style.backgroundColor = "black";
    object.style.borderColor = "black"
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

// Code that is executed when the window is loaded / refreshed
window.addEventListener("load", () => {
    createGrid(DEFAULT_SIZE)
    drawing.style.fontWeight = "bold";
  });