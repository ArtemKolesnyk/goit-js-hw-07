// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
const inputRef = document.querySelector('#validation-input');

const validationInput = () => {
  if (inputRef.getAttribute('data-length') == inputRef.value.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
};
inputRef.addEventListener('blur', validationInput);
  