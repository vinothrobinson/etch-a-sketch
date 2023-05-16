const container = document.querySelector("#etching-grid");

function createGrid(dimension){
    for (let i = 0; i < dimension; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < dimension; j++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            row.append(grid);
        }
        container.append(row);
    }
}

createGrid(16);


let grids = document.getElementsByClassName("grid");

function hoverState(object){
    object.style.backgroundColor = "black";
}

let isMouseDown = false;

for (let i = 0; i < grids.length; i++){
    grids[i].addEventListener('mousedown', () => {
        isMouseDown = true;
      });
      
    grids[i].addEventListener('mouseup', () => {
        isMouseDown = false;
      });
      
    grids[i].addEventListener('mousemove', (event) => {
        if (isMouseDown) {
          hoverState(grids[i]);
        }
      });
}

const newGrid = document.querySelector('button');
newGrid.addEventListener('click', createNewGrid);

function createNewGrid(){
    let dimension = prompt("Choose how big you want the grid to be, the max size is 100: ");
    createGrid(dimension);
}
