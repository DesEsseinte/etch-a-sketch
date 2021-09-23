let size;
const gridContainer=document.querySelector("#gridContainer");


//buttons below
const black=document.querySelector('#black');
const color=document.querySelector('#color');
    const red=document.querySelector('#red');
    const blue=document.querySelector('#blue');
    const green=document.querySelector('#green');

const eraser=document.querySelector("#eraser");
const clear= document.querySelector("#clear");
const grid16=document.querySelector("#small");
const grid32=document.querySelector("#medium");
const grid64=document.querySelector("#large");

//////////button click events below/////////////
black.addEventListener('click', ()=>{
    paintBlack();
});
        black.addEventListener('mousedown', ()=>{
            black.style.backgroundColor="white";
            });
            black.addEventListener('mouseup', ()=>{
            black.style.backgroundColor="#b00505";
        });
color.addEventListener('click', ()=>{
    paintColor();
    let colorMenuActive=document.querySelector('.colorMenuActive');
    colorMenuActive.style.display="flex";
});
        color.addEventListener('mousedown', ()=>{
            color.style.backgroundColor="white";
            });
            color.addEventListener('mouseup', ()=>{
            color.style.backgroundColor="#b00505";
        });
                            blue.addEventListener('click', ()=>{
                                paintBlue();
                                let colorMenuActive=document.querySelector('.colorMenuActive');
                                colorMenuActive.style.display="none";
                            });
                                blue.addEventListener('mousedown', ()=>{
                                    blue.style.backgroundColor="gray";
                                });
                                blue.addEventListener('mouseup', ()=>{
                                    blue.style.backgroundColor="white";
                                });
                                            red.addEventListener('click', ()=>{
                                                paintRed();
                                                let colorMenuActive=document.querySelector('.colorMenuActive');
                                                colorMenuActive.style.display="none";
                                            });
                                                red.addEventListener('mousedown', ()=>{
                                                    red.style.backgroundColor="gray";
                                                });
                                                red.addEventListener('mouseup', ()=>{
                                                    red.style.backgroundColor="white";
                                                });
                                                            green.addEventListener('click', ()=>{
                                                                paintGreen();
                                                                let colorMenuActive=document.querySelector('.colorMenuActive');
                                                                colorMenuActive.style.display="none";
                                                            });
                                                                green.addEventListener('mousedown', ()=>{
                                                                    green.style.backgroundColor="gray";
                                                                });
                                                                green.addEventListener('mouseup', ()=>{
                                                                    green.style.backgroundColor="white";
                                                                });
eraser.addEventListener('click', ()=>{
    eraseColor();
});
        eraser.addEventListener('mousedown', ()=>{
            eraser.style.backgroundColor="white";
            });
            eraser.addEventListener('mouseup', ()=>{
            eraser.style.backgroundColor="#b00505";
        });
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

///FUNCTIONS called by buttons listed above.
function createGrid(x){
    clearGrid(parent);
    let size=x**2  
        for(i=0;i<size;i++){
            gridItem=document.createElement('div');
            gridContainer.appendChild(gridItem);
            gridContainer.children[i].classList.add('box');
            if(size==256){
            gridItem.style.width="29px";
            gridItem.style.height="29px"; 
            }else if(size==1024){
            gridItem.style.width="13.5px";
            gridItem.style.height="13.5px";
            }else if(size==4096){
            gridItem.style.width="5.8px";
            gridItem.style.height="5.8px";
            }   
        }document.querySelectorAll('.box').forEach(item => {
            item.addEventListener('mouseover', ()=>{
                item.style.background="blue";
            });
        });
};
function clearGrid(parent){
    parent=gridContainer;
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);   
        }
};
function paintBlack(){
    document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('mouseover', ()=>{
            item.style.background="black";
        });
    });
}
function paintColor(){
        let colorMenu=document.querySelector('.colorMenu');
        let colorMenuActive=document.querySelector('.colorMenuActive');
        colorMenu.classList.add('colorMenuActive');
      
};
        function paintRed(){
            document.querySelectorAll('.box').forEach(item => {
                item.addEventListener('mouseover', ()=>{
                    item.style.background="red";
                });
            });
        }
        function paintBlue(){
            document.querySelectorAll('.box').forEach(item => {
                item.addEventListener('mouseover', ()=>{
                    item.style.background="blue";
                });
            });
        }
        function paintGreen(){
            document.querySelectorAll('.box').forEach(item => {
                item.addEventListener('mouseover', ()=>{
                    item.style.background="green";
                });
            });
        }

function eraseColor(){
    document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('mouseover', ()=>{
            item.style.background="white";
        });
    });
};