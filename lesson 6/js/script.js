let btnOpen = document.getElementById('open-btn'),

	nameValue = document.getElementsByClassName('name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0],

	goodsItemValue = document.getElementsByClassName('goods-item'),
	btns = document.getElementsByTagName('button'),

	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),

	hireEmployersItem = document.querySelectorAll('.hire-employers-item');



let budget,
	name,
	price = 3000;

btnOpen.addEventListener('click', () => {
	budget = +prompt("Какой у вас бюджет?", "");
	while (isNaN(budget) || budget == '' || budget == null) {
		alert('Введите корректную сумму');
		budget = +prompt("Какой у вас бюджет?", "");
	}
	budgetValue.textContent = budget;
	name = prompt("Название вашего магазина?", "").toUpperCase();
	nameValue.textContent = name;
});

function start () {
	budjet = +prompt("Какой у вас бюджет?");
	while (isNaN(budjet) || budjet == '' || budjet == null) {
		alert('Введите корректную сумму');
		budjet = +prompt("Какой у вас бюджет?");
	}
	ShopName = prompt("Название вашего магазина?").toUpperCase();
	time = 22;
}

let mainList = {
	shopMoney: budget,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	addProduct: function addProduct () {
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
	},
	countMoneyDay: function countMoneyDay (money) {
		let moneyDay = money / 30;
		alert("Ваш бюджет на день: " + moneyDay);
		console.log("Ваш бюджет на день: " + moneyDay);
	},
	showTimeWork: function showTimeWork (time) {
		if (time < 0 || time > 24) {
			alert( "На нашей планете нет такого времени!");
		} else if (time > 20 && time <= 24) {
			alert("Магазин еще закрыт!");
		} else if (time >= 0 && time < 9) {
			alert('Магазин еще закрыт!');	
		} else {
			alert("Время работать!");			
 		mainList.open = true;
		}
	},
	countDiscount: function countDiscount (price) {
		if (mainList.discount == true) {
			price = price*0.8;
			alert("Цена со скидкой: " + price);
		} else {
			alert("Скидка недоступна. Цена продукта: " + price);

		}
	},
	addEmployers: function addEmployers () {
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
	},
	chooseShopItems: function chooseShopItems () {
		let items = prompt("Перечислите через заяпятую товары", "");
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Добавьте еще товар:", ""));
		mainList.shopItems.sort();
	},
	showShopItems: function showShopItems () {
		mainList.shopItems.forEach( function(items, i) {
			alert(i+1 + ": " + items);
		});
	}

};

// for (let key in mainList) {
// 	console.log ("Наш магазин включает в себя: " + key);
// }


// start();
// countMoneyDay (budjet);
// addProduct();
// showTimeWork (15);
// countDiscount(3000);
// addEmployers();
// console.log(mainList);





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

