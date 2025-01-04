function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const textSpan = document.querySelector(".js-color");
const bodyPage = document.querySelector("body");

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyPage.style.backgroundColor = randomColor;
  textSpan.textContent = randomColor;
});
