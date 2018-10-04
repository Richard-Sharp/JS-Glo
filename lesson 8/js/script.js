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

});

