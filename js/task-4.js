const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", handler);

function handler(event) {
  event.preventDefault();
  const form = event.target;
  const emailData = form.elements.email.value;
  const paswordData = form.elements.password.value;
  if (emailData === "" || paswordData === "") {
    return alert("All form fields must be filled in");
  }
  const formData = {
    email: emailData.trim(),
    password: paswordData.trim(),
  };
  form.reset();

  console.log("formData", formData);
}
