
let container = document.querySelector(".container"); 
let changeSizeButton = document.querySelector(".changesize");
let clear = document.querySelector(".clear");  
let square;


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
    let size = prompt("Enter A Size: ", 16);
    if (size < 100 && size > 0){
        return size; 
    }
    else {
        return "Invalid Size"; 
    }
    
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

changeSizeButton.addEventListener("click", function (){
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
});


