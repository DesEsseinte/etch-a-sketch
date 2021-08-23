const gridContainer =document.querySelector("#gridContainer");
let gridItem=document.createElement('div');

//functions to create grids.

function createGrid(x){
    let size=x**2
   for(i=0;i<size;i++){
        gridItem=document.createElement('div');
        gridContainer.appendChild(gridItem);
   }  
}

createGrid(64);