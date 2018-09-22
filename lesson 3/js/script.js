let budjet,
	ShopName,
	time,
	price;

function start () {
	budjet = +prompt("Какой у вас бюджет?");
	while (isNaN(budjet) || budjet == '' || budjet == null) {
		alert('Введите корректную сумму');
		budjet = +prompt("Какой у вас бюджет?");
	}
	ShopName = prompt("Название вашего магазина?").toUpperCase();
	time = 22;
}

mainList = {
	budjet,
	ShopName,
	shopGoods: [],
	employers: {},
	open: true,
	discount: false
}

function addProduct () {
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
}


function countMoneyDay (money) {
	let moneyDay = money / 30;
	alert("Ваш бюджет на день: " + moneyDay);
	console.log("Ваш бюджет на день: " + moneyDay);
}

function showTimeWork (time) {
	if (time < 0 || time > 24) {
		alert( "На нашей планете нет такого времени!");
	} else if (time > 20 && time <= 24) {
		alert("Магазин еще закрыт!");
	} else if (time >= 0 && time < 9) {
		alert('Магазин еще закрыт!');	
	} else {
		alert("Время работать!");
	}
}

function countDiscount (price) {
	if (mainList.discount == true) {
		price = price*0.8;
		alert("Цена со скидкой: " + price);
	} else {
		alert("Скидка недоступна. Цена продукта: " + price);

	}
}

function addEmployers () {
	for (let i = 1; i < 5; i++) {
		let b = prompt("Введите имя " + i + ". сотрудника.");
		if ( (typeof(b)) === 'string' && (typeof(b)) != null && b != '' && b.length < 30) {
		console.log("Добавлен " + i + ". сотрудник: " + b);
		let sp = " ";
		mainList.employers[i] = i + sp + b;
		} else {
		alert("Введите корректное имя!");
		i--;
		}
	}
}


// start();
// countMoneyDay (budjet);
// addProduct();
// showTimeWork (15);
// countDiscount(3000);
addEmployers();
console.log(mainList);





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

