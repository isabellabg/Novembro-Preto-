const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Clique aqui") {
    button.value = "Stop machine";
    paragraph.textContent = "Obrigado pela atenção";
  } else {
    button.value = "Start machine";
    paragraph.textContent = ":)";
  }
}