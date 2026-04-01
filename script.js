/**
 * Shared validation helpers for student assignment forms.
 */

function validateNameLettersOnly(name) {
  if (typeof name !== "string") return false;
  const trimmed = name.trim();
  return trimmed.length > 0 && /^[A-Za-z ]+$/.test(trimmed);
}

function validatePhoneTenDigits(phone) {
  if (typeof phone !== "string") return false;
  return /^[0-9]{10}$/.test(phone.trim());
}

/** Procurement & contact: email must contain @ */
function validateEmailContainsAt(email) {
  if (typeof email !== "string") return false;
  return email.includes("@");
}

/** Feedback: simple valid email format */
function validateEmailFormat(email) {
  if (typeof email !== "string") return false;
  const trimmed = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

function validateNotEmpty(value) {
  if (value === null || value === undefined) return false;
  return String(value).trim().length > 0;
}

function validateProcurementForm(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('[name="name"]');
  const phone = form.querySelector('[name="phone"]');
  const email = form.querySelector('[name="email"]');
  const address = form.querySelector('[name="address"]');
  const product = form.querySelector('[name="product"]');
  const quantity = form.querySelector('[name="quantity"]');

  if (!validateNotEmpty(name.value)) {
    alert("Please enter your name.");
    name.focus();
    return false;
  }
  if (!validateNameLettersOnly(name.value)) {
    alert("Name must contain only letters and spaces.");
    name.focus();
    return false;
  }
  if (!validateNotEmpty(phone.value)) {
    alert("Please enter your phone number.");
    phone.focus();
    return false;
  }
  if (!validatePhoneTenDigits(phone.value)) {
    alert("Phone must be exactly 10 digits.");
    phone.focus();
    return false;
  }
  if (!validateNotEmpty(email.value)) {
    alert("Please enter your email.");
    email.focus();
    return false;
  }
  if (!validateEmailContainsAt(email.value)) {
    alert("Email must contain @.");
    email.focus();
    return false;
  }
  if (!validateNotEmpty(address.value)) {
    alert("Please enter your address.");
    address.focus();
    return false;
  }
  if (!validateNotEmpty(product.value)) {
    alert("Please select a product.");
    product.focus();
    return false;
  }
  if (!validateNotEmpty(quantity.value)) {
    alert("Please enter quantity.");
    quantity.focus();
    return false;
  }
  const qtyNum = Number(quantity.value);
  if (Number.isNaN(qtyNum) || qtyNum < 1) {
    alert("Quantity must be a positive number.");
    quantity.focus();
    return false;
  }

  alert("Order submitted successfully! (Demo — no data was sent.)");
  form.reset();
  return true;
}

function validateFeedbackForm(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('[name="name"]');
  const email = form.querySelector('[name="email"]');
  const rating = form.querySelector('[name="rating"]');
  const comments = form.querySelector('[name="comments"]');

  if (!validateNotEmpty(name.value)) {
    alert("Please enter your name.");
    name.focus();
    return false;
  }
  if (!validateNameLettersOnly(name.value)) {
    alert("Name must contain only letters and spaces.");
    name.focus();
    return false;
  }
  if (!validateNotEmpty(email.value)) {
    alert("Please enter your email.");
    email.focus();
    return false;
  }
  if (!validateEmailFormat(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return false;
  }
  if (!validateNotEmpty(rating.value)) {
    alert("Please select a rating.");
    rating.focus();
    return false;
  }
  if (!validateNotEmpty(comments.value)) {
    alert("Comments cannot be empty.");
    comments.focus();
    return false;
  }

  alert("Thank you for your feedback! (Demo — no data was sent.)");
  form.reset();
  return true;
}

function validateContactForm(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('[name="name"]');
  const email = form.querySelector('[name="email"]');
  const message = form.querySelector('[name="message"]');

  if (!validateNotEmpty(name.value)) {
    alert("Please enter your name.");
    name.focus();
    return false;
  }
  if (!validateNameLettersOnly(name.value)) {
    alert("Name must contain only letters and spaces.");
    name.focus();
    return false;
  }
  if (!validateNotEmpty(email.value)) {
    alert("Please enter your email.");
    email.focus();
    return false;
  }
  if (!validateEmailContainsAt(email.value)) {
    alert("Email must contain @.");
    email.focus();
    return false;
  }
  if (!validateNotEmpty(message.value)) {
    alert("Message cannot be empty.");
    message.focus();
    return false;
  }

  alert("Message sent! (Demo — no data was sent.)");
  form.reset();
  return true;
}

function initForms() {
  const procurementForm = document.getElementById("procurement-form");
  if (procurementForm) {
    procurementForm.addEventListener("submit", validateProcurementForm);
  }

  const feedbackForm = document.getElementById("feedback-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", validateFeedbackForm);
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", validateContactForm);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initForms);
} else {
  initForms();
}
