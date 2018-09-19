let budjet = +prompt("Какой у вас бюджет?");
	ShopName = prompt("Название вашего магазина?");
let shopGoods = [prod1 = prompt("Какой тип товаров будем продавать?"), 
				prod2 = prompt("Какой тип товаров будем продавать?"), 
				prod3 =	prompt("Какой тип товаров будем продавать?")];

mainList = {
	budjet,
	ShopName,
	shopGoods,
	employers: {},
	open: true
}


let moneyDay = budjet / 30;

console.log(mainList);
console.log(moneyDay);
alert("Ваш бюджет на день: " + moneyDay);


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

