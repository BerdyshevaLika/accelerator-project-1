const form = document.querySelector('.form__form');
const formInputs = form.querySelectorAll('.form__input');
// const inputTel = document.querySelector('#input-tel');
// const inputName = document.querySelector('#input-name');

// const VALID_SYMBOLS = {
//   TEL: /^[0-9-+()\s]+$/,
//   NAME: /^[a-zA-Za-яёА-ЯË\s]+$/,
// };

const messages = {
  required: 'Это обязательное поле',
  error: 'Введены некорректные данные',
};

// const validateTextInputTel = () => {
//   inputTel.addEventListener('input', () => {
//     inputTel.value.replace(VALID_SYMBOLS.TEL, '');
//   });
// };

const showMessage = (isValueMissing, element) => {
  let message = messages.error;
  if (isValueMissing) {
    message = messages.required;
  }
  element.nextElementSibling.textContent = message;
  element.classList.add('form__input--error');
};

const initFormValidation = () => {
  formInputs.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      if (formInput.validity.valid) {
        formInput.classList.remove('form__input--error');
      }
    });
  });

  form.addEventListener('submit', (event) => {
    formInputs.forEach((formInput) => {
      if (!formInput.validity.valid) {
        showMessage(formInput.validity.valueMissing, formInput);
        event.preventDefault();
      }
    });
  });
};

export { initFormValidation };
