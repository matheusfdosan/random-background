document.querySelector("button").onclick = () => {
  document.body.style.backgroundColor =
    "rgb(" +
    Math.round(Math.random() * 255) +
    ", " +
    Math.round(Math.random() * 255) +
    ", " +
    Math.round(Math.random() * 255) +
    ")"
}
