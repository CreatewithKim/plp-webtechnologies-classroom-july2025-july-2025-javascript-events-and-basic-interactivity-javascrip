// ===============================
// Part 1: Event Handling Example
// ===============================
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "🎉 Button was clicked!";
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Example
let count = 0;
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

// ===============================
// Part 3: Form Validation
// ===============================
const form = document.getElementById("myForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from refreshing the page

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let errors = [];

  // Name validation
  if (name === "") {
    errors.push("Name is required.");
  }

  // Email validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errors.push("Enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Show messages
  if (errors.length > 0) {
    formMessage.style.color = "red";
    formMessage.innerHTML = errors.join("<br>");
  } else {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Form submitted successfully!";
    form.reset(); // clear form fields
  }
});
