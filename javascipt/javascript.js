// Select elements
const colorBox = document.getElementById("colorBox");
const button = document.getElementById("changeColorBtn");

// Function to generate random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Change color when button is clicked
button.addEventListener("click", () => {
  const newColor = getRandomColor();
  colorBox.style.backgroundColor = newColor;
});
