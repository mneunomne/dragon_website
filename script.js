console.log("Hello!");

var button = document.getElementById("fire-button")

button.addEventListener("click", function () {
  button.style.top = Math.random() * 500 + "px"
  button.style.left = Math.random() * 500 + "px"
  document.body.style.background = "red"
})

console.log(button)