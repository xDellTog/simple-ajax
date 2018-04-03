'use strict';

const $ = function(selector) {
	return document.querySelector.bind(selector);
}

function Ajax(set) {
	console.log(this);

	set.url 		= set.url 		|| null;
	set.body 		= set.body 		|| null;
	set.async 		= set.async 	|| false;
	set.type 		= set.type 		|| 'GET';
	set.dataType	= set.dataType 	|| 'html';

	this.response = {};

	let xhr = new XMLHttpRequest();
	xhr.open(set.type, set.url, set.async);

	if (set.type == 'GET') {
		xhr.send();
		if (set.dataType == 'html') {
			if (xhr.status == 200) {
				this.response = xhr.responseText;
			} else {
				console.log('error');
			}
		} else {
			if (xhr.status == 200) {
				this.response = JSON.parse(xhr.responseText);
			} else {
				console.log('error');
			}
		}
	} else if (set.type == 'POST') {
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(transform(set.body));
		if (set.dataType == 'html') {
			if (xhr.status == 200) {
				this.response = xhr.responseText;
			} else {
				console.log('error');
			}
		} else {
			if (xhr.status == 200) {
				this.response = JSON.parse(xhr.responseText);
			} else {
				console.log('error');
			}
		}
	}

	function transform(body) {
		var aux = JSON.stringify(body);
		aux = aux.replace(/:/g, '=');
		aux = aux.replace(/,/g, '&');
		aux = aux.replace(/"/g, '');
		aux = aux.replace('{', '');
		aux = aux.replace('}', '');
		return aux;
	}
}