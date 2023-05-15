const container = document.querySelector("#etching-grid");

function createGrid(){
    for (let i = 0; i < 16; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 16; j++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            row.append(grid);
        }
        container.append(row);
    }
}

createGrid();


let grids = document.getElementsByClassName("grid");

function hoverState(){
    this.style.backgroundColor = "black";
}

for (let i = 0; i < grids.length; i++){
    grids[i].addEventListener('mouseover', hoverState);
}

