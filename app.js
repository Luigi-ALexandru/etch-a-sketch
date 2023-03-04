const gridContainer = document.querySelector(".grid-container");
let msg = document.createElement("div");
msg.classList.add("msg");
msg.textContent = "Click on the 'Create a sketch!' button!";
gridContainer.appendChild(msg);

let a = 0;
let result = 0;
let hasClickedButtonOne = false;

function createGridItems() {
    msg.remove(msg);
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);

    gridItem.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "purple";
    });

    const btnTwo = document.querySelector(".btn-two");
    btnTwo.addEventListener("click", () => {
        gridItem.remove(gridItem);
        hasClickedButtonOne = false;
    });
};

const btnOne = document.querySelector(".btn-one");
btnOne.addEventListener("click", () => {
    if(hasClickedButtonOne) {
        alert("Hey, you must first press the Reset button to reset your sketch!");
    } else {
    a = prompt("Insert a number between 16 and 100 (inclusive)");
    if(!isNaN(a)) {
        if(a > 100 || a < 16) {
            alert("Invalid number. Try again from 16 to 100 (inclusive)");
        } else {
            result = a * a;
            for(let i = 0; i < result; i++) {
            createGridItems();
            };
            gridContainer.setAttribute("style", `max-width: 800px; max-height: 600px; grid-template-columns: repeat(${a}, auto);`);
            hasClickedButtonOne = true;
        }
    } else {
        alert("Not a number...try again!");
    }
}
});


/*

Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, 
the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a
 new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, 
 potentially causing delays, freezing, or crashing that we want to prevent.
Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

*/
