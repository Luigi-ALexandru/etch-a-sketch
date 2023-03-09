//LIST OF GLOBAL VARIABLES AND TWO FUNCTIONS THAT REMOVE GRIDS
let a = 0;
let result = 0;
const container = document.querySelector(".container");
let gridItem;

//OBLITERATE ANYTHING
function obliterate(x) {
    x.remove();
}

//USE OBLITERATE TO REMOVE THE GRID ITEMS
function removeGrid() {
    let x = document.querySelectorAll("div.grid-item");
    x.forEach(obliterate);
}

//WE CREATE A STARTING 16X16 GRID THAT SERVES AS A SKETCHPAD
function createStartingGrid() {
    for(let i = 0; i < 256; i++) {
        gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
    container.setAttribute("style", "border: 3px solid black; display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); width: 600px; height: 400px;");
}

createStartingGrid();

//THIS FUNCTION REMOVES THE STARTING GRID AND CREATES A X * X GRID BASED ON USER INPUT
function createGrid() {
    a = prompt("Insert a number between 16 and 100 (inclusive) to create a grid:");
    if(a < 16 || a > 100) {
        alert("Number out of score. Try again with a number between 16 and 100 (inclusive)");
    } else {
    result = a * a;
    for(let i = 0; i < result; i++) {
        gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
    container.setAttribute("style", `border: 3px solid black; display: grid; grid-template-columns: repeat(${a}, 1fr); grid-template-rows: repeat(${a}, 1fr); width: 600px; height: 400px;`);
    }
}

//BUTTON THAT REMOVES A GRID AND CREATES A NEW ONE BASED ON USER INPUT
const btnOne = document.querySelector(".btn-one");
btnOne.addEventListener("click", () => {
    removeGrid();
    createGrid();
});

let mouseIsDown = false;
container.addEventListener("mousedown", function(){mouseIsDown = true});
container.addEventListener("mouseup", function(){mouseIsDown = false});
container.addEventListener("mousemove", function (e) {
    const target = e.target;

    if(target.matches(".grid-item")) {
        if(mouseIsDown) {
        target.setAttribute("style", "background-color: black;");
    }
    }
});
//=======================================================================
//FUNCTION TO GENERATE A RANDOM INT (COPY PASTED FROM MDNdocs EXAMPLE)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
//BUTTON RANDOM COLOR
const btnTwo = document.querySelector(".btn-two");
btnTwo.addEventListener("click", function() {
    container.addEventListener("mousemove", function (e) {
        const target = e.target;
    
        let x = getRandomInt(0, 256);
        let y = getRandomInt(0, 256);
        let z = getRandomInt(0, 256);
        let randomColor = `rgb(${x}, ${y}, ${z})`;
    
        if(target.matches(".grid-item")) {
            if(mouseIsDown) {
            target.setAttribute("style", `background-color: ${randomColor};`);
        }
        }
    });
});
//BUTTON BLACK
const btnThree = document.querySelector(".btn-three");
btnThree.addEventListener("click", function() {
    container.addEventListener("mousemove", function (e) {
        const target = e.target;
    
        if(target.matches(".grid-item")) {
            if(mouseIsDown) {
            target.setAttribute("style", `background-color: black`);
        }
        }
    });
});