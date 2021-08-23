let size;
const gridContainer =document.querySelector("#gridContainer");
let gridItem=document.createElement('div');

//buttons below
const clear= document.querySelector("#clear");
const grid16=document.querySelector("#small");
const grid32=document.querySelector("#medium");
const grid64=document.querySelector("#large");

//button click events below
clear.addEventListener('click', ()=>{
    clearGrid();
})

grid16.addEventListener('click', ()=>{
    createGrid(16);
});
grid32.addEventListener("click", ()=>{
    createGrid(32);
});
grid64.addEventListener("click", ()=>{
    createGrid(64);
});

//these two functions create the grid and clear the grid and are called with click events from above.
function createGrid(x){
    clearGrid(parent);
    let size=x**2
   for(i=0;i<size;i++){
        gridItem=document.createElement('div');
        gridContainer.appendChild(gridItem);
   }  
};

function clearGrid(parent){
parent=gridContainer;
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);   
        }
};