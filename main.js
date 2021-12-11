// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// document.getElementById('main_header').className = 'group';


// b) робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName('ul');
// for (const ulElement of ul) {
//     ulElement.style.width = '400px';
// }


// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList');
// for (const linkListElement of linkList) {
//     linkListElement.style.width = '50%';
// }


// d) отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.getElementsByClassName('listElement2');
// for (const listElement2Element of listElement2) {
//     console.log(listElement2Element.innerText);
// }


// e) отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li');
// for (const liElement of li) {
//     liElement.style.background = 'silver';
// }


// f) отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName('a');
// for (const aElement of a) {
//     aElement.className = 'anchor';
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let a = document.getElementsByTagName('a');
// for (const aElement of a) {
//     if (aElement.innerText === 'link3') {
//         aElement.style.fontSize = '40px';
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let a = document.getElementsByTagName('a');
// for (const aElement of a) {
//     aElement.classList.add(aElement.innerText);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let value = prompt('який буде колір фону?');
// let subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.background = `${value}`;
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     if (subHeaderElement.innerText === 'content 2 segment') {
//         subHeaderElement.style.color = prompt('який буде колір?');
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content = document.getElementsByClassName('content_1');
// for (const contentElement of content) {
//     contentElement.innerText = prompt('text');
// }


// l) отримати елементи p та змінити їм padding на 20px
// let p = document.getElementsByTagName('p');
// for (const pElement of p) {
//     pElement.style.padding = '20px';
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let text2 = document.getElementsByClassName('text2')
// for (const text2Element of text2) {
//     text2Element.innerText = 'sep-2021';
// }