const values = [
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

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hex = "#";
  for (let i = 1; i <= 6; i++) hex += values[getRandomNumber()];

  document.body.style.backgroundColor = hex;
  color.textContent = hex;
  btn.style.color = hex;
});

function getRandomNumber() {
  return Math.floor(Math.random() * values.length);
}
