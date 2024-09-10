// Select grid container
const gridContainer = document.querySelector(".grid-container");

// size of the grid
const size = 16 * 16;

// loop for adding the squares inside the grid container
for (let i = 0; i < size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    gridContainer.appendChild(div);
}