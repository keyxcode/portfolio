const header = document.querySelector("body");
const blinkingText = document.querySelector("#blinking-text");
const cursor = document.querySelector("#cursor");
let scrolled = false;

let text = "< My Projects />";
const textArray = [...text];

const blinkingCursor = setInterval(() => {
  cursor.textContent = cursor.textContent === "|" ? "\u00A0" : "|";
}, 500);

window.addEventListener("scroll", () => {
  if (scrolled) return;
  scrolled = true;
  setInterval(() => {
    if (textArray.length === 0) return;
    blinkingText.textContent += textArray.shift();
  }, 75);
});
