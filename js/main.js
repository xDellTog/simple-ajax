'use strict';

const $ = document.querySelector.bind(document);

(
	function() {
		
		let btnGetHtml = $('#btnGetHtml');
		let btnGetJson = $('#btnGetJson');
		let btnPostHtml = $('#btnPostHtml');
		let btnPostJson = $('#btnPostJson');
		let btnGetText = $('#btnGetText');
		let btnPostText = $('#btnPostText');
		let divResult = $('#result');

		btnGetHtml.onclick = function(ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'GET',
				url: 'res/get.html',
				dataType: 'html'
			});
			divResult.innerHTML += ajax.response;
		}
		btnPostHtml.onclick = function(ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'POST',
				url: 'res/index.php',
				dataType: 'html',
				body: { opt: 'HTML' }
			});
			divResult.innerHTML += ajax.response;
		}

		btnGetJson.onclick = function(ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'GET',
				url: 'res/get.json',
				dataType: 'json',
			});
			console.dir(ajax.response);
		}
		btnPostJson.onclick = function(ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'POST',
				url: 'res/index.php',
				dataType: 'json',
				body: {
					opt: 'JSON',
					Data: 'Loaded by POST JSON',
					Name: 'Simple-Ajax'
				}
			});
			console.dir(ajax.response);
		}

		btnGetText.onclick = function(ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'GET',
				url: 'res/get.txt',
				dataType: 'text',
			});
			console.dir(ajax.response);
			divResult.innerHTML += ajax.response;
		}
		btnPostText.onclick = function(ev) {
			ev.preventDefault();
			let ajax = new Ajax({
				type: 'POST',
				url: 'res/index.php',
				dataType: 'text',
				body: { opt: 'TXT' }
			});
			console.dir(ajax.response);
			divResult.innerHTML += ajax.response;
		}

	}()
);