let bulb = document.querySelector("#bulb")
let onBtn = document.querySelector("#on-btn")
let offBtn = document.querySelector("#off-btn")

onBtn.addEventListener("click", () => {
  bulb.src = "images/bulb on.png";
});

offBtn.addEventListener("click", () => {
  bulb.src = "images/bulb off.png";
});