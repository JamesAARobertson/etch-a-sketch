// Select grid container
const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".resetButton");
const slider = document.querySelector("#gridSize");
const gridValue = document.querySelector("#gridValue");

function createGrid(size) {
  gridContainer.innerHTML = "";
  gridContainer.style.width = "960px";
  gridContainer.style.height = "960px";

  const newSquare = document.createDocumentFragment();
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.flex = `0 0 calc(100% / ${size})`;
    square.style.height = `calc(100% / ${size})`;
    newSquare.appendChild(square);
  }

  gridContainer.appendChild(newSquare);
  colorEffect();
}

// function for getting a random colour
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorEffect() {
  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });
  });
}

resetButton.addEventListener("click", () => {
  let squaresPerSide = prompt("Enter a new grid size between 1 and 100:");

  squaresPerSide = parseInt(squaresPerSide);
  if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
    alert("Invalid input! Please enter a number between 1 and 100.");
    return;
  }

  createGrid(squaresPerSide);
});
