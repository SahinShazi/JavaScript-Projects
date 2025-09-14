const body = document.querySelector("body");

function setColorRed(red) {
  body.style.backgroundColor = "red"
}

function setColorBlue(blue) {
  body.style.backgroundColor = "blue"
}

function setColorYellow(yellow) {
  body.style.backgroundColor = "yellow"
}

function setColorGreen(green) {
  body.style.backgroundColor = "green"
}

function randomColor() {
  const red = Math.round(Math.random() * 255)
  const green = Math.round(Math.random() * 255)
  const blue = Math.round(Math.random() * 255)
  
  const color = `rgb(${red}, ${green}, ${blue})`
  
body.style.backgroundColor = color
}