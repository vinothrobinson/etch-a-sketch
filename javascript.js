const DEFAULT_SIZE = 16;
const container = document.querySelector("#etching-grid");
let isMouseDown = false;
function createGrid(dimension){
    for (let i = 0; i < dimension; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < dimension; j++){
            const grid = document.createElement("div");
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
            column.append(grid);
        }
        container.append(column);
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
    if (dimension !== ""){
        container.replaceChildren();
        createGrid(dimension);
    }
    else return;
}
