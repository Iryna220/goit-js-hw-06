//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
//Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const countCategory = document.querySelectorAll('.item');

const allCategory = countCategory.forEach((item, el) =>
    console.log(`Number of countCategory: ${countCategory.length}`));//Number of categories: 3

countCategory.forEach((item) => {
    const allTitel = item.querySelector('h2');
    const allList = item.querySelectorAll('li');
    console.log(`Category: ${allTitel.textContent}\nElements: ${allList.length}`)
}); // Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5  




