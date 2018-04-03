'use strict';

(
	function() {
		console.log('ready!');

		let btnGetHtml = $('#btnGetHtml');
		let btnGetJson = $('#btnGetJson');
		let btnPostHtml = $('#btnPostHtml');
		let btnPostJson = $('#btnPostJson');

		btnGetHtml.onclick = function(ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'GET',
				url: '../view/get.html',
				dataType: 'html',
				async: false
			});
			console.dir(ajax.response);
		}

		btnGetJson.onclick = function (ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'GET',
				url: '../get.json',
				dataType: 'json',
				async: false
			});
			console.dir(ajax.response);
		}

		btnPostHtml.onclick = function (ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'POST',
				url: '../php/main.php',
				dataType: 'html',
				async: false,
				body: {
					acao: 'PostHtml',
					nome: 'Daniel',
					email: 'dk@mail.com'
				}
			});
			console.dir(ajax.response);
		}

		btnPostJson.onclick = function (ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'POST',
				url: '../php/main.php',
				dataType: 'json',
				async: false,
				body: {
					acao: 'PostJson',
					nome: 'Daniel',
					email: 'dk@mail.com'
				}
			});
			console.dir(ajax.response);
		}

	}()
);