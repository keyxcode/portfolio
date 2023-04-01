const header = document.querySelector("body");
const blinkingText = document.querySelector("#blinking-text");
const cursor = document.querySelector("#cursor");

let text = "< My Projects />";
const textArray = [...text];

const blinkingCursor = setInterval(() => {
  cursor.textContent = cursor.textContent === "|" ? "" : "|";
}, 500);

window.addEventListener("scroll", () => {
  console.log("hi");

  setInterval(() => {
    if (textArray.length === 0) return;
    blinkingText.textContent += textArray.shift();
  }, 500);
});
