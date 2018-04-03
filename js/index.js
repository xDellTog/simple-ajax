'use strict';

(
	function() {
		console.log('ready!');

		let btnGetHtml = $('#btnGetHtml');
		let btnGetJson = $('#btnGetJson');

		btnGetHtml.onclick = function(ev) {
			ev.preventDefault();
			console.log('clicked');
			let ajax = new Ajax({
				type: 'GET',
				url: '../php/main.php',
				dataType: 'html',
				async: false,
				body: {
					nome: 'Daniel',
					senha: 'Senha',
					sexo: 'Masculino'
				}
			});
			console.dir(ajax.response);
		}
		btnGetJson.onclick = function (ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'GET',
				url: '../php/main.php',
				dataType: 'json',
				async: false,
				body: {
					nome: 'Daniel',
					senha: 'Senha',
					sexo: 'Masculino'
				}
			});
		}
	}()
);