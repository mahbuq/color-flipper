const colorName = document.querySelector(".color__name");
const color = document.querySelector("body");
const clickBtn = document.querySelector(".clickme");

clickBtn.addEventListener("click", changeColor);

function changeColor() {
  const hexColors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let index = 0;
  let colorCode = "#";

  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * hexColors.length);
    colorCode += hexColors[index];
  }
  color.style.backgroundColor = colorCode;
  colorName.innerText = colorCode;
}
