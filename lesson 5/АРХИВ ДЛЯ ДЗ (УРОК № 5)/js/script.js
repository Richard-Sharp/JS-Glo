
let menuItem = document.getElementsByClassName('menu-item'),
	bodyImg = document.getElementsByTagName('body'),
	head = document.getElementById('title'),
	menu = document.getElementsByClassName('menu')[0],
	menuItem1 = document.getElementsByClassName('menu-item')[1],
	adv = document.getElementsByClassName('adv'),
	body = document.querySelector ('body'),
	ask = document.getElementById('prompt');

let menuItem5 = document.createElement('li');
menuItem5.classList.add('menu-item');
menuItem5.textContent = "Пятый пункт";

console.log(menuItem5);

menu.appendChild(menuItem5);
menu.replaceChild(menuItem[2], menuItem[1]);
menu.insertBefore(menuItem1, menuItem[2]);

adv[0].remove();
body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную техниу Apple';
ask.textContent = prompt("Ваше отношение к технике apple?");