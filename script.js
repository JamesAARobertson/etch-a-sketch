// Select grid container
const gridContainer = document.querySelector(".grid-container");

// size of the grid
const size = 16 * 16;

// function for getting a random colour
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// loop for adding the squares inside the grid container
for (let i = 0; i < size; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  gridContainer.appendChild(div);
}
