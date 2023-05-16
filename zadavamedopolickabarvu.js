let myForm = document.querySelector("#my-form");
let myBody = document.querySelector("body");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let myInput = event.target.elements.color.value;

  myBody.style.backgroundColor = myInput;

  event.target.elements.color.value = "";
});
