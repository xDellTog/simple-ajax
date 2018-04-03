'use strict';

(function() {

	$('#btnGetHtml').onclick = function(ev) {
		ev.preventDefault();
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
	}
	$('#btnGetJson').onclick = function (ev) {
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
}());