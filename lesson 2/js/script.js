let budjet = +prompt("Какой у вас бюджет?");
	ShopName = prompt("Название вашего магазина?");

mainList = {
	budjet,
	ShopName,
	shopGoods: [],
	employers: {},
	open: true
}


for (let i = 0; i < 3; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log("Добавлен продукт: " + a);
		mainList.shopGoods[i] = a;
	} else {
		alert("Введите корректное значение!");
		i--;
	}
}

let moneyDay = budjet / 30;
let time = 28;
if (time < 0 || time > 24) {
	alert( "На нашей планете нет такого времени!");
} else if (time > 20 && time <= 24) {
	alert("Магазин еще закрыт!");
} else if (time >= 0 && time < 9) {
	alert('Магазин еще закрыт!');	
} else {
	alert("Время работать!");
}

console.log(mainList);
console.log(moneyDay);
alert("Ваш бюджет на день: " + moneyDay);



//Другие вариенты цикла:

// let i = 0;
// while (i < 3) {
// 	let a = prompt('bla');
// 	mainList.shopGoods[i] = a;
// 	i++;
// }


// do {
// 	let a = prompt('bla');
// 	mainList.shopGoods[i] = a;	
// 	i++;
// }
// while (i < 3);


//Усложненное задание

// let num = '33721';
// let arr = num.split('');

// let numArr0 = +arr[0];
// 	numArr1 = +arr[1];
// 	numArr2 = +arr[2];
// 	numArr3 = +arr[3];
// 	numArr4 = +arr[4];



// let res = arr[0] * arr[1] * arr[2] * arr[3] * arr[4];

// console.log(arr);
// console.log(res);
// console.log(res**3);

