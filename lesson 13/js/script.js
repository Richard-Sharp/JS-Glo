window.addEventListener('DOMContentLoaded', function() {

	let info = document.getElementsByClassName('info-header')[0],
		tab = document.getElementsByClassName("info-header-tab"),
		tabContent = document.getElementsByClassName('info-tabcontent');

	//Функция скрытия табов кроме 1-го

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);


	//Функция показа табов

	function showTabContent (b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	//Функция показа табов по клику

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	})

	//Таймер

	let deadline = '2018-10-06';

	function getTimerRemaining (endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( t/(1000*60*60) );

		return {
			'total': t,
			'seconds': seconds,
			'minutes': minutes,
			'hours': hours
		}; 	
	};

	function setClock (id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock () {
				let t = getTimerRemaining(endtime);
				if (t.hours < 10 && t.hours > 0 ) {
					hours.innerHTML = '0' + t.hours;
				} else if (t.hours < 0) {
					hours.innerHTML = '00';	
				} else {
					hours.innerHTML = t.hours;
				};

				if (t.minutes < 10 && t.minutes > 0 ) {
					minutes.innerHTML = '0' + t.minutes;
				} else if (t.minutes < 0) {
					minutes.innerHTML = '00';	
				} else {
					minutes.innerHTML = t.minutes;
				};
			
				if (t.seconds < 10 && t.seconds > 0 ) {
					seconds.innerHTML = '0' + t.seconds;
				} else if (t.seconds < 0) {
					seconds.innerHTML = '00';	
				} else {
					seconds.innerHTML = t.seconds;
				};
			};

			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
	};

	setClock('timer', deadline);

	//Модальное окно

	let btnMore = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		closeOverlay = document.querySelector('.popup-close'),
		descriptionOverlay = document.getElementsByClassName('description-btn');

	btnMore.addEventListener('click', function() {
		this.style.backgroundColor = 'black';
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';

	});

	closeOverlay.addEventListener('click', () => {
		overlay.style.display = 'none';
		document.body.style.overflow = '';
		btnMore.style.backgroundColor = 'transparent';
		btnMore.classList.add('fade');
	});


	function showDesccriptiomOverlay (n) {
		descriptionOverlay[n].addEventListener('click', () => {
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	})
	};

	for (let i = 0; i < descriptionOverlay.length; i++) {
		showDesccriptiomOverlay(i);
	}


	//Форма отправки данных пользователя
	// Form
	let massage = new Object();
	massage.loading = 'Зфгрузка...';
	massage.success = 'ваши данные успешно отправлены';
	massage.failure = 'Что-то пошло не так...';

	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		formContact = document.getElementById("form"),
		inputContact = formContact.getElementsByTagName("input"),
		statusMassage = document.createElement('div');
		statusMassage.classList.add('status');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		form.appendChild(statusMassage);

		//AJAX
		let request = new XMLHttpRequest(); 
		request.open("POST", 'server.php');

		request.setRequestHeader("content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);
		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMassage.innerHTML = massage.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMassage.innerHTML = massage.success;
				} else {
					statusMassage.innerHTML = massage.failure;
				}
			}
		}
		for (i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});

	formContact.addEventListener('submit', function (event) {
		event.preventDefault();
		formContact.appendChild(statusMassage);

		//AJAX
		let request = new XMLHttpRequest(); 
		request.open("POST", 'server.php');

		request.setRequestHeader("content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(formContact);
		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMassage.innerHTML = massage.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMassage.innerHTML = massage.success;
				} else {
					statusMassage.innerHTML = massage.failure;
				}
			}
		}

	})


	//Слайдер

	let sliderIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.getElementsByClassName('prev')[0],
		next = document.getElementsByClassName('next')[0],
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

		function showSlides (n) {
			if (n > slides.length) {
				sliderIndex = 1;
			};

			if (n < 1) {
				sliderIndex = slides.length;
			};

			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			}

			for (let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('dot-active');
			};

			slides[sliderIndex - 1].style.display = 'block';
			dots[sliderIndex - 1].classList.add('dot-active');
		}

	showSlides(sliderIndex);

	function plusSlide (n) {
		showSlides(sliderIndex += n);
	}

	function currentSlide (n) {
		showSlides(sliderIndex = n);
	}

	next.addEventListener('click', () => {
		plusSlide(1);
	});

	prev.addEventListener('click', () => {
		plusSlide(-1);
	});

	dotsWrap.addEventListener('click', function(event) {
		for (i = 0; i < dots.length + 1; i++ ) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});

});
