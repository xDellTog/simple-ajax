'use strict';

(
	function() {
		
		let btnGetHtml = $('#btnGetHtml');
		let btnGetJson = $('#btnGetJson');
		let btnPostHtml = $('#btnPostHtml');
		let btnPostJson = $('#btnPostJson');

		btnGetHtml.onclick = function(ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'GET',
				url: 'get/get.html',
				dataType: 'html',
				async: false
			});
			console.dir(ajax.response);
		}

		btnGetJson.onclick = function (ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'GET',
				url: 'get/get.json',
				dataType: 'json',
				async: false
			});
			console.dir(ajax.response);
		}

		btnPostHtml.onclick = function (ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'POST',
				url: 'php/index.php',
				dataType: 'html',
				async: false,
				body: { opt: 'HTML' }
			});
			console.dir(ajax.response);
		}

		btnPostJson.onclick = function (ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'POST',
				url: 'php/index.php',
				dataType: 'json',
				async: false,
				body: {
					opt: 'JSON',
					Data: 'Loaded by POST JSON',
					Name: 'Simple-Ajax'
				}
			});
			console.dir(ajax.response);
		}

	}()
);