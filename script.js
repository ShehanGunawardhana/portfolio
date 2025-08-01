// Just for future use or interaction animations
window.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Shehan's Portfolio");
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValue = document.getElementById("name").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const subjectValue = document.getElementById("subject").value.trim();
    const messageValue = document.getElementById("message").value.trim();

    if (!nameValue || !emailValue || !subjectValue || !messageValue) {
      response.style.color = "orange";
      response.textContent = "Please fill in all fields.";
      return;
    }

    // Simulate successful submission
    response.style.color = "#00ff99";
    response.textContent = "Thank you! Your message has been received.";

    form.reset(); // Clear the form
  });
});
