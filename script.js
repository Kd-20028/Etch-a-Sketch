
let container = document.querySelector(".container"); 
let changeSizeSlider = document.querySelector(".changesize");
let clear = document.querySelector(".clear"); 
let sizeText = document.querySelector(".sizeText");  
let colorChange = document.querySelector("#changeColor"); 
let grid = document.querySelector(".checkbox"); 
let eraser = document.querySelector("#button-2 > .checkbox")

let square;


function changeColor() {
    let color = colorChange.value; 
    return color; 
}


function generateSquares(number){

    let width = (250000/(number * number)); 
    width = Math.sqrt(width); 
    let height = (250000/(number * number)); 
    height = Math.sqrt(height); 

    container.innerHTML = ''; 

    for (let x = 0; x < number * number; x++){
        square = document.createElement('div'); 
        square.classList.add("square"); 
        container.appendChild(square); 
        square.style.width = width + 'px';
        square.style.height = height + 'px'; 
    }   
}

function getSize(){
    let size = changeSizeSlider.value; 
    sizeText.textContent = size + " X " + size; 
    return size; 
}

function startover(){
    const squares = document.querySelectorAll(".square");
    const squareArray = [...squares];  

    squareArray.forEach((square) => {
        
        square.addEventListener("mouseover", function (){
            square.style.backgroundColor = "black"; 
        });
    
        clear.addEventListener("click", function (){
            square.style.backgroundColor = "white"; 
        });
    });    
}

generateSquares(16); 

changeSizeSlider.addEventListener("click", function (){
    let size = getSize(); 
    squareArray.forEach((square) => {
        square.remove(); 
    }); 
    generateSquares(size); 
    startover();
})
  

const squares = document.querySelectorAll(".square");
const squareArray = [...squares];  

squareArray.forEach((square) => {
    square.addEventListener("mouseover", function (){
        square.style.backgroundColor = "black"; 

    });

    clear.addEventListener("click", function (){
        square.style.backgroundColor = "white"; 
    });

    colorChange.addEventListener("input", function(){
        color = changeColor(); 
        square.addEventListener("mouseover", function (){
            square.style.backgroundColor = color; 
        });
    }); 
    
    grid.addEventListener("change", function(){
        if (this.checked) {
            square.style.border = "none"; 
          } else {
            square.style.border = "1px solid black"; 
          }
    })

    eraser.addEventListener("change", function(){
        if (this.checked) {
            square.addEventListener("mouseover", function (){
                square.style.backgroundColor = "white"; 
            }); 
        }
        else{
            square.addEventListener("mouseover", function (){
                square.style.backgroundColor = color; 
            }); 
        }
    }); 
});





