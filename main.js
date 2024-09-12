const inputs = document.querySelectorAll("#num");
const display = document.getElementById("display");

inputs.forEach((input) => {
  input.addEventListener("click", function () {
    // Update the display value with the input's value
    display.value += input.value;
  });
});
