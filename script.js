const header = document.querySelector("body");
const typingText = document.querySelector("#typing-text");
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
    typingText.textContent += textArray.shift();
  }, 75);
});
