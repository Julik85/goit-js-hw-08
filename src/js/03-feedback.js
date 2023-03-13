import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const LOCAL_NAME = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput() {
  const formData = {
    emailEl: emailEl.value,
    textareaEl: textareaEl.value,
  };
  localStorage.setItem(LOCAL_NAME, JSON.stringify(formData));
//   console.log(formData);
}

function onFormSubmit(event) {
  event.preventDefault();
  if (emailEl.value === '' || textareaEl.value === '') {
    return alert ('Заповніть всі поля!');
    }

  const saveLocalStorage = localStorage.getItem(LOCAL_NAME);
  const objectFromLocalStorage = JSON.parse(saveLocalStorage);
  console.log(objectFromLocalStorage);

  localStorage.removeItem(LOCAL_NAME);
  event.currentTarget.reset();
}

function populateForm() {
  const saveLocalStorage = localStorage.getItem(LOCAL_NAME);
  const objectFromLocalStorage = JSON.parse(saveLocalStorage);
  if (objectFromLocalStorage) {
    emailEl.value = objectFromLocalStorage.emailEl;
    textareaEl.value = objectFromLocalStorage.textareaEl;
  }
}