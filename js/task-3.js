const TextInput = document.querySelector("#name-input");

const TextOutput = document.querySelector("#name-output");

TextInput.addEventListener("input", (event) => {
  const TextInputClearSpace = TextInput.value.trim();
  if (TextInputClearSpace === "") {
    TextOutput.textContent = "Anonymous";
  } else {
    TextOutput.textContent = event.currentTarget.value;
  }
});
