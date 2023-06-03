//Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//перевіряє його вміст щодо правильної кількості введених символів.
//Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


 const inputList = document.querySelector('#validation-input');
 inputList.addEventListener('blur', onBorderColor);

function onBorderColor(event) {
     inputList.classList.remove("invalid", "valid");
     if (inputList.value.length !== 6) {
          inputList.classList.add("invalid");
     } else {
          inputList.classList.add("valid")
     }
}


