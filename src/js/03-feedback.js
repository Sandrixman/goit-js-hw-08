const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener("input", throttle(onTextareaInput, 500));
form.addEventListener("submit", onSendForm);

loadFormData();

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
  const parceFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parceFormData.email) {
    formData.email = parceFormData.email;
    email.value = formData.email;
  }
  if (parceFormData.message) {
    formData.message = parceFormData.message;
    message.value = formData.message;
  }
}

function onSendForm(evt) {
  evt.preventDefault();
  console.log(`Email: ${email.value} / Message: ${message.value}`);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
