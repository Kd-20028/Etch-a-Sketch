
let container = document.querySelector(".container"); 
let square;


function generateSquares(number){

    let width = (90000/(number * number)); 
    width = Math.sqrt(width); 
    let height = (90000/(number * number)); 
    height = Math.sqrt(height); 

    for (let x = 0; x < number * number; x++){
        square = document.createElement('div'); 
        square.classList.add("square"); 
        container.appendChild(square); 
        square.style.width = width + 'px';
        square.style.height = height + 'px'; 
    }   
}


generateSquares(10); 

const squares = document.querySelectorAll(".square");
const squareArray = [...squares];  

squareArray.forEach((square) => {
    square.addEventListener("mouseover", function (){
        square.style.backgroundColor = "black"; 
    });
});
  
