'use strict';

const $ = function(selector) {
	return document.querySelector(selector);
}

function Ajax(set) {

	this.url 		= set.url 		|| null;
	this.body 		= set.body 		|| null;
	this.async 		= set.async 	|| false;
	this.type 		= set.type 		|| 'GET';
	this.dataType	= set.dataType 	|| 'html';
	this.response = {};

	let xhr = new XMLHttpRequest();
	xhr.open(this.type, this.url, this.async);

	if (this.type === 'GET') {
		xhr.send();
		if (this.dataType === 'html') {
			if (xhr.status === 200) {
				this.response = xhr.responseText;
			} else {
				console.log('error');
			}
		} else if (this.dataType === 'json') {
			if (xhr.status === 200) {
				this.response = JSON.parse(xhr.responseText);
			} else {
				console.log('error');
			}
		}
	} else if (this.type === 'POST') {
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(transform(this.body));
		if (this.dataType === 'html') {
			if (xhr.status === 200) {
				this.response = xhr.responseText;
			} else {
				console.log('error');
			}
		} else if (this.dataType === 'json') {
			if (xhr.status === 200) {
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