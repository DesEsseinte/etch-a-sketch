let size;
const gridContainer=document.querySelector("#gridContainer");


//buttons below
const eraser=document.querySelector("#eraser");
const clear= document.querySelector("#clear");
const grid16=document.querySelector("#small");
const grid32=document.querySelector("#medium");
const grid64=document.querySelector("#large");

//button click events below
clear.addEventListener('click', ()=>{
    clearGrid();
});
        clear.addEventListener('mousedown', ()=>{
            clear.style.backgroundColor="white";
            });
            clear.addEventListener('mouseup', ()=>{
            clear.style.backgroundColor="#b00505";
        });

grid16.addEventListener('click', ()=>{
    createGrid(16);
});
        grid16.addEventListener('mousedown', ()=>{
            grid16.style.backgroundColor="white";
            });
            grid16.addEventListener('mouseup', ()=>{
            grid16.style.backgroundColor="#b00505";
        });
grid32.addEventListener("click", ()=>{
    createGrid(32);
});
        grid32.addEventListener('mousedown', ()=>{
            grid32.style.backgroundColor="white";
            });
            grid32.addEventListener('mouseup', ()=>{
            grid32.style.backgroundColor="#b00505";
        });
grid64.addEventListener("click", ()=>{
    createGrid(64);
});
        grid64.addEventListener('mousedown', ()=>{
            grid64.style.backgroundColor="white";
            });
            grid64.addEventListener('mouseup', ()=>{
            grid64.style.backgroundColor="#b00505";
        });

//these two functions create the grid and clear the grid and are called with click events from above.
function createGrid(x){
    clearGrid(parent);
    let size=x**2  
        for(i=0;i<size;i++){
            gridItem=document.createElement('div');
            gridContainer.appendChild(gridItem);
            if(size==256){
            gridItem.style.width="29px";
            gridItem.style.height="29px"; 
            }else if(size==1024){
            gridItem.style.width="13.5px";
            gridItem.style.height="13.5px";
            }else if(size==4096){
            gridItem.style.width="6.1px";
            gridItem.style.height="6.1px";
            }   
        }   gridItem.addEventListener('mouseover', ()=>{
            gridItem.style.backgroundColor="blue";
           });    
};
function clearGrid(parent){
    parent=gridContainer;
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);   
        }
};