//Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color
//і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
 }

const changeColorBtn = document.querySelector('.change-color');
const spanDescColor = document.querySelector('.color');
// const bodyDescColor = document.querySelector('body');

changeColorBtn.addEventListener('click', () => {
    spanDescColor.textContent = getRandomHexColor();

document.body.style.backgroundColor = `${spanDescColor.textContent}`;
});




